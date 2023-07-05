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
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  // query,
  // where,
} from "firebase/firestore";
import { useStore } from "../../Store";
import Swal from "sweetalert2";
// import EditCustomer from "./EditCustomer";
import UserDetails from "./UserDetails";
// import { useNavigate } from "react-router-dom";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";

import "firebase/firestore";

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

export default function OrderList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const setRows = useStore((state) => state.setRows);
  const rows = useStore((state) => state.rows);
  const empCollectionRef = collection(db, "orders");
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderDispatch, setOrderDispatch] = useState("Dispatch");
  const [userOrderID, setUserOrderID] = useState("");
  const handleOrderOpen = () => setOrderOpen(true);
  const handleOrderClose = () => setOrderOpen(false);
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(
      data.docs.map((doc) => {
        const data = doc.data();

        const subItems = data.subitems || [];
        return {
          ...data,
          id: doc.id,
          subItems,
        };
      })
    );
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your customer order has been deleted !",
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
    Swal.fire("Deleted!", "Your customer order has been deleted.", "success");
    getUsers();
  };

  const orderStatus = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your customer order has been Dispatch ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Dispatch it !",
    }).then((result) => {
      if (result.value) {
        dispatchApi(id);
      }
    });
  };

  const dispatchApi = async (id) => {
    const orderDoc = doc(db, "orders", id);
    await updateDoc(orderDoc, { status: orderDispatch });
    Swal.fire(
      "Deliverd !",
      "Your customer order has been delivered !",
      "success"
    );
    getUsers();
  };

  const userDetails = () => {
    handleOrderOpen();
  };

  return (
    <>
      <div>
        <Modal
          open={orderOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <UserDetails
              orderUserId={userOrderID}
              closeEvent={handleOrderClose}
            />
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
                    items
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
                    CartTotal
                  </TableCell>
                  {/* <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Userid
                  </TableCell> */}

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
                    Status
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
                        <TableCell align="left">
                          <ol>
                            {row.items?.map((item, i) => (
                              <li key={i}>
                                {item.name}
                                <ul type="disc">
                                  <li>
                                    Unit-{""} {item.unit}
                                  </li>
                                  <li>
                                    Qty-{""} {item.quantity}
                                  </li>
                                </ul>
                              </li>
                            ))}
                          </ol>
                        </TableCell>
                        <TableCell align="left">{row.totalItems}</TableCell>
                        <TableCell align="left">{row.cartTotal}</TableCell>
                        {/* <TableCell align="left">{row.userid}</TableCell> */}

                        <TableCell align="left">
                          {row.date && row.date.toDate
                            ? row.date.toDate().toDateString()
                            : "N/A"}
                        </TableCell>
                        <TableCell align="left">
                          <button
                            onClick={() => {
                              orderStatus(row.id);
                            }}
                            value={orderDispatch}
                            onChange={(e) => setOrderDispatch(e.target.value)}
                            style={{ background: "#ff7043" }}
                          >
                            {row.status}
                          </button>
                        </TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <ContactPageOutlinedIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setUserOrderID(row.userid);
                                userDetails();
                              }}
                              className="cursor-pointer"
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
