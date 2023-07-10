import { GET_BANK_DETAILS_SUCCESS } from "./actionTypes";
import produce from "immer";


const initialState = {
    allbankdetails: null,
  };
  
  const Bankdetails = produce((state, action) => {
    switch (action.type) {
      case GET_BANK_DETAILS_SUCCESS:
        state.allbankdetails = action.payload;
        // console.log("reducer----->user----->", action.payload);
        break;
      default:
        break;
    }
  }, initialState);
  
  export default Bankdetails;