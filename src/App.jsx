import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth1 from "./Authentication Pages/Auth1";
import Auth2 from "./Authentication Pages/Auth2";
import Auth3 from "./Authentication Pages/Auth3";
import Profile from "./Page/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth1 />} />
        <Route path="/Login" element={<Auth2 />} />
        <Route path="/OTP" element={<Auth3 />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
