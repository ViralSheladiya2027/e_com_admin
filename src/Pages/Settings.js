import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";
import List from "./Settings/List";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/Firebase";

const Settings = () => {
  const [email, setEmail] = useState("");

  function GetCurrentUser() {
    
    const [user, setUser] = useState(null);
    
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setEmail(user.email);
        } else {
          setUser(null);
          setEmail("");
        }
      });
    }, []);
    return user;
  }
  const user = GetCurrentUser();

  return (
    <>
      <div className="bgcolor">
        <Navbar user={user} email={email} />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexgrow: 1, p: 3, width: "100%" }}>
            <List email={email} />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Settings;
