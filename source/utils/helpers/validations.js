const emailValidation = {
  valid: value => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
};

const oneUpperCaseOneNumber = {
  valid: value => /^(?=.*[A-Z])(?=.*\d).+$/.test(value)
};

const min8Char = {
  valid: value => value.length >= 8
};

export default {
  createPassword: { oneUpperCaseOneNumber, min8Char },
  email: { emailValidation },
  fullname: { min8Char },
  password: { min8Char },
  username: { min8Char }
};
