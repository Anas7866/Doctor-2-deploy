import axios from "../../Routes/AxiosConfig";
import axiosConfig from "../../Routes/AxiosConfigg";
import { fork, put, all, select, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { sagaErrorHandler } from "../../Shared/HelperMethods/SagaErrorHandler";
import { toast } from "react-toastify";
import { makeSelectAuthToken } from "../selector";
import { ADD_BANK_DETAILS, GET_BANK_DETAILS, UPDATE_BANK_DETAILS } from "./actionTypes";
import { getbankdetailsuccess } from "./actions";



  function* getbankdetails(payload) {
    const token = yield select(makeSelectAuthToken());
    console.log("tokeeeeeeeeeennnnnnnnnnnnnnnnn",token)
   try {
    const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
     const response = yield axios.get(
        `/doctor-portal/api/bank-details/`,
        config
     );
     console.log("response", response.data);
     yield put(getbankdetailsuccess(response.data));
   } catch (error) {
     yield sagaErrorHandler(error.response.data);
   }
 }
 
 function* Updatebankdetails(payload) {
    const token = yield select(makeSelectAuthToken());
 

   try {
    const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
        const formData = new FormData();
        formData.append('account_name', payload.payload.accountname);
        formData.append('iban', payload.payload.iban);
        formData.append('phone_number', payload.payload.phone_number);
        formData.append('bank_name', payload.payload.bank_name);
        formData.append('address', payload.payload.address);
        formData.append('city', payload.payload.city);
        formData.append('country', payload.payload.country);
     const response = yield axios.put(
        `/doctor-portal/api/bank-details/`,
        formData,
        config
     );
     toast.success("Your data is updated");
     window.location.reload();
     console.log("response form data" , response.data);
    //  yield put(getbankdetailsuccess(response.data));
   } catch (error) {
     yield sagaErrorHandler(error.response.data);
   }
 }



 function* addbankdetails(payload) {
    const token = yield select(makeSelectAuthToken());
 

   try {
    const config = {
        headers: {
          Authorization: `Token ${token}`,
        },
      };
        const formData = new FormData();
        formData.append('account_name', payload.payload.accountname);
        formData.append('iban', payload.payload.iban);
        formData.append('phone_number', payload.payload.phone_number);
        formData.append('bank_name', payload.payload.bank_name);
        formData.append('address', payload.payload.address);
        formData.append('city', payload.payload.city);
        formData.append('country', payload.payload.country);
     const response = yield axios.post(
        `/doctor-portal/api/bank-details/`,
        formData,
        config
     );
     toast.success("Account Details has been added");
     window.location.reload();
     console.log("response form data" , response.data);
    //  yield put(getbankdetailsuccess(response.data));
   } catch (error) {
     yield sagaErrorHandler(error.response.data);
   }
 }




export function* getbankdetailsfuncbinder() {
    yield takeLatest(GET_BANK_DETAILS, getbankdetails);
  }

  export function* Updatebankdetailsfuncbinder() {
    yield takeLatest(UPDATE_BANK_DETAILS, Updatebankdetails);
  }
  export function* addbankdetailsfuncbinder() {
    yield takeLatest(ADD_BANK_DETAILS, addbankdetails);
  }
  
 export default function* bankSaga() {
    yield all([
      fork(getbankdetailsfuncbinder),
      fork(Updatebankdetailsfuncbinder),
      fork(addbankdetailsfuncbinder),
    ]);
  }