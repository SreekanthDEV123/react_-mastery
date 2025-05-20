const CheckValidData = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (isEmailValid && isValidPassword) {
    // Return a success message or null
    return true;
  }

  if (!isEmailValid) {
    return "Email not valid";
  }

  if (!isValidPassword) {
    return "Password not valid";
  }
  return true;
};

export default CheckValidData;
