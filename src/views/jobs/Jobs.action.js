import { allJobs, applyToJob } from "../../utils/requests/jobs";
import {
  FETCH_JOBS_START,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAIL,
  APPLY_TO_JOB_START,
  APPLY_TO_JOB_SUCCESS,
  APPLY_TO_JOB_FAIL,
} from "../../store/actionTypes";
import { toastSuccess } from "../../utils/helpers/helper";

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

export const jobApplicationStart = () => ({
  type: APPLY_TO_JOB_START,
});

export const jobApplicationSuccess = (data) => ({
  type: APPLY_TO_JOB_SUCCESS,
  data,
});

export const jobApplicationFailed = (error) => ({
  type: APPLY_TO_JOB_FAIL,
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

export const jobApplication = (jobId, details) => async (dispatch) => {
  dispatch(jobApplicationStart());
  return applyToJob(jobId, details)
    .then(async (response) => {
      dispatch(jobApplicationSuccess(response.jobs));
    })
    .catch(() => {
      toastSuccess("Project removed from archive");
      dispatch(jobApplicationFailed("error"));
    });
};
