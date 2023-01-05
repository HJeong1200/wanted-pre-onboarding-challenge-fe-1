const emailValidation = (email: string) => {
  if (email.includes("@") && email.includes(".")) return true;
  return false;
};

const passwordValidation = (password: string) => {
  if (password.length >= 8) return true;
  return false;
};

export { emailValidation, passwordValidation };
