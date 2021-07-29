import api from "../constants/api";
import { get$ } from "./index";

export const allJobs = () => get$(api.jobs.all);

export const singleJob = () => get$(api.jobs.all);
