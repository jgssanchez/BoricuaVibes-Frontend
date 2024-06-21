import { Box, Divider, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  manageCartProduct,
  updateProductInCart,
} from "../../redux/actions/cartActions";
import { autoCloseAlert, customAlert } from "../../utils/alerts";
import Loader from "../Loader/Loader";

const ProductItem = ({ product, closeCart }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.cart);

  const handleRemoveProduct = () => {
    customAlert("¿Deseas remover este producto del carrito?", () => {
      dispatch(manageCartProduct({ id: product.product._id }));
    });
  };

  const handleIncreaseProduct = () => {
    if (product.quantity >= 20)
      return autoCloseAlert("No puedes tener mas de 20 unidades", "error");

    dispatch(
      updateProductInCart({ id: product.product._id, action: "increment" })
    );
  };

  const handleDecreaseProduct = () => {
    if (product.quantity <= 1)
      return autoCloseAlert("No puedes tener 0 unidades", "error");
    dispatch(
      updateProductInCart({ id: product.product._id, action: "decrement" })
    );
  };

  return (
    <>
      {loading && <Loader />}
      <Box
        sx={{
          width: 250,
          height: 110,
          display: "flex",
          alignItems: "center",
          px: 0.5,
          ":hover": { backgroundColor: "#f2f2f2" },
        }}
      >
        <Box
          component="img"
          src={product.product.image}
          sx={{ width: 80, height: 80 }}
        />
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/product/${product.product._id}`}
            onClick={closeCart}
          >
            <Typography
              sx={{ fontWeight: "bolder !important", color: "#333333" }}
            >
              {product.product.name}
            </Typography>
          </Link>
          <ClearIcon
            onClick={handleRemoveProduct}
            sx={{
              position: "absolute",
              top: -12,
              right: 8,
              fontSize: 16,
              color: "red",
              cursor: "pointer",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#0050f0", fontWeight: "bolder !important" }}
            >
              $ {product.product.price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mr: 1 }}>
              <RemoveCircleIcon
                onClick={handleDecreaseProduct}
                sx={{ fontSize: 20, color: "#ed0000", cursor: "pointer" }}
              />
              <Typography
                variant="h7"
                sx={{ mx: 1, fontWeight: "bolder !important" }}
              >
                x {product.quantity}
              </Typography>
              <AddCircleIcon
                onClick={handleIncreaseProduct}
                sx={{ fontSize: 20, color: "#0050f0", cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mr: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: "gray" }}>
              Subtotal:
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#333333", fontWeight: "bolder !important" }}
            >
              $ {product.product.price * product.quantity}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ backgroundColor: "#f2f2f2" }}
      />
    </>
  );
};

export default ProductItem;