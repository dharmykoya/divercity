import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAIL,
  APPLY_TO_JOB_START,
  APPLY_TO_JOB_SUCCESS,
  APPLY_TO_JOB_FAIL,
} from "../../store/actionTypes";
import { updateObject } from "../../utils/helpers/helper";

const initialState = {
  jobs: null,
  loading: false,
  error: null,
  jobApplicationSuccess: false,
  jobApplicationMessage: null,
};

const fetchJobsStart = (state) =>
  updateObject(state, {
    loading: true,
    error: null,
    jobApplicationSuccess: false,
    jobApplicationMessage: null,
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

const jobApplicationStart = (state) =>
  updateObject(state, {
    error: null,
    loading: true,
    jobApplicationSuccess: false,
    jobApplicationMessage: null,
  });

const jobApplicationSuccess = (state, action) =>
  updateObject(state, {
    error: null,
    loading: false,
    jobApplicationSuccess: true,
    jobApplicationMessage: action.data,
  });

const jobApplicationFailed = (state, action) =>
  updateObject(state, {
    error: action.error,
    loading: false,
    jobApplicationSuccess: false,
    jobApplicationMessage: null,
  });

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_START:
      return fetchJobsStart(state, action);
    case FETCH_JOBS_SUCCESS:
      return fetchJobsSuccess(state, action);
    case FETCH_JOBS_FAIL:
      return fetchJobsFail(state, action);
    case APPLY_TO_JOB_START:
      return jobApplicationStart(state, action);
    case APPLY_TO_JOB_SUCCESS:
      return jobApplicationSuccess(state, action);
    case APPLY_TO_JOB_FAIL:
      return jobApplicationFailed(state, action);

    default:
      return state;
  }
};

export default jobs;
