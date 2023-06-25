import React, { useState } from "react";
import login from "../Assets/login.svg";
import logo from "../Assets/logo.svg";
import phone from "../Assets/phone.svg";
import { Button, ButtonToolbar } from "rsuite";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { Input } from "rsuite";
import OtpInput from "react-otp-input";

const Auth2 = () => {
  const navHandler = useNavigate();
  const [number, setNumber] = useState(0);

  function handleNavigate() {
    if (number) return navHandler("/otp");
  }

  function handlePhone(e) {
    console.log(e);
    if (/^[0-9]*$/.test(e) && e !== "") {
      if (e >= 1000000000 && e <= 1000000000000) {
        setNumber(e);
        document.getElementById("invalidNum").style.visibility = "hidden";
        document.getElementById("phone").style.borderColor = "green";
      } else {
        setNumber(0);
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("invalidNum").style.visibility = "visible";
      }
    } else {
      setNumber(0);
      if (e === "" || e === undefined) {
        document.getElementById("invalidNum").style.visibility = "hidden";
        document.getElementById("phone").style.borderColor = "#443C68";
      } else {
        document.getElementById("invalidNum").style.visibility = "visible";
        document.getElementById("phone").style.borderColor = "red";
      }
    }
  }

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
        <div className="text">
          <div id="phone-inp">
            <img src={phone} alt="phone" />
            <Input
              className="my-input"
              type="number"
              placeholder="Enter Mobile Number"
              id="phone"
              onChange={(e) => handlePhone(e)}
            />
            <p className="valid" id="invalidNum">
              Enter a valid phone number with 10 digits.
            </p>
          </div>
          <div className="btn">
            <ButtonToolbar>
              <Button appearance="ghost" onClick={handleNavigate}>
                Proceed
              </Button>
            </ButtonToolbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth2;
