import {
  Box,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DefaultButton from "../DefaultButton/DefaultButton";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { manageCartProduct } from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";
import { autoCloseAlert, customAlert } from "../../utils/alerts";
import Loader from "../Loader/Loader";


const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { userCart, loading } = useSelector((state) => state.cart);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (product && product._id) {
      const isProductInCart = userCart.some(
        (item) => item.product?._id === product._id
      );
      setIsInCart(isProductInCart);
    }
  }, [userCart, product]);

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      navigate("/login");
    } else {
      if (isInCart) {
        customAlert("¿Deseas remover este producto del carrito?", () => {
          dispatch(manageCartProduct({ id: product._id })).then(() => {
            autoCloseAlert("Se ha removido el producto del carrito", "warning");
          });
        });
      } else {
        dispatch(manageCartProduct({ id: product._id })).then(() => {
          autoCloseAlert("Se ha agregó el producto al carrito", "success");
        });
      }
    }
  };

  return (
    <Box
      sx={{
        width: 300,
        border: "thin solid gray",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        p: 1,
        ":hover" : {transition:"all 0.3s ease-in-out" , boxShadow:10}
      }}
    >
      <Link to={`/product/${product._id}`} style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center' }}>
        <Box
          component="img"
          src={product.image}
          sx={{ width: 200 , height: 150 , ":hover" : {transform: "scale(1.1)", opacity:0.5, transition:"all 0.3s ease-in-out" }}}
        />
      </Link>
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: "500 !important", color: "#333333" }}
        >
          {product.name}
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold !important", color: "#0050f0", my: 1 }}
        >
          $ {product.price}
        </Typography>
        <Typography variant="body1" sx={{ color: "gray" }}>
          {product.description}
        </Typography>
      </Box>
      <DefaultButton
        buttonText={isInCart ? "Remover del carrito" : "Agregar al carrito"}
        onclick={handleAddToCart}
        className={isInCart ? "default-button-reverse" : "default-button"}
        styles={{ width: 200, alignSelf: "center" }}
        icon={
          isAuthenticated && loading ? (
            <Loader />
          ) : isInCart ? null : (
            <ShoppingCartOutlinedIcon sx={{ fontSize: 16, mr: 1 }} />
          )
        }
      />
    </Box>
  );
};

export default ProductCard;
