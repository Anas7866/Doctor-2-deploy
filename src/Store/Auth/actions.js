import {
  LOGIN,
  LOGIN_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  LOGOUT,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  CHANGE_PASSWORD,
  DROPDOWN_SHOW,
  DROPDOWN_SHOW_SUCCESS,
  SHOW_QUESTIONS,
  SHOW_QUESTIONS_SUCCESS,
  QUESTION_FORM_SUBMIT,
  QUESTION_FORM_SUBMIT_SUCCESS,
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  SHOW_DATA_NEW_TICKETS,
  SHOW_DATA_NEW_TICKETS_SUCCESS,
  SHOW_DATA_PENDING_TICKETS,
  SHOW_DATA_PENDING_TICKETS_SUCCESS,
  SHOW_DATA_COMPLETED_TICKETS,
  SHOW_DATA_COMPLETED_TICKETS_SUCCESS,
  GET_TICKET_DETAILS,
  GET_TICKET_DETAILS_SUCCESS,
  TICKET_ACCEPTANCE,
  TICKET_ACCEPTANCE_SUCCESS,
  ACCEPT_USER_TICKET,
  DECLINE_TICKET,
  DECLINE_TICKET_SUCCESS,
  SUBMIT_OPINION,
  SUBMIT_OPINION_SUCCESS,
} from "./actionTypes";

export const loginUser = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const signupuser = (data) => {
  return {
    type: SIGNUP_USER,
    payload: data,
  };
};
export const question_form_submit = (data) => {
  return {
    type: QUESTION_FORM_SUBMIT,
    payload: data,
  };
};
// export const question_form_success = (data) => {
//   return {
//     type: QUESTION_FORM_SUBMIT_SUCCESS,
//     payload: data,
//   };
// };

export const submit = (data) => {
  return {
    type: SIGNUP_USER,
    payload: data,
  };
};

export const dropdown = (data) => {
  return {
    type: DROPDOWN_SHOW,
    payload: data,
  };
};

export const dropdownsuccess = (data) => {
  return {
    type: DROPDOWN_SHOW_SUCCESS,
    payload: data,
  };
};

export const getprofile = (data) => {
  return {
    type: GET_PROFILE,
    payload: data,
  };
};

export const getprofilesuccess = (data) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: data,
  };
};

export const show_questions = (data) => {
  return {
    type: SHOW_QUESTIONS,
    payload: data,
  };
};

export const show_questions_success = (data) => {
  return {
    type: SHOW_QUESTIONS_SUCCESS,
    payload: data,
  };
};

export const signupusersuccess = (data) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const registerUser = (data) => {
  return {
    type: REGISTER_USER,
    payload: data,
  };
};

export const registerUserSuccessful = (data) => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: data,
  };
};

export const verifyotp = (data) => {
  return {
    type: VERIFY_OTP,
    payload: data,
  };
};
export const verifyotpsuccess = (data) => {
  return {
    type: VERIFY_OTP_SUCCESS,
    payload: data,
  };
};

///////////////////////////////////////////////////////

export const forgotPassword = (data) => {
  return {
    type: FORGOT_PASSWORD,
    payload: data,
  };
};

export const resetPassword = (data) => {
  return {
    type: RESET_PASSWORD,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const changePassword = (data) => {
  return {
    type: CHANGE_PASSWORD,
    payload: data,
  };
};


export const getallnewtickets = (data) => {
  return {
    type: SHOW_DATA_NEW_TICKETS,
    payload: data,
  };
};

export const getallnewticketsuccess = (data) => {
  return {
    type: SHOW_DATA_NEW_TICKETS_SUCCESS,
    payload: data,
  };
};


export const getallpendingticket = (data) => {
  return {
    type: SHOW_DATA_PENDING_TICKETS,
    payload: data,
  };
};


export const getallpendingticketsuccess = (data) => {
  return {
    type: SHOW_DATA_PENDING_TICKETS_SUCCESS,
    payload: data,
  };
};


export const getallcompletedticket = (data) => {
  return {
    type: SHOW_DATA_COMPLETED_TICKETS,
    payload: data,
  };
};


export const getallcompletedticketsuccess = (data) => {
  return {
    type: SHOW_DATA_COMPLETED_TICKETS_SUCCESS,
    payload: data,
  };
};

export const viewticketdetail = (data) => {
  return {
    type: GET_TICKET_DETAILS,
    payload: data,
  };
};

export const viewticketdetailsuccess = (data) => {
  return {
    type: GET_TICKET_DETAILS_SUCCESS,
    payload: data,
  };
};

export const ticketacceptance = (data) => {
  return {
    type: TICKET_ACCEPTANCE,
    payload: data,
  };
};

export const ticketacceptancesuccess = (data) => {
  return {
    type: TICKET_ACCEPTANCE_SUCCESS,
    payload: data,
  };
};

export const acceptuserticket = (data) => {
  return {
    type: ACCEPT_USER_TICKET,
    payload: data,
  };
};


export const declineticket = (data) => {
  return {
    type: DECLINE_TICKET,
    payload: data,
  };
};

export const declineticketsuccess = (data) => {
  return {
    type: DECLINE_TICKET_SUCCESS,
    payload: data,
  };
};

export const submitopinion = (data) => {
  return {
    type: SUBMIT_OPINION,
    payload: data,
  };
};

export const submitopinionsuccess = (data) => {
  return {
    type: SUBMIT_OPINION_SUCCESS,
    payload: data,
  };
};
