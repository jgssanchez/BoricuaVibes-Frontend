import {
    Button,
    Chip,
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import { Paper } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
  import { getAllUsers } from "../../../redux/actions/userActions";
  import Loader from "../../Loader/Loader";
  import ModalEditUser from "./ModalEditUser";
  
  function createData(_id, firstname, lastname, email, active, role) {
    return { _id, firstname, lastname, email, active, role };
  }
  
  const Users = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const dispatch = useDispatch();
    const { users, loading } = useSelector((state) => state.user);
  
    useEffect(() => {
      dispatch(getAllUsers());
    }, []);
  
    const rows =
      users &&
      users.map((user) =>
        createData(
          user._id,
          user.firstname,
          user.lastname,
          user.email,
          user.active,
          user.role
        )
      );
  
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <TableContainer component={Paper} sx={{ overflowX: "auto", my: 2 }}>
              <Table aria-label="collapsible table" size="small">
                <TableHead sx={{ backgroundColor: "#" }}>
                  <TableRow>
                    <TableCell sx={{ color: "#0050f0" }}>Usuario</TableCell>
                    <TableCell align="left" sx={{ color: "#0050f0" }}>
                      Email
                    </TableCell>
                    <TableCell align="left" sx={{ color: "#0050f0" }}>
                      Activo
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#0050f0" }}>
                      Rol
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#0050f0" }}>
                      Editar
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, rowIndex) => (
                    <TableRow
                      key={rowIndex}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.firstname} {row.lastname}
                      </TableCell>
                      <TableCell align="left">{row.email}</TableCell>
                      <TableCell align="left">
                        {row.active ? (
                          <Chip label="Si" color="success" />
                        ) : (
                          <Chip label="No" color="error" />
                        )}
                      </TableCell>
                      <TableCell align="center">
                        {row.role == "admin" ? (
                          <Chip label="Admin" color="warning" />
                        ) : (
                          <Chip label="Usuario" color="primary" />
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() => {
                            setSelectedUser(row);
                            setOpenModal(true);
                          }}
                          variant="contained"
                          size="small"
                          sx={{
                            mr: { xs: 0, sm: 1 },
                            backgroundColor: "#ed0000",
                          }}
                        >
                          <ModeEditOutlineOutlinedIcon
                            sx={{ color: "#ffff" }}
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {openModal && (
              <ModalEditUser
                open={openModal}
                user={selectedUser}
                handleClose={() => setOpenModal(false)}
              />
            )}
          </Container>
        )}
      </>
    );
  };
  
  export default Users;