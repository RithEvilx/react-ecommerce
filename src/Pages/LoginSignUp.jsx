import React from "react";
import "./CSS/LoginSignUp.css";

const LoginSignUp = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login in here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
