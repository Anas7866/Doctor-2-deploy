import produce from "immer";
import {
  REGISTER_USER_SUCCESSFUL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_USER_SUCCESS,
  DROPDOWN_SHOW_SUCCESS,
  SHOW_QUESTIONS_SUCCESS,
  GET_PROFILE_SUCCESS,
  SHOW_DATA_NEW_TICKETS_SUCCESS,
  SHOW_DATA_PENDING_TICKETS_SUCCESS,
  SHOW_DATA_COMPLETED_TICKETS_SUCCESS,
  GET_TICKET_DETAILS,
  GET_TICKET_DETAILS_SUCCESS,
  DECLINE_TICKET_SUCCESS,
} from "./actionTypes";

const initialState = {
  user: null, // localStorage.getItem("pr") ? JSON.parse(localStorage.getItem("pr")) : null,
  role: null,
  token: null,
  questions: [],
  showallquestionbyid: {},
  profilesuccessadmin: null,
  getallnewtickets: null,
  getallpendingtickets: null,
  getallcompletedtickets: null,
  viewallticketsuser: null,
  declineticketsuccess: null,
};

const Auth = produce((state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state.user = action.payload.user;
      // console.log("reducer----->user----->", action.payload);
      state.role = action.payload.role;
      state.token = action.payload.token;
      break;
    case SIGNUP_USER_SUCCESS:
      // localStorage.setItem("pr", JSON.stringify(action.payload));
      state.user = { ...action.payload };
      state.token = action.payload.accesToken;
      console.log("---- signup success ---------");
      console.log(action.payload);
      console.log("---- signup success ---------");
      break;
    case DROPDOWN_SHOW_SUCCESS:
      state.questions = action.payload;
      // console.log("reducer", action.payload);
      break;
    case SHOW_QUESTIONS_SUCCESS:
      state.showallquestionbyid = action.payload;
      // console.log("reducer------>", action.payload);
      break;
    case GET_PROFILE_SUCCESS:
      state.profilesuccessadmin = action.payload;
      // console.log("reducer------>", action.payload);
      break;
      case SHOW_DATA_NEW_TICKETS_SUCCESS:
      state.getallnewtickets = action.payload;
      // console.log("reducer------>", action.payload);
      break;
      case SHOW_DATA_PENDING_TICKETS_SUCCESS:
      state.getallpendingtickets = action.payload;
      console.log("reducer------>()()()()()(", action.payload);
      break;
      case SHOW_DATA_COMPLETED_TICKETS_SUCCESS:
      state.getallcompletedtickets = action.payload;
      // console.log("reducer------>", action.payload);
      break;
      case GET_TICKET_DETAILS_SUCCESS:
      state.viewallticketsuser = action.payload;
      // console.log("reducer------><><><><><><><><><><><<><>", action.payload);
      break;
      case DECLINE_TICKET_SUCCESS:
      state.declineticketsuccess = action.payload;
      // console.log("reducer------>", action.payload);
      break;
    case LOGOUT:
      console.log("logoutttttttt");
      state.user = null;
      state.token = null;
      state.role = null;
      break;
    default:
      break;
  }
}, initialState);

export default Auth;
