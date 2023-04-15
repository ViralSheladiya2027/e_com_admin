import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import {
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography
} from "@mui/material";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { db } from "../../Components/Firebase";
import { useStore } from "../../Store";

const EditOrder = ({ fId, closeEvent }) => {
  const [fullname, setFullName] = useState("");

  const [price, setPrice] = useState("");
  const [cart, setCart] = useState("");
  const setRows = useStore((state) => state.setRows);
  const empCollectionRef = collection(db, "user");

  useEffect(() => {
    setFullName(fId.fullname);
    setPrice(fId.price);
    setCart(fId.cart);
    // eslint-disable-next-line
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "user", fId.id);

    const newFields = {
      fullname: fullname,
      price: Number(price),
      cart: cart,
    };
    updateDoc(userDoc, newFields);

    getUsers();
    closeEvent();
    Swal.fire("submitted", "your file has been updated", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Customer
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>

      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-basic"
            label="FullName"
            value={fullname}
            onChange={(event) => setFullName(event.target.value)}
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Price"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupeeIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-basic"
            label="Cart"
            value={cart}
            onChange={(event) => setCart(event.target.value)}
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={updateUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
};
export default EditOrder;
