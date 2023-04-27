import React, { useEffect, useState } from "react";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";
import { Box, CardContent, Card, Typography, Stack } from "@mui/material";
import "../App.css";
import Grid from "@mui/material/Grid";
import GeoChart from "../Charts/GeoChart";
import PieChart from "../Charts/PieChart";
import HBarChart from "../Charts/HBarChart";
import CountUp from 'react-countup';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Components/Firebase";

const Analytics = () => {

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
          setEmail('');
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
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ height: 19 + "vh", width: "50%" }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Customers
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        <CountUp duration={0.4} end={4580} delay={0.3}/>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ height: 19 + "vh", marginTop: "16px", width: "50%" }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd1d1", padding: "7px,0px" }}
                      >
                        Orders
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                       <CountUp duration={0.3} end={5945} delay={0.2}/>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Box height={20} />
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ height: 19 + "vh", width: "50%" }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Products
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                         <CountUp duration={0.2} end={1357} delay={0.3}/>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ height: 19 + "vh", marginTop: "16px", width: "50%" }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd1d1", padding: "7px,0px" }}
                      >
                       Cancle Orders
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        <CountUp duration={0.5} end={4564} delay={0.2}/>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>

              <Grid item xs={7}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <HBarChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={16} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Analytics;
