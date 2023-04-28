import { Box, IconButton, Typography } from '@mui/material'
import React ,{ useState, useEffect }from 'react'
import CloseIcon from "@mui/icons-material/Close";

const EditAbout = ({fAbout,closeEvent}) => {
const [about, setAbout] = useState("")

useEffect(() => {
setAbout(fAbout.about);
}, [])


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
    </>
  )
}

export default EditAbout
