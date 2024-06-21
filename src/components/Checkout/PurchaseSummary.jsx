import { Box, Divider, Grid, Typography } from "@mui/material";
import ItemCheckout from "./ItemCheckout";

const PurchaseSummary = ({ userCart }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      sx={{
        backgroundColor: "#333333",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bolder !important",
          color: "#ffc139",
        }}
      >
        Resumen de compra
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        {userCart?.map((product, productIndex) => (
          <ItemCheckout key={productIndex} product={product} />
        ))}
      </Box>
      <Box sx={{ width: 300, mr: 2 }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "right", color: "darkgray", mt: 2 }}
        >
          Subtotal: ${" "}
          {userCart.reduce(
            (acc, product) => acc + product.product.price * product.quantity,
            0
          )}
        </Typography>
        <Divider variant="inset" sx={{ backgroundColor: "darkgray", my: 1 }} />

        <Typography variant="h6" sx={{ color: "darkgray", textAlign: "right" }}>
          Coste de envío : GRATIS
        </Typography>
        <Divider variant="inset" sx={{ backgroundColor: "darkgray", my: 1 }} />
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bolder !important",
            color: "white",
            textAlign: "right",
          }}
        >
          Total: $
          {userCart.reduce(
            (acc, product) => acc + product.product.price * product.quantity,
            0
          )}
        </Typography>
      </Box>
    </Grid>
  );
};

export default PurchaseSummary;