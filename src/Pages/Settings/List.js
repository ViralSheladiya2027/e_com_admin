import EditIcon from "@mui/icons-material/Edit";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  InputAdornment,
  Modal,
  Stack,
  TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React ,{useState}from "react";
import EditAbout from "./EditAbout"
import EditName from "./EditName"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function List({ email }) {

  const [nameOpen, setNameOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false)
  const handleOpen = () => setNameOpen(true);
  const handleClose = () => setNameOpen(false);
  const handleEditOpen = () => setAboutOpen(true);
  const handleEditClose = () => setAboutOpen(false);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const editName =()=>{
    // const data={
    //   name:name,
    // }
   setName(name);
   handleEditOpen();
  }

const editAbout =()=>{
  const data={
      about:about,
    }
setAbout(data);
handleEditOpen();
}

  return (
    <>
     <div>
        <Modal
          open={nameOpen}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditName closeEvent={handleClose} fName={name} />
          </Box>
        </Modal>
        <Modal
          open={aboutOpen}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditAbout closeEvent={handleEditClose} fAbout={about} />
          </Box>
        </Modal>
      </div>
      <Card sx={{ minHeight: 84 + "vh" }}>
        <CardContent>
          {/* <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <StyledTabs 
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
         
            >
              <StyledTab   label="Profile" {...a11yProps(0)} />
              <StyledTab  label="Personal Details" {...a11yProps(1)} />
              <StyledTab  label="My Account" {...a11yProps(2)} />
              <StyledTab  label="Change Password" {...a11yProps(3)} />
            </StyledTabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Profile />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Personal />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <MyAccount />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <ChangePassword/>
          </TabPanel>
        </Box> */}
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
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EditIcon onClick={()=>{editName()}} />
                      </InputAdornment>
                    ),
                  }}
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
              <InfoOutlinedIcon />
              <Stack spacing={1} direction="column">
                <Typography sx={{ fontWeight: "bold" }}> About :</Typography>
                <TextField
                  variant="standard"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EditIcon onClick={()=>{editAbout()}}/>
                      </InputAdornment>
                    ),
                  }}
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
                <Typography>{email ? email : "Please Login"}</Typography>
              </Stack>
            </Stack>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
