import * as React from 'react';
import { useState,useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Divider, Typography } from '@mui/material';
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../Components/Firebase"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";



export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
const [rows, setRows] = useState([])
const empCollectionRef = collection(db , "products");

useEffect(() => {
  getUsers();
}, []);

const getUsers = async () => {
  const data = await getDocs(empCollectionRef);
  setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Products List
          </Typography>
          <Divider />
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
             
                <TableCell
             
                  align="left"
                  style={{ minWidth: "100px" }}
                >
                  Name
                 
                </TableCell>
                <TableCell
             
             align="left"
             style={{ minWidth: "100px" }}
           >
        Price
            
           </TableCell>
           {/* <TableCell
             
             align="left"
             style={{ minWidth: "100px" }}
           >
             Image
            
           </TableCell> */}
           <TableCell
             
             align="left"
             style={{ minWidth: "100px" }}
           >
             Discount
            
           </TableCell>
           <TableCell
             
             align="left"
             style={{ minWidth: "100px" }}
           >
             unit
            
           </TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    
                        <TableCell key={row.id} align="left">
                         {row.name}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                         {row.mrp}
                        </TableCell>
                        {/* <TableCell key={row.id} align="left">
                         {row.image}
                        </TableCell> */}
                        <TableCell key={row.id} align="left">
                         {row.discount_price}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                         {row.unit}
                        </TableCell>
                     
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}