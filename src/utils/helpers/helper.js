import { toast } from "react-toastify";

export const updateObject = (oldObject, updatedObject) => ({
  ...oldObject,
  ...updatedObject,
});

export const isEmpty = (value) =>
  value === undefined
  || value === null
  || (typeof value === "object" && Object.keys(value).length === 0)
  || (typeof value === "string" && value.trim().length === 0);

export const classNames = (...classes) => classes.filter(Boolean).join(" ");

export const getUser = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const username = JSON.parse(localStorage.getItem("username"));
  const result = {
    token,
    username,
  };
  return result;
};

export const checkAuth = () => {
  const user = JSON.parse(localStorage.getItem("username"));
  const token = JSON.parse(localStorage.getItem("token"));
  if (!user) return false;
  if (!token) return false;
  return true;
};

export const toastSuccess = (message) => toast.success(message, {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
