import CloseIcon from "@mui/icons-material/Close";
// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
    Box,
    // Button,
    Grid,
    IconButton,
    // InputAdornment,
    // TableRow,
    TextField,
    Typography
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
// import Swal from "sweetalert2";
import { db } from "../../Components/Firebase";
// import { useStore } from "../../Store";

const UserDetails = ({ closeEvent,userid }) => {
  const [rows, setRows] = useState([]);
  // const rows = useStore((state) => state.rows);
  // const setRows = useStore((state) => state.setRows);
  const empCollectionRef = collection(db, "user");
  // const [orders, setOrders] = useState([]);
  // const [users, setUsers] = useState([]);
  // const orderCollectionRef = collection(db, "orders");
  // useEffect(() => {
  //   setFullName(fId.fullname);
  //   setPrice(fId.price);
  //   setCart(fId.cart);
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(empCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
   
      // setUsers(users);
     };

    getUsers();

    // const getOrder = async () => {
    //   const data = await getDocs(orderCollectionRef);
    //   setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //   setOrders(orders);
    // };

    // getOrder();
   // eslint-disable-next-line
  },[] );


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
          
          // const user = users.find(user => user.userid === order.userid);
      // if(users.userid === orders.userid){
        // console.log(user.userid)
        
      return(
            <div key={row.id} >
        <Grid item xs={6}>
        <TextField
          id="outlined-basic"
          label="Name"
          color="secondary"
          value={row.fullname}
          // onChange={(event) => setRows(event.target.value)}
          variant="outlined"
          size="small"
          focused 
          sx={{ minWidth: "100%" }}
        />
      </Grid>
      <Box sx={{ m: 3 }} />
      </div>
          )
      // }
      })
      }
    
    </>
  );
};
export default UserDetails;


