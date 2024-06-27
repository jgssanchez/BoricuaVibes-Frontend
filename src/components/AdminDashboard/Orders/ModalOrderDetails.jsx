import { Box, Button, List, Modal, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { useDispatch } from "react-redux";

import { autoCloseAlert, customAlert } from "../../../utils/alerts";
import { editOrder } from "../../../redux/actions/orderActions";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "thin solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
};

const ModalOrderDetails = ({ open, handleClose, order }) => {
  const dispatch = useDispatch();

  const handleCancelOrder = () => {
    customAlert(
      "¿Deseas cancelar este pedido? Esta acción no se puede deshacer",
      () => {
        dispatch(editOrder({ id: order._id, status: "CANCELADO" }))
          .unwrap()
          .then(() => {
            autoCloseAlert("Se ha cancelado el pedido", "warning");
            handleClose();
          });
      }
    );
  };
  const handleOrder = () => {
    customAlert("¿Marcar como entregado?", () => {
      dispatch(editOrder({ id: order._id, status: "ENTREGADO" }))
        .unwrap()
        .then(() => {
          autoCloseAlert("Se ha modificado el estado del pedido", "success");
          handleClose();
        });
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <CloseIcon
          onClick={handleClose}
          sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
        />
        <Typography
          variant="h6"
          textAlign="center"
        >{`Detalles del pedido N° ${order._id.slice(18, 24)}`}</Typography>
        <Typography variant="h6" sx={{ fontWeight: "bolder !important" }}>
          Email cliente:
        </Typography>
        <Typography variant="subtitle2">{order.user.email}</Typography>
        <Typography variant="h6" sx={{ fontWeight: "bolder !important" }}>
          Productos:
        </Typography>
        <List sx={{ overflowY: "auto", maxHeight: 200 }}>
          {order.products.map((product) => (
            <Typography key={product._id} variant="subtitle2">
              {product.product.name} ({product.quantity}) ${" "}
              {product.product.price * product.quantity}
            </Typography>
          ))}
        </List>
        <Typography variant="h6" sx={{ fontWeight: "bolder !important" }}>
          Dirección:
        </Typography>
        <Typography variant="subtitle2">
          Calle/Piso: {order.userAddress.address}
        </Typography>
        <Typography variant="subtitle2">
          Ciudad: {order.userAddress.city}
        </Typography>
        <Typography variant="subtitle1">
          CP: {order.userAddress.zipCode}
        </Typography>

        {order.status === "PENDIENTE" && (
          <Box>
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
              fullWidth
              onClick={handleOrder}
            >
              Marcar como entregado
            </Button>
          
            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2 }}
              fullWidth
              onClick={handleCancelOrder}
            >
              Cancelar pedido
            </Button>
          </Box>
          )}

      </Box>
    </Modal>
  );
};

export default ModalOrderDetails;
