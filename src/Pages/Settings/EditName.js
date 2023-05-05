import {
  Box,
  IconButton,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
// import Swal from "sweetalert2";

const EditAbout = ({ fName, closeEvent }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    setName(fName.name);
    // eslint-disable-next-line
  }, []);

  const updateName = async (e) => {
    e.preventDefault();
    console.log(name);
    closeEvent();
    // Swal.fire("submitted", "your about information has been updated", "success");
  };

  return (
    <>
      <Typography variant="h5" align="center">
        Enter Your Name
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <TextField
        variant="standard"
        fullWidth
        value={name || ""}
        // onChange={(e) =>
        //   setName((prevState) => ({
        //     ...prevState,
        //     [e.target.name]: [e.target.value],
        //   }))
        // }
        onChange={(e)=>setName(e.target.value)}
      ></TextField>
      <Box height={20} />
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          <Button variant="contained" onClick={updateName}>
            Save
          </Button>
        </Typography>
      </Grid>
    </>
  );
};

export default EditAbout;
