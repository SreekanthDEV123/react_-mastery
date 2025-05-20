import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInPage.scss";
import CheckValidData from "../../utils/CheckValidData";
import NetFlixlogo from "../../Components/NetFlixLogo/NetFlixlogo";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const validateForm = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const message = CheckValidData(emailValue, passwordValue);

    if (message) {
      navigate("/app");
    } else {
      setErrorMessage(message);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validateForm();
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div class="row">
      <NetFlixlogo />
      <div class="row ">
        <div class="position-absolute my-5">
          <div>
            <form onSubmit={submitHandler} className="form-container">
              <h1>{isSignIn ? "Sign In" : "Login"}</h1>
              {isSignIn && (
                <div className="input-container">
                  <label>Phone:</label>
                  <input
                    type="text"
                    placeholder="Enter phone..."
                    className="form-control form-control-lg"
                  />
                </div>
              )}
              <div className="input-container">
                <label>Email:</label>
                <input
                  type="email"
                  ref={email}
                  placeholder="Enter email..."
                  className="form-control form-control-lg"
                />
              </div>
              <div className="input-container">
                <label>Password:</label>
                <input
                  type="password"
                  ref={password}
                  placeholder="Enter password..."
                  className="form-control form-control-lg"
                />
              </div>
              <br />
              <div className="mt-20">
                <button
                  type="submit"
                  className={`btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 ${
                    isSignIn ? "greenData" : "redData"
                  }`}
                >
                  {isSignIn ? "Sign Up" : "Login"}
                </button>
              </div>
              <h3>{errorMessage}</h3>
              <div>
                <p onClick={toggleSignIn} className="toggle-link">
                  {isSignIn
                    ? "Already have an account? Login"
                    : "New to the site? Sign Up"}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
