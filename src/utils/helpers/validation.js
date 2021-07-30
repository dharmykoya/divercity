const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

const checkNull = (name, value) => {
  if (value.trim() === "") {
    return `Please ${name} is required`;
  }
  return null;
};

export { nameValidation, checkNull };
