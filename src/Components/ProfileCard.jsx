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
          <input placeholder="Name" type="text"/>
          <input placeholder="E-mail" type="mail"/>
          <input placeholder="Contact Number" type="number"/>
          <input placeholder="Withdraw" type="text"/>
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
