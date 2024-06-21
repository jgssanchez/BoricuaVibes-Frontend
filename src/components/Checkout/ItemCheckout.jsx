
import { Box, Divider, Typography } from "@mui/material";

const ItemCheckout = ({ product }) => {
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 80,
          display: "flex",
          alignItems: "center",
          px: 1,
          ":hover": { backgroundColor: "#f2f2f2" },
        }}
      >
        <Box
          component="img"
          src={product.product.image}
          sx={{ width: 80, height: 80 }}
        />
        <Box sx={{ flexGrow: 1}}>
          <Typography
            sx={{ fontWeight: "bolder !important", color: "white" }}
          >
            {product.product.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "gray", fontWeight: "bolder !important" }}
            >
              Cantidad: {product.quantity}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "gray", fontWeight: "bolder !important" }}
            >
              c/u $ {product.product.price}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            sx={{ color: "#ffc139", fontWeight: "bolder !important", textAlign: 'right' }}
          >
            $ {product.product.price * product.quantity}
          </Typography>
        </Box>
      </Box>
      <Divider
        orientation="horizontal"
        variant="middle"
        sx={{ backgroundColor: "#f2f2f2", width: 300 }}
      />
    </>
  );
};

export default ItemCheckout;
