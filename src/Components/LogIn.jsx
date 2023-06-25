import React from "react";
import { GoogleLogin } from "react-google-login";
import './Components.css'

const clientId =
  "72665690660-0soqr69b0hkqih5vajsmh54cuc5266ve.apps.googleusercontent.com";

const LogIn = () => {
  const onSuccess = (res) => {
    alert("Login Success!");
  };

  const onFailure = (res) => {
    alert("Login Failed! ");
  };
  return (
    <div id="login-btn">
      <GoogleLogin
        clientId={clientId}
        buttonText="Log in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default LogIn;
