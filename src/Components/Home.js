import { Box, CardContent, Card, Typography, Stack } from "@mui/material";
import React from "react";
import SideNav from "./SideNav";
import Navbar from "./Navbar";
import Grid from "@mui/material/Grid";
import "../App.css";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Home = () => {
  return (
    <>
      <Navbar />
      <Box height={70} />

      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexgrow: 1, p: 3 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 49 + "%", height: 140 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                      <Stack spacing={2} direction="row">
                        <StorefrontIcon />
                        <div className="paddingall">
                          <span className="pricetitle">$230k</span>
                          <span className="pricesubtitle">Total Income</span>
                        </div>
                      </Stack>
                    </CardContent>
                  </Card>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                    <Stack spacing={2} direction="row">
                      <StorefrontIcon />
                      <div className="paddingall">
                        <span>$230k</span>
                        <span>Total Income</span>
                      </div>
                      </Stack>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + "vh" }}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
