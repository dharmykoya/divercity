import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAIL,
} from "../../store/actionTypes";
import { updateObject } from "../../utils/helpers/helper";

const initialState = {
  jobs: null,
  loading: false,
  error: null,
};

const fetchJobsStart = (state) =>
  updateObject(state, {
    loading: true,
    error: null,
  });

const fetchJobsSuccess = (state, action) =>
  updateObject(state, {
    loading: false,
    jobs: action.jobs,
    error: null,
  });

const fetchJobsFail = (state, action) =>
  updateObject(state, {
    error: action.error,
    loading: false,
  });

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_START:
      return fetchJobsStart(state, action);
    case FETCH_JOBS_SUCCESS:
      return fetchJobsSuccess(state, action);
    case FETCH_JOBS_FAIL:
      return fetchJobsFail(state, action);
    default:
      return state;
  }
};

export default jobs;
