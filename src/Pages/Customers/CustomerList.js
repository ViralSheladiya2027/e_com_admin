import * as React from "react";
import { useState, useEffect } from "react";
// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Typography,
  Divider,
  Box,
  // Card,
  // CardContent,
  TablePagination,
  TableCell,
  // Stack,
  TableRow,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  // Modal,
  CircularProgress,
} from "@mui/material";
import { db } from "../../Components/Firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useStore } from "../../Store";
import Swal from "sweetalert2";
// import EditCustomer from "./EditCustomer";
import { useParams } from "react-router-dom";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export default function CustomerList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const setRows = useStore((state) => state.setRows);
  const rows = useStore((state) => state.rows);
  const empCollectionRef = collection(db, "user");
  // const [open, setOpen] = useState(false);
  // const [editOpen, setEditOpen] = useState(false);
  // const [formId, setFormId] = useState("");
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const handleEditOpen = () => setEditOpen(true);
  // const handleEditClose = () => setEditOpen(false);
  // const { userId } = useParams();
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
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
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "user", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  // const editData = (
  //   id,
  //   fullname,
  //   mobilenumber,
  //   address,
  //   email,
  //   cart,
  //   price
  // ) => {
  //   const data = {
  //     id: id,
  //     cart: cart,
  //     fullname: fullname,
  //     email: email,
  //     mobilenumber: mobilenumber,
  //     address: address,
  //     price: price,
  //   };
  //   setFormId(data);
  //   handleEditOpen();
  // };

  return (
    <>
      {/* <div>
        <Modal
          open={editOpen}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <EditCustomer closeEvent={handleEditClose} fId={formId} />
          </Box>
        </Modal>
      </div> */}
      {rows.length > 0 && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ padding: "20px" }}
            >
              Customers
            </Typography>

            <Divider />

            <Box height={10} />
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    No.
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Full Name
                  </TableCell>
                  {/* <TableCell align="left" style={{ minWidth: "100px" }}>
                  Image
                </TableCell> */}
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Mobile Number
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Address
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Email
                  </TableCell>
                  {/* <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Cart
                  </TableCell> */}
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    userid
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(
                    page * rowsPerPage,
                    (page + 1) * rowsPerPage + rowsPerPage
                  )
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        key={row.id}
                        role="checkbox"
                        tabIndex={-1}
                        // {...userId}
                      >
                        <TableCell align="left">
                          {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell align="left">{row.fullname}</TableCell>
                        {/* <TableCell align="left">
                        <img
                          width="40px"
                          height="35px"
                          src={row.image}
                          alt=""
                        />
                      </TableCell> */}
                        <TableCell align="left">{row.mobilenumber}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        {/* <TableCell align="left">{row.cart}</TableCell> */}
                        <TableCell align="left">{row.userid}</TableCell>
                        <TableCell align="left">
                          {row.date && row.date.toDate
                            ? row.date.toDate().toDateString()
                            : "N/A"}
                        </TableCell>
                        <TableCell align="left">
                          {/* <Stack spacing={2} direction="row"> */}
                          {/* <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              onClick={() => {
                                editData(
                                  row.id,
                                  row.fullname,
                                  row.mobilenumber,
                                  row.address,
                                  row.email,
                                  // row.cart,
                                  row.location,
                                  // row.price,
                                );
                              }}
                            /> */}
                          <DeleteIcon
                            style={{
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              deleteUser(row.id);
                            }}
                          />
                          {/* </Stack> */}
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
      {rows.length === 0 && (
        <>
          {/* <Box sx={{ display: 'flex',justifyContent:"center",margin:"50%" }}> */}
          <CircularProgress />
          {/* </Box> */}
        </>
      )}
    </>
  );
}
