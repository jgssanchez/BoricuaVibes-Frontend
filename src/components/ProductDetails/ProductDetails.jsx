import { Box, Grid, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../redux/actions/productActions";

import { autoCloseAlert, customAlert } from "../../utils/alerts";
import DefaultButton from "../DefaultButton/DefaultButton";
import Loader from "../Loader/Loader";
import { manageCartProduct } from "../../redux/actions/cartActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product } = useSelector((state) => state.product);
  const { userCart, loading } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  useEffect(() => {
    const isProductInCart = userCart.some(
      (item) => item.product._id === product._id
    );
    setIsInCart(isProductInCart);
  }, [userCart, product]);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      if (isInCart) {
        customAlert("¿Desea remover este producto del carrito?", () => {
          dispatch(manageCartProduct({ id: product._id })).then(() => {
            autoCloseAlert("Se ha removido el producto del carrito", "warning");
          });
        });
      } else {
        dispatch(manageCartProduct({ id: product._id })).then(() => {
          autoCloseAlert("Se agregó el producto al carrito", "success");
        });
      }
    }
  };

  return (
    <Grid container maxWidth="xl" sx={{ my: 2, mx: "auto", height: "100%" }}>
      <Grid
        xs={12}
        sm={6}
        item
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box sx={{ border: "1px solid lightgray", p: 2 }}>
          <Box
            component="img"
            src={product?.image}
            sx={{ width: { xs: 200, sm: 300, md: 400 } }}
          />
        </Box>
      </Grid>
      <Grid xs={12} sm={6} item sx={{ p: 2 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "bolder !important", color: "#333333" }}
        >
          {product?.name}
        </Typography>
        <Typography variant="h3" sx={{ color: "#0050f0", mt: 2 }}>
          $ {product?.price}
        </Typography>
        <Box sx={{ my: 2, display: "flex" }}>
          <Typography sx={{ mr: 1, fontWeight: "bolder !important" }}>
            Categoria:
          </Typography>
          <Typography sx={{ color: "gray" }}>{product?.category}</Typography>
        </Box>
        <Box>
          <Typography sx={{ mr: 1, fontWeight: "bolder !important" }}>
            Descripción:
          </Typography>
          <Typography sx={{ color: "gray" }}>{product?.description}</Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <DefaultButton
            buttonText={isInCart ? "Remover del carrito" : "Agregar al carrito"}
            onclick={handleAddToCart}
            className={isInCart ? "default-button-reverse" : "default-button"}
            styles={{ width: 200, margin: "auto" }}
            icon={
              loading ? (
                <Loader />
              ) : isInCart ? null : (
                <ShoppingCartOutlinedIcon sx={{ fontSize: 16, mr: 1 }} />
              )
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;