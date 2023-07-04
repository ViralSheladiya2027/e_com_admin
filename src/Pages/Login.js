import {
  Box,
  Typography,
  TextField,
  // CircularProgress,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import logo from "../Logo/Logo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Components/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPasswordOne = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);

    const currentDate = new Date();
    // try {
    //   await createUserWithEmailAndPassword(auth , email, password);
    //   toast.success("Login succesfully!", {
    //     position: "top-center",
    //     theme: "colored",
    //   });
    // }
    // catch (err) {
    //   toast.error(err.message, {
    //     position: "top-center",
    //     theme: "colored",
    //   });
    // }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login succesfully!", {
        position: "top-center",
        theme: "colored",
      });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      toast.error(err.message, {
        position: "top-center",
        theme: "colored",
      });
    }

    onAuthStateChanged(auth, (admin) => {
      if (admin) {
        const userCollectionRef = collection(db, "admin");
        const userDocRef = doc(userCollectionRef, admin.uid);

        return setDoc(userDocRef, {
          email: email,
          password: password,
          adminid: admin.uid,
          date: currentDate,
        });
      } else {
        setAdmin(null);
      }
    });

    return admin;
  };

  return (
    <>
      <Container maxWidth="xs">
        <Box
          component="form"
          sx={{
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "2",
            textAlign: "center",
            mt: "70px",
            p: "24px",
          }}
        >
          <img src={logo} height="50px" alt="" />
          <br />
          <Typography color="textSecondary" variant="h5">
            Admin
          </Typography>
          <TextField
            label="Email"
            size="small"
            fullWidth
            margin="normal"
            padding="normal"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            size="small"
            fullWidth
            margin="normal"
            padding="normal"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordOne}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br></br>
          {/* <br></br> */}
          {/* <CircularProgress size={30} paddingtop="10px"/> */}
          <br />
          <br />
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleLogin}
            style={{ background: "#263238" }}
          >
            login
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Login;
