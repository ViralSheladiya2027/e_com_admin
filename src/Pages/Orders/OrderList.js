import * as React from "react";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Typography,
  Divider,
  Box,
  // Card,
  // CardContent,
  TablePagination,
  TableCell,
  Stack,
  TableRow,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Modal,
  CircularProgress,
} from "@mui/material";
import { db } from "../../Components/Firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useStore } from "../../Store";
import Swal from "sweetalert2";
// import EditCustomer from "./EditCustomer";
import UserDetails from "./UserDetails";
import { useNavigate } from "react-router-dom";

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

export default function OrderList(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const setRows = useStore((state) => state.setRows);
  const rows = useStore((state) => state.rows);
  const empCollectionRef = collection(db, "orders");
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  // const [formId, setFormId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOrderOpen = () => setOrderOpen(true);
  const handleOrderClose = () => setOrderOpen(false);
  const navigate = useNavigate();

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
    const userDoc = doc(db, "orders", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const numRows = rows.length;
  props.number(numRows);
  // console.log(numRows);

const userDetails=(userid)=>{
  // const order =rows.find(order => order.userid === userid)
  handleOrderOpen(userid);
  // console.log(order)
}
  return (
    <>
      <div>
        <Modal
          open={orderOpen}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <UserDetails closeEvent={handleOrderClose} />
          </Box>
        </Modal>
      </div>
      {rows.length > 0 && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ padding: "20px" }}
            >
              Orders
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
                    Name
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Unit
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Totalitems
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    CartTotal
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Userid
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
                      >
                        <TableCell align="left">
                          {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell align="left">{row.name}</TableCell>
                        <TableCell align="left">{row.unit}</TableCell>
                        <TableCell align="left">{row.totalItems}</TableCell>
                        <TableCell align="left">{row.price}</TableCell>
                        <TableCell align="left">{row.cartTotal}</TableCell>
                        <TableCell
                          align="left"
                        //  onClick={()=> navigate("/Customers")}
                        >
                          {row.userid}
                        </TableCell>
                        <TableCell align="left">{row.createdAt}</TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                          <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              
                              onClick={() => { userDetails(row.userid)}}
                              className="cursor-pointer"
                              // onClick={() => {
                              //   editData(
                              //     row.id,
                              //     row.fullname,
                              //     row.mobilenumber,
                              //     row.address,
                              //     row.email,
                              //     row.cart,
                              //     row.location,
                              //     row.price,
                              //   );
                              // }}
                            />
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
                          </Stack>
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
