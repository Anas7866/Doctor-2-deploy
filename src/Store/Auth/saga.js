import axios from "../../Routes/AxiosConfig";
import axiosConfig from "../../Routes/AxiosConfigg";
import { fork, put, all, select, takeLatest } from "redux-saga/effects";
// Login Redux States
import {
  LOGIN,
  CHANGE_PASSWORD,
  SIGNUP_USER,
  DROPDOWN_SHOW,
  SHOW_QUESTIONS,
  QUESTION_FORM_SUBMIT,
  VERIFY_OTP,
  GET_PROFILE,
  SHOW_DATA_NEW_TICKETS,
  SHOW_DATA_PENDING_TICKETS,
  SHOW_DATA_COMPLETED_TICKETS,
  GET_TICKET_DETAILS,
  TICKET_ACCEPTANCE,
  ACCEPT_USER_TICKET,
  DECLINE_TICKET,
  SUBMIT_OPINION,
} from "./actionTypes";
import {
  declineticketsuccess,
  dropdownsuccess,
  getallcompletedticketsuccess,
  getallnewticketsuccess,
  getallpendingticketsuccess,
  getprofilesuccess,
  loginSuccess,
  show_questions_success,
  signupusersuccess,
  verifyotpsuccess,
  viewticketdetailsuccess,
} from "./actions";
import { push } from "connected-react-router";
import { sagaErrorHandler } from "../../Shared/HelperMethods/SagaErrorHandler";
import { toast } from "react-toastify";
import { makeSelectAuthToken } from "../selector";

//If user is login then dispatch redux action's are directly from here.
function* loginUser({ payload }) {
  try {
    payload.setIsLoading(true);
    // let data = {
    //   email: payload.email,
    //   password: payload.password,
    // };
    const formData = new FormData();
    formData.append("email", payload.email);
    formData.append("password", payload.password);
    const response = yield axios.post("/doctor-portal/api/login", formData);
    console.log(response);
    payload.history.push("/Dashboard-Admin");
    
    // if (response.data.data.role === "Admin")
    //   if (response.data.data.role === "Admin") {

    //   } else {
    //     payload.history.push("/dashboard");
    //   }
    yield put(loginSuccess(response.data));
    payload.setIsLoading(false);
    // payload.setIsLoading(false);
  } catch (error) {
    payload.setIsLoading(false);
    alert(error);
    // yield sagaErrorHandler(error.response);
   
  }
}

// function* loginUser({ payload }) {
//   try {
//     payload.setIsLoading(true);
//     let data = {
//       email: payload.email,
//       password: payload.password,
//     };
//     const response = yield fetch("https://usenami.com/api/v1/admin/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "applicatio4n/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const responseData = yield response.json();
//     console.log(responseData);

//     if (responseData.data.data.role === "Admin") {
//       yield put(push("/Dashboard-Admin"));
//     } else {
//       yield payload.history.push("/dashboard");
//     }

//     // yield put(loginSuccess(responseData.data.data));
//     payload.setIsLoading(false);
//   } catch (error) {
//     yield sagaErrorHandler(error.response.data.data);
//     payload.setIsLoading(false);
//   }
// }

// function* loginUser({ payload }) {
//   try {
//     payload.setIsLoading(true);
//     let data = {
//       email: payload.email,
//       password: payload.password,
//     };
//     const response = yield fetch("https://usenami.com/api/v1/admin/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const responseData = yield response.json();
//     console.log(responseData);

//     if (responseData.data.data.role === "Admin") {
//       yield payload.history.push("/Dashboard-Admin");
//     } else {
//       yield payload.history.push("/dashboard");
//     }

//     yield put(loginSuccess(responseData.data.data));
//     payload.setIsLoading(false);
//   } catch (error) {
//     yield sagaErrorHandler(error.response.data.data);
//     payload.setIsLoading(false);
//   }
// }

function* getAllDropdownshow() {
  // const token = yield select(makeSelectAuthToken());
  try {
    const response = yield axios.get(`/doctor-portal/api/categories`);
    console.log("response", response.data);
    yield put(dropdownsuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* showquestionsbyid(payload) {
  // const token = yield select(makeSelectAuthToken());
  try {
    const response = yield axios.get(
      `/doctor-portal/api/forms/${payload.payload}`
    );
    console.log("response", response.data);
    yield put(show_questions_success(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* submitQuestionForm(payload) {
  console.log("--- payload submit form ", payload.payload);
  try {
    payload.payload.setIsLoading(true);
    let data = {
      answers: payload.payload.answers,
      email: payload.payload.email,
      form: payload.payload.form,
    };
    const response = yield axios.post(
      `/doctor-portal/api/submit-request/`,
      data
    );
    console.log("response", response.data);
    payload.payload.setIsLoading(false);
    yield put(push("/mobile-verification"));
  } catch (error) {
    payload.payload.setIsLoading(false);
    yield sagaErrorHandler(error.response.data);
  }
}

function* registerUser({ payload }) {
  try {
    payload.setIsLoading(true);
    let data = {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    };
    const response = yield axios.post("/doctor-portal/api/register", data);
    console.log("payload", payload);
    payload.setIsLoading(false);
    // payload.history.push("/mobile-verification");
    yield put(signupusersuccess(response.data));
    yield put(push("/dropdown"));
  } catch (error) {
    payload.setIsLoading(false);
    yield sagaErrorHandler(error.response.data);
  }
}

function* verifyotpfunc({ payload }) {
  try {
    console.log("resssssss", payload);
    payload.setIsLoading(true);
    const formData = new FormData();
    formData.append("email", payload.email);
    formData.append("code", payload.code);
    const response = yield axios.post(
      "/doctor-portal/api/verify-otp/",
      formData
    );
    console.log("resssssss", response);
    if (response.data.status === true) {
      yield put(push("/thankyou"));
      payload.setIsLoading(false);
    } else {
      alert("api failed");
    }
    // yield put(loginSuccess(response.data.data));
    payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* forgotPasswordRequest({ payload }) {
  try {
    payload.setIsLoading(true);
    let data = {
      email: payload.email,
    };
    yield axios.post("admin/forgetPassword", data);
    payload.history.push("/login");
    toast.success("Please check you email");
    payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* resetPasswordRequest({ payload }) {
  try {
    payload.setIsLoading(true);
    let data = {
      token: payload.token,
      newPassword: payload.password,
    };
    yield axios.put("admin/resetPassword", data);
    toast.success("Password reset successfully");
    payload.history.push("/login");
    payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    payload.setIsLoading(false);
  }
}

function* changePasswordRequest({ payload }) {
  const token = yield select(makeSelectAuthToken());
  try {
    let data = {
      currentPassword: payload.currentPassword,
      newPassword: payload.newPassword,
    };
    const response = yield axios.put("admin/changePassword", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    payload.history.push("/Dashboard-Admin");
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* getuserprofilefunc() {
  const token = yield select(makeSelectAuthToken());
  try {
    const response = yield axios.get(`/doctor-portal/api/profile`, {
      headers: {
        Authorization: `Token  ${token}`,
      },
    });
    console.log("response token", response.data);
    yield put(getprofilesuccess(response.data));
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* getnewticketsfunc({payload}) {
  const token = yield select(makeSelectAuthToken());
  try {
    console.log("newurllnewurll", payload)
    const response = yield axios.get(payload, {
      headers: {
        Authorization: `Token  ${token}`,
      },
    });
    console.log("response token doctor portal", response.data.results);
    yield put(getallnewticketsuccess(response.data))
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* getpendingticketsfunc() {
  const token = yield select(makeSelectAuthToken());
  try {
    const response = yield axios.get(`/doctor-portal/api/my-pending-tickets/`, {
      headers: {
        Authorization: `Token  ${token}`,
      },
    });
    console.log("response token doctor portal ---------1", response.data.results);
    yield put(getallpendingticketsuccess(response.data.results))
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* getcompletedticketsfunc() {
  const token = yield select(makeSelectAuthToken());
  try {
    const response = yield axios.get(`/doctor-portal/api/my-completed-tickets/`, {
      headers: {
        Authorization: `Token  ${token}`,
      },
    });
    console.log("response token doctor portal ---------2", response.data.results);
    yield put(getallcompletedticketsuccess(response.data.results))
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* viewticketsfunc({payload}) {
  const token = yield select(makeSelectAuthToken());
  try {
    const response = yield axios.get(`/doctor-portal/api/view-ticket/${payload.id}`, {
      headers: {
        Authorization: `Token  ${token}`,
      },
    });
    console.log("response token doctor portal ---------2", response.data.request);
    yield put(viewticketdetailsuccess(response.data))
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}
function* acceptanceapiticketsfunc({ payload }) {
  const token = yield select(makeSelectAuthToken());
  try {
    // payload.setIsLoading(true);
    const formData = new FormData();
    formData.append("id",  payload.id);
    
    const response = yield axios.post("/doctor-portal/api/tickets-accept/", formData, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log("response from acceptacne api ",response)
    toast.success("accepted")
    window.location.reload();
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}

function* acceptuserticketfunc({ payload }) {
  const token = yield select(makeSelectAuthToken());
  try {
    // payload.setIsLoading(true);
    const formData = new FormData();
    formData.append("id",  payload.id);
    
    const response = yield axios.post("/doctor-portal/api/tickets-accept/", formData, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log("response from acceptacne api ",response)
    toast.success("accepted")
    yield put(push(`/Tickets`));
    // toast.success("Please check you email");
    // payload.setIsLoading(false);
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
    // payload.setIsLoading(false);
  }
}


function* submitopinion({ payload }) {
  const token = yield select(makeSelectAuthToken());
  try {
    // payload.setIsLoading(true);
    const formData = new FormData();
    formData.append("doctor",  payload.doctor);
    formData.append("request",  payload.request);
    formData.append("opinion",  payload.opinion);
    formData.append("files",  payload.files);
    const response = yield axios.post("/doctor-portal/api/opinion/", formData, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log("response from acceptacne api ",response)
    toast.success("Opinion submitted")
    yield put(push("/Tickets"));
  } catch (error) {
    yield sagaErrorHandler(error.response.data);
  }
}


function* declineTicket(payload) {
  const token = yield select(makeSelectAuthToken());


 try {
  const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
      const formData = new FormData();
      formData.append('request', payload.payload.request);
      formData.append('reason', payload.payload.reason);
   const response = yield axios.post(
      `/doctor-portal/api/decline-request/`,
      formData,
      config
   );
   toast.success("Request has been declined");
   window.location.reload();
   console.log("response form data" , response.data);
   yield put(declineticketsuccess(response.data));
 } catch (error) {
   yield sagaErrorHandler(error.response.data);
 }
}


export function* watchQuestionSubmitForm() {
  yield takeLatest(QUESTION_FORM_SUBMIT, submitQuestionForm);
}

export function* watchLogin() {
  yield takeLatest(LOGIN, loginUser);
}

export function* watchRegister() {
  yield takeLatest(SIGNUP_USER, registerUser);
}
export function* watchdropdownshow() {
  yield takeLatest(DROPDOWN_SHOW, getAllDropdownshow);
}
export function* showquestionall() {
  yield takeLatest(SHOW_QUESTIONS, showquestionsbyid);
}
export function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, changePasswordRequest);
}

export function* verifyotpbinder() {
  yield takeLatest(VERIFY_OTP, verifyotpfunc);
}

export function* getprofilebinder() {
  yield takeLatest(GET_PROFILE, getuserprofilefunc);
}
export function* getnewticketsfuncbinder() {
  yield takeLatest(SHOW_DATA_NEW_TICKETS, getnewticketsfunc);
}
export function* getpendingticketsfuncbinder() {
  yield takeLatest(SHOW_DATA_PENDING_TICKETS, getpendingticketsfunc);
}
export function* getcompletedticketsfuncbinder() {
  yield takeLatest(SHOW_DATA_COMPLETED_TICKETS, getcompletedticketsfunc);
}

export function* viewticketsbinder() {
  yield takeLatest(GET_TICKET_DETAILS, viewticketsfunc);
}

export function* acceptanceapiticketsfuncbinder() {
  yield takeLatest(TICKET_ACCEPTANCE, acceptanceapiticketsfunc);
}

export function* acceptuserticketfuncbinder() {
  yield takeLatest(ACCEPT_USER_TICKET, acceptuserticketfunc);
}

export function* declineTicketfuncbinder() {
  yield takeLatest(DECLINE_TICKET, declineTicket);
}

export function* submitopinionfuncbinder() {
  yield takeLatest(SUBMIT_OPINION, submitopinion);
}







export default function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchdropdownshow),
    fork(showquestionall),
    fork(watchChangePassword),
    fork(watchQuestionSubmitForm),
    fork(verifyotpbinder),
    fork(getprofilebinder),
    fork(getnewticketsfuncbinder),
    fork(getpendingticketsfuncbinder),
    fork(getcompletedticketsfuncbinder),
    fork(viewticketsbinder),
    fork(acceptanceapiticketsfuncbinder),
    fork(acceptuserticketfuncbinder),
    fork(declineTicketfuncbinder),
    fork(submitopinionfuncbinder),
  ]);
}
