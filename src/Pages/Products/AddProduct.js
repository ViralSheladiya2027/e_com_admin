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
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { db, storage } from "../../Components/Firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useStore } from "../../Store";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProduct = ({ closeEvent }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState(null);
  const setRows = useStore((state) => state.setRows);
  const empCollectionRef = collection(db, "products");

  const createUser = async (e) => {
    e.preventDefault();
    if (image === null) return;
    const storageRef = ref(storage, `images/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDoc(empCollectionRef, {
            image: downloadURL,
            name: name,
            price: Number(price),
            unit: unit,
          });
          console.log("URL::" + downloadURL);
        });
      }
    );

    getUsers();
    closeEvent();
    Swal.fire("submitted", "your file has been submitted", "success");
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
        Add Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <div>
        {image && (
          <center>
            <img
              alt="not fount"
              width="50px"
              src={URL.createObjectURL(image)}
            />
          </center>
        )}
        <input
          hidden
          id="image"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setImage(event.target.files[0]);
          }}
        />
        <label
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          htmlFor="image"
        >
          Image
        </label>
      </div>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
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
            required
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

export default AddProduct;
