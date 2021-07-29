import api from "../constants/api";
import { get$, post$, delete$ } from "./index";

export const allProjects = (queryString = "") => {
  return get$(api.jobs.all);
};
