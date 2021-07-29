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
