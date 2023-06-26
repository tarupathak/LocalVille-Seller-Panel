import React from "react";
import profileImg from "../assets/profileImg.svg";
import { ButtonToolbar, Button } from "rsuite";
import call from "../assets/call.svg";

const ProfileCard = () => {
  return (
    <>
      <div id="heading">PROFILE</div>
      <div id="profile-card">
        <div id="outline">
          <img src={profileImg} alt="profile-img" />
        </div>
        <div id="text-box">
          <div className="inputBox">
            <input placeholder="Name" type="text" />
          </div>
          <div>
            <input placeholder="E-mail" type="mail" />
          </div>
          <div>
            {" "}
            <input placeholder="Contact Number" type="number" />
          </div>
          <div>
            <input placeholder="Withdraw" type="text" />
          </div>
        </div>
        <div id="btn-bottom">
          <ButtonToolbar>
            <Button>
              <img src={call} alt="call" /> Make a call
            </Button>
          </ButtonToolbar>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
