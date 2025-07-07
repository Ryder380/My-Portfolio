import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../Context/UserContext";


function index() {
  // const [UserData, setUserData] = useState();
  // const [showLoading, setShowLoading] = useState(true);

 
  // const username = "Ryder380";

  // useEffect(() => {
  //   axios
  //     .get(`https://api.github.com/users/${username}`, {
        
  //     })
  //     .then((response) => {
  //       // console.log(response.data);
  //       setUserData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (UserData) {
  //       setShowLoading(false);
  //     }
  //   }, 1900);

  //   return () => clearTimeout(timer);
  // }, [UserData]);

  // if (showLoading) {
  //   return (
  //     <div className="loading bg-black">
  //       <div>
  //         <img className="loader" src="Images/loader.gif" alt="" />
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <UserContext.Provider>
    <div>
      
      <Navbar />

      <Outlet />

      {/* <Footer /> */}
      
    </div>
     </UserContext.Provider>
  );
}

export default index;
