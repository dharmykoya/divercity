import api from "../constants/api";
import { get$ } from "./default";

export const allJobs = () => get$(api.jobs.all);

export const singleJob = () => get$(api.jobs.all);
