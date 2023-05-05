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

const EditAbout = ({ fAbout, closeEvent }) => {
  const [about, setAbout] = useState("");

  useEffect(() => {
    setAbout(fAbout.about);
    // eslint-disable-next-line
  }, []);

  const updateAbout = async (e) => {
    e.preventDefault();
    console.log(about);
    closeEvent();
    // Swal.fire("submitted", "your about information has been updated", "success");
  };

  return (
    <>
      <Typography variant="h5" align="center">
        Add About
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
        value={about || ""}
        onChange={(e) => setAbout(e.target.value)}
      ></TextField>
      <Box height={20} />
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          <Button variant="contained" onClick={updateAbout}>
            Save
          </Button>
        </Typography>
      </Grid>
    </>
  );
};

export default EditAbout;
