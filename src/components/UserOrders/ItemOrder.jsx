import { Button, Chip, TableCell, TableRow, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { toArgentinaTime } from "../../utils/formatDate";
import { useState } from "react";
import ModalOrderDetails from "./ModalOrderDetails";

const ItemOrder = ({ userOrder }) => {
  const { loading } = useSelector((state) => state.order);
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell
            align="left"
            component="th"
            scope="row"
            sx={{ minWidth: 90 }}
          >
            N° {userOrder._id.slice(18, 24)}
          </TableCell>
          <TableCell align="center" sx={{ p: 1, minWidth: 85 }}>
            {toArgentinaTime(userOrder.date)}
          </TableCell>
          <TableCell align="center" sx={{ p: 1, minWidth: 85 }}>
           
            <Chip
              label={userOrder.status}
              color={
                userOrder.status === "PENDIENTE"
                  ? "warning"
                  : userOrder.status === "ENTREGADO"
                  ? "success"
                  : userOrder.status === "CANCELADO"
                  ? "error"
                  : "default"
              }
            />
          </TableCell>
          <TableCell align="center" sx={{ p: 1, minWidth: 85 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bolder !important", color: "green" }}
            >
              $ {userOrder.total}
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                setSelectedOrder(userOrder);
                setOpenModal(true);
              }}
              sx={{
                mr: { xs: 0, sm: 1 },
                backgroundColor: "#333333",
              }}
            >
              <MoreHorizIcon sx={{ color: "#ffc139" }} />
            </Button>
          </TableCell>
          {openModal && (
            <ModalOrderDetails
              open={openModal}
              userOrder={selectedOrder}
              handleClose={() => setOpenModal(false)}
            />
          )}
        </TableRow>
      )}
    </>
  );
};

export default ItemOrder;