import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";
import OrderList from "./Orders/OrderList";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/Firebase";

const Orders = () => {
  const [email, setEmail] = useState("");

  // let {numRows} = props.data;

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

  function number(numRows) {
    console.log(numRows);
    return numRows;
  }
  const numRows = number();
  console.log(numRows);


  return (
    <>
      <div className="bgcolor">
        <Navbar user={user} email={email} />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideNav numRows={numRows} />
          <Box component="main" sx={{ flexgrow: 1, p: 3, width: "100%" }}>
            <OrderList number={number} />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Orders;
