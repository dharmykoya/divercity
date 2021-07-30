import api from "../constants/api";
import { post$ } from "./default";

export const registerUser = (data) => post$(api.authentication.register, data);
export const loginUser = (data) => post$(api.authentication.register, data);
