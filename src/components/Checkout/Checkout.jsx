import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShippingForm from "./ShippingForm";
import { useSelector } from "react-redux";
import PurchaseSummary from "./PurchaseSummary";
const Checkout = () => {
  const { userCart } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  useEffect(() => {
    if (userCart.length == 0) navigate("/");
  }, [userCart]);

  const total = userCart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <Grid container maxWidth="xl" sx={{ mx: "auto" }}>
      <PurchaseSummary userCart={userCart} />
      <ShippingForm total={total} />
    </Grid>
  );
};

export default Checkout;