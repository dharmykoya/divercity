import { combineReducers } from "redux";
import jobs from "../views/jobs/Jobs.reducer";
import authentication from "../views/signup/signup.reducer";

export default combineReducers({
  jobs,
  authentication,
});
