import React from "react";
import SideNav from "../Components/SideNav";
import Navbar from "../Components/Navbar";
import { Box, CardContent, Card, Typography, Stack } from "@mui/material";
import "../App.css";
import Grid from "@mui/material/Grid";

const Analytics = () => {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <SideNav />
          <Box component="main" sx={{ flexgrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: 90 + "%", height: 130 }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        24,630
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
                    sx={{ minWidth: 90 + "%", height: 130 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        24,630
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
                    sx={{ minWidth: 90 + "%", height: 130 }}
                    className="gradient"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        24,630
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
                    sx={{ minWidth: 90 + "%", height: 130 }}
                    className="gradientlight"
                  >
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd1d1" }}
                      >
                        Visitors
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: "white" }}
                      >
                        24,630
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
             
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent></CardContent>
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
