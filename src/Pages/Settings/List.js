import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { auth, db } from "../../Components/Firebase";
import { onAuthStateChanged, updatePassword } from "firebase/auth";
import { collection, doc } from "firebase/firestore";

export default function List({ email }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPasswordOne = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [showPasswordCurrent, setShowPasswordCurrent] = useState(false);
  const handleClickShowPasswordCurrent = () =>
    setShowPasswordCurrent(!showPasswordCurrent);
  const handleMouseDownPasswordCurrent = () =>
    setShowPasswordCurrent(!showPasswordCurrent);
  const [admin, setAdmin] = useState("");
  const currentDate = new Date();

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
    const savedPhone = localStorage.getItem("phone");
    if (savedPhone) {
      setPhone(savedPhone);
    }
  }, []);

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
    localStorage.setItem("name", value);
  }

  function handlePhoneChange(event) {
    const value = event.target.value;
    setPhone(value);
    localStorage.setItem("phone", value);
  }

  const changePassword = async (e,newPassword) => {
    e.preventDefault();

    try {
      await auth.currentUser.updatePassword(newPassword);
      // Password change successful
      console.log('Password changed successfully');
    } catch (error) {
      console.log("msg"+ error.message);
    }
  };

  return (
    <>
      <Card sx={{ minHeight: 84 + "vh" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Profile
          </Typography>

          <Divider />
          <Box height={30} />

          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <PersonOutlineOutlinedIcon />
              <Stack spacing={1} direction="column">
                <Typography sx={{ fontWeight: "bold" }}> Name :</Typography>
                <TextField
                  variant="standard"
                  value={name}
                  onChange={handleNameChange}
                />

                <Typography>
                  This is not your username or pin.This name just show your name
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Box height={30} />
          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <LocalPhoneOutlinedIcon />
              <Stack spacing={1} direction="column">
                <Typography sx={{ fontWeight: "bold" }}> Phone :</Typography>
                <TextField
                  variant="standard"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[1-9]{1}[0-9]{9}",
                    maxLength: 10,
                  }}
                  // eslint-disable-next-line
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </Stack>
            </Stack>
          </Grid>
          <Box height={30} />
          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <MailOutlineOutlinedIcon />
              <Stack spacing={1} direction="column">
                <Typography sx={{ fontWeight: "bold" }}> Email :</Typography>
                <Typography>
                  {email ? (
                    email
                  ) : (
                    <>
                      Please Login{" "}
                      <Link
                        to="/login"
                        style={{ textDecoration: "none" }}
                        className="link"
                      >
                        Here
                      </Link>
                    </>
                  )}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Box height={30} />
          <Grid item xs={12}>
            <Stack spacing={2} direction="row">
              <VpnKeyOutlinedIcon />
              <Stack spacing={1} direction="column">
                <Typography sx={{ fontWeight: "bold" }}>
                  {" "}
                  Change Password :
                </Typography>
                <form onSubmit={changePassword}>
                  <Stack spacing={3} direction="row">
                    <TextField
                      variant="standard"
                      type={showPasswordCurrent ? "text" : "password"}
                      placeholder="Enter current password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPasswordCurrent}
                              onMouseDown={handleMouseDownPasswordCurrent}
                            >
                              {showPasswordCurrent ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      variant="standard"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPasswordOne}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                    <button type="submit">Save Password</button>
                  </Stack>
                </form>
              </Stack>
            </Stack>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
