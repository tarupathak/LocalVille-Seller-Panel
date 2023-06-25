import React from "react";
import login from "../Assets/login.svg";
import logo from "../Assets/logo.svg";
import "./Auth.css";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import LogIn from "../Components/LogIn";

const clientId =
  "72665690660-0soqr69b0hkqih5vajsmh54cuc5266ve.apps.googleusercontent.com";

const Auth1 = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="auth">
      <div className="login-img">
        <img src={login} alt="login Image" />
      </div>
      <div className="content">
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>
        <p className="purple-col">Hello,</p>
        <p className="black-col">Welcome to localville your business partner</p>
        <div className="google-btn">
          <LogIn />
        </div>
      </div>
    </div>
  );
};

export default Auth1;
