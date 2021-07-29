import { allJobs } from "../../utils/requests/jobs";
import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAIL,
} from "../../store/actionTypes";

export const fetchJobsStart = () => ({
  type: FETCH_JOBS_START,
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  jobs,
});

export const fetchJobsFailed = (error) => ({
  type: FETCH_JOBS_FAIL,
  error,
});

export const fetchAllJobs = (queryString = null) => async (dispatch) => {
  dispatch(fetchJobsStart());

  return allJobs(queryString)
    .then(async (response) => {
      dispatch(fetchJobsSuccess(response.jobs));
    })
    .catch(() => {
      dispatch(fetchJobsFailed(""));
    });
};
