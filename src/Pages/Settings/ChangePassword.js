import React from "react";
import {
  Box,
  Grid,
  TextField,
  Divider,
  Typography,
  CardContent,
  Card,
} from "@mui/material";

const ChangePassword = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Change Password
            </Typography>
            <Divider />
            <Box height={30} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  label="Current Password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box height={30} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  label="New Password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ChangePassword;
