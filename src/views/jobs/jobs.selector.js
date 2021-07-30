export const allJobs = () => ({ jobs: { jobs } }) => jobs;

export const getJob = (jobId) => ({ jobs: { jobs } }) => jobs.find((job) => job.id === jobId);

export const isLoading = () => ({ jobs: { loading } }) => loading;

export const jobApplicationSuccessful = () =>
  ({ jobs: { jobApplicationSuccess } }) =>
    jobApplicationSuccess;
