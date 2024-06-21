import { Button, Chip, TableCell, TableRow, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { toArgentinaTime } from "../../../utils/formatDate";
import ModalOrderDetails from "./ModalOrderDetails";
import { useState } from "react";

const ItemOrder = ({ order }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="left" component="th" scope="row" sx={{ minWidth: 90 }}>
        {order.user.firstname} {order.user.lastname}
      </TableCell>
      <TableCell align="center" sx={{ p: 1, minWidth: 85 }}>
        {toArgentinaTime(order.date)}
      </TableCell>
      <TableCell align="center" sx={{ p: 1, minWidth: 85 }}>
        <Chip
          label={order.status}
          color={
            order.status === "PENDIENTE"
              ? "warning"
              : order.status === "ENTREGADO"
              ? "success"
              : order.status === "CANCELADO"
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
          $ {order.total}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          size="small"
          onClick={() => {
            setSelectedOrder(order);
            setOpenModal(true);
          }}
          sx={{
            mr: { xs: 0, sm: 1 },
            backgroundColor: "#333333",
          }}
        >
          <MoreHorizIcon sx={{ color: "#ed0000" }} />
        </Button>
      </TableCell>
      {openModal && (
        <ModalOrderDetails
          open={openModal}
          order={selectedOrder}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </TableRow>
  );
};

export default ItemOrder;