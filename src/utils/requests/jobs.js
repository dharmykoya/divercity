import api from "../constants/api";
import { getUser } from "../helpers/helper";
import { get$, post$ } from "./default";

const { token } = getUser();

const header = {
  Authorization: token,
};

export const allJobs = () => get$(api.jobs.all);

export const applyToJob = (jobId, data) =>
  post$(api.jobs.applyToJob.replace(":jobId", jobId), data, header);
