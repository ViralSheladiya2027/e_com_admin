import {
  Box,
  Grid,
  Stack,
  TextField,
  Divider,
  Typography,
  CardContent,
  MenuItem,
  FormGroup,
  Switch,
  FormControlLabel,
  Card,
} from "@mui/material";
import React from "react";

const MyAccount = () => {
  const currencies = [
    {
      value: "Super Admin",
      label: "Super Admin",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  const Location = [
    {
      value: "India",
      label: "India",
    },
    {
      value: "Usa",
      label: "Usa",
    },
    {
      value: "Canada",
      label: "Canada",
    },
    {
      value: "Australia",
      label: "Australia",
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Card sx={{ width: "100%" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              General Setting
            </Typography>
            <Divider />
            <Box height={30} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  label="Username"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  label="Account Email"
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
                  label="User Type"
                  variant="outlined"
                  select
                  sx={{ minWidth: "100%" }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  size="small"
                  fullWidth
                  label="Location"
                  variant="outlined"
                  select
                  sx={{ minWidth: "100%" }}
                >
                  {Location.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      <Box height={30} />
      <Typography gutterBottom variant="h5" component="div">
        Advance Setting
      </Typography>
      <Divider />
      <Typography gutterBottom fontSize={13} variant="body1" component="div">
        Assign responsibility
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Gilad Gray"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Jason Killian"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Antoine Llorca"
        />
      </FormGroup>

      <Typography gutterBottom fontSize={11.5} variant="body1" component="div">
        Be Careful
      </Typography>
    </>
  );
};

export default MyAccount;
