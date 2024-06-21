import { Box, Drawer, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ProductItem from "./ProductItem";
import DefaultButton from "../DefaultButton/DefaultButton";

const CartDrawer = ({ openCart, closeCart }) => {
  const navigate = useNavigate();
  const { userCart } = useSelector((state) => state.cart);

  return (
    <>
      <Drawer
        open={openCart}
        onClose={closeCart}
        anchor="right"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ width: 250, flexGrow: 1 }} role="presentation">
          {userCart?.length == 0 ? (
            <Typography
              variant="h6"
              sx={{ textAlign: "center", fontStyle: "italic", mt: 2 }}
            >
              No hay productos en el carrito
            </Typography>
          ) : (
            userCart?.map((product, productIndex) => (
              <ProductItem
                key={productIndex}
                product={product}
                closeCart={closeCart}
              />
            ))
          )}
        </Box>
        {userCart.length > 0 && (
          <>
            <Box>
              <Typography
                variant="h6"
                sx={{ textAlign: "right", fontStyle: "italic", mt: 1, mr: 2 }}
              >
                Total: ${" "}
                {userCart?.reduce(
                  (acc, product) =>
                    acc + product.product.price * product.quantity,
                  0
                )}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <DefaultButton
                buttonText="Confirmar compra"
                onclick={() => {
                  closeCart();
                  navigate("/checkout");
                }}
                icon={<ShoppingCartCheckoutIcon sx={{ mr: 1, fontSize: 18 }} />}
                styles={{ margin: "8px 0" }}
              />
              <DefaultButton
                buttonText="Seguir comprando"
                onclick={closeCart}
                className="default-button-reverse"
                styles={{ marginBottom: "8px" }}
                icon={<VisibilityIcon sx={{ mr: 1, fontSize: 18 }} />}
              />
            </Box>
          </>
        )}
      </Drawer>
    </>
  );
};

export default CartDrawer;