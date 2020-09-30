export const checkName = (name) => {
  const check = name.trim().length >= 4;
  return {
    error: !check,
  };
};

export const checkUsername = (uname) => {
  const check = uname.trim().length >= 6;
  return {
    error: !check,
  };
};

export const checkPassword = (pass) => {
  const check = pass.trim().length >= 8;
  return {
    error: !check,
  };
};

export const checkEmail = (email) => {
  const check = email.trim().length >= 5;

  return {
    error: !check,
  };
};
