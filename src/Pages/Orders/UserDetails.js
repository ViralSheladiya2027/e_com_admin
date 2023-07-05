import CloseIcon from "@mui/icons-material/Close";
import { Box, Grid, IconButton, TextField, Typography } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Components/Firebase";
// import { useStore } from "../../Store";

const UserDetails = ({ orderUserId, closeEvent }) => {
  const [rows, setRows] = useState([]);
  // const rows = useStore((state) => state.rows);
  // const setRows = useStore((state) => state.setRows);

  useEffect(() => {
    const getUsers = async () => {
      const empCollectionRef = collection(db, "user");
      const data = await getDocs(empCollectionRef);
      // console.log("User data : "+ data.docs[0].id);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  // console.log("Row Data 0"+orderUserId)
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        User Details
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>

      <Box height={20} />
      
      {rows.map((row) => {
        if (orderUserId === row.userid) {
          // console.log("Row Data "+orderUserId)

          return (
            <div key={row.id}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  color="secondary"
                  value={row.fullname}
                  variant="outlined"
                  size="small"
                  focused
                  sx={{ minWidth: "100%" }}
                />
              </Grid>
              <Box sx={{ m: 3 }} />

              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Mobile-number"
                  color="secondary"
                  value={row.mobilenumber}
                  variant="outlined"
                  size="small"
                  focused
                  sx={{ minWidth: "100%" }}
                />
              </Grid>
              <Box sx={{ m: 3 }} />
              <Grid item xs={6}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  color="secondary"
                  value={row.address}
                  variant="outlined"
                  size="small"
                  focused
                  sx={{ minWidth: "100%" }}
                />
              </Grid>
              <Box sx={{ m: 3 }} />
            </div>
          );
          // }
        }
      })}
    </>
  );
};
export default UserDetails;
