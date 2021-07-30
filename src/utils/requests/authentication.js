import api from "../constants/api";
import { post$ } from "./default";

export const registerUser = (data) => post$(api.authentication.register, data);
export const userLogin = (data) => post$(api.authentication.login, data);
