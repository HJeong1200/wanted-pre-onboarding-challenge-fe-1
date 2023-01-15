const isValidEmail = (email: string) => {
  if (email.includes("@") && email.includes(".")) return true;
  return false;
};

const isValidPassword = (password: string) => {
  if (password.length >= 8) return true;
  return false;
};

export { isValidEmail, isValidPassword };
