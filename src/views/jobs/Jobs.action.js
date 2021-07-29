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

export const fetchAllJobs = () => async (dispatch) => {
  dispatch(fetchJobsStart());

  return allJobs()
    .then(async (response) => {
      dispatch(fetchJobsSuccess(response.jobs));
    })
    .catch(() => {
      dispatch(fetchJobsFailed(""));
    });
};

export const searchJobs = (searchValue) => (dispatch) => {
  dispatch(fetchJobsStart());

  return allJobs()
    .then(async (response) => {
      const oldJobs = response.jobs;
      let newJobs = response.jobs;
      if (searchValue) {
        newJobs = oldJobs.filter(
          (job) =>
            job.title?.toLowerCase().indexOf(searchValue) >= 0
          || job.skills_tag?.toString().toLowerCase().indexOf(searchValue) >= 0
          || job.location?.toLowerCase().indexOf(searchValue) >= 0
          || job.job_type?.toLowerCase().indexOf(searchValue) >= 0,
        );
      }
      dispatch(fetchJobsSuccess(newJobs));
    })
    .catch(() => {
      dispatch(fetchJobsFailed(""));
    });
};
