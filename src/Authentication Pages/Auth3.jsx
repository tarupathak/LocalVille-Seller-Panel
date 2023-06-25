import React, { useState } from "react";
import OtpInput from "react-otp-input";
import login from "../Assets/login.svg";
import logo from "../Assets/logo.svg";
import { Button, ButtonToolbar } from "rsuite";
import "./Auth.css";

const Auth3 = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="auth">
      <div className="login-img">
        <img src={login} alt="login Image" />
      </div>
      <div className="content">
        <div className="logo-img">
          <img src={logo} alt="logo" />
        </div>
        <p className="purple-col">Almost there</p>
        <p className="grey-text">Please check your message box for OTP</p>
        <div className="text">
          <div id="otp-box">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={
                <span>
                  <pre>   </pre>
                </span>
              }
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "2rem",
                borderRadius: "4px",
                border: ".2vw solid #6D44BC",
              }}
            />
          </div>
          <p>
            <span className="grey-text">Didn’t received OTP </span>
            <span className="purple-text"> Send Again ?</span>
          </p>
          <div className="btn">
            <ButtonToolbar>
              <Button appearance="ghost">Proceed</Button>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth3;
