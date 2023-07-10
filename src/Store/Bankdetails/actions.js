import { ADD_BANK_DETAILS, GET_BANK_DETAILS, GET_BANK_DETAILS_SUCCESS, UPDATE_BANK_DETAILS } from "./actionTypes";

export const getbankdetails = (data) => {
    return {
      type: GET_BANK_DETAILS,
      payload: data,
    };
  };

  export const getbankdetailsuccess = (data) => {
    return {
      type: GET_BANK_DETAILS_SUCCESS,
      payload: data,
    };
  };

  export const updatebakdetails = (data) => {
    console.log("dayaaaaaaaaaa",data)
    return {
      type: UPDATE_BANK_DETAILS,
      payload: data,
    };
  };

  export const addbakdetails = (data) => {
    console.log("dayaaaaaaaaaa",data)
    return {
      type: ADD_BANK_DETAILS,
      payload: data,
    };
  };