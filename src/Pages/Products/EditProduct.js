import {
  Box,
  IconButton,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { db } from "../../Components/Firebase";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import { useStore } from "../../Store";

const EditProduct = ({ fId, closeEvent }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  // const rows=useStore((state)=>state.rows);
  const setRows = useStore((state) => state.setRows);
  const empCollectionRef = collection(db, "products");

  useEffect(() => {
    setName(fId.image);
    setName(fId.name);
    setPrice(fId.price);
    setUnit(fId.unit);
  }, []);

  const createUser = async () => {
    const userDoc = doc(db, "products", fId.id);
    const newFields = {
      image: image,
      name: name,
      price: Number(price),
      unit: unit,
    };
    await updateDoc(userDoc, newFields);
    getUsers();
    closeEvent();
    Swal.fire("submitted", "your file has been updated", "success");
  };

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const currencies = [
    {
      value: "500 ml",
      label: "500 ml",
    },
    {
      value: "1 liter",
      label: "1 liter",
    },
    {
      value: "5 liter",
      label: "5 liter",
    },
    {
      value: "50 gram",
      label: "50 gram",
    },
    {
      value: "2 kg",
      label: "2 kg",
    },
    {
      value: "5 kg",
      label: "5 kg",
    },
  ];

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Edit Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <div>
        <input
          type="file"
          name="myImage"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        ></input>
      </div>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
            id="outlined-basic"
            label="Unit"
            select
            value={unit}
            onChange={(event) => setUnit(event.target.value)}
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ m: 4 }} />
    </>
  );
};

export default EditProduct;
