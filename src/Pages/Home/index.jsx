import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";


function index() {
  const user = useContext(UserContext);

  return (
    
    <>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example"
        tabIndex="0"
      >
        <div id="scrollspyHeading1">

         <Profile user={user} />
        </div>
        <div id="scrollspyHeading2">

         <About  />
        </div>
       
      </div>
     
    </>
  );
}

export default index;
