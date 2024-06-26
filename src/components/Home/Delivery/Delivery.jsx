import { Box, Container, Typography } from "@mui/material";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

const Delivery = () => {
  return (
    <Container id="delivery-section" maxWidth="md" sx={{ my: 10 }}>
      <Typography
        variant="h2"
        sx={{
          color: "#333333",
          textAlign: "center",
          fontWeight: "bolder !important",
        }}
      >
        Desde <span style={{color:"#ed0000"}}>PUERTO</span> <span style={{color:"#0050f0"}}>RICO</span> a tu mesa!
        
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mt: 5,
        }}
      >
        <Box
          sx={{
            width: 200,
            backgroundColor: "#f2f2f2",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            textAlign="center"
            variant="h4"
            sx={{ fontWeight: "bolder !important", color: "#333333" }}
          >
            Elegí
          </Typography>
          <FastfoodOutlinedIcon
            sx={{ color: "#ed0000", fontSize: 50, my: 2 }}
          />
          <Typography
            variant="subtitle2"
            sx={{ color: "gray", textAlign: "center" }}
          >
            Navegá nuestro menú y elegí los platos y bebidas que más te gusten.
            ¡Descubrí tus favoritos!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowForwardOutlinedIcon
            sx={{
              color: "blue",
              fontSize: 50,
              display: { xs: "none", sm: "block" },
            }}
          />
          <ArrowDownwardOutlinedIcon
            sx={{
              color: "black",
              fontSize: 50,
              display: { xs: "block", sm: "none" },
            }}
          />
        </Box>
        <Box
          sx={{
            width: 200,
            backgroundColor: "#f2f2f2",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            textAlign="center"
            variant="h4"
            sx={{ fontWeight: "bolder !important", color: "#333333" }}
          >
            Ordená
          </Typography>
          <ShoppingCartCheckoutOutlinedIcon
            sx={{ color: "#ed0000", fontSize: 50, my: 2 }}
          />
          <Typography
            variant="subtitle2"
            sx={{ color: "gray", textAlign: "center" }}
          >
            Confirmá tu pedido, pagá rápido y seguro, y proporcioná tu
            dirección. ¡Así de fácil!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowForwardOutlinedIcon
            sx={{
              color: "blue",
              fontSize: 50,
              display: { xs: "none", sm: "block" },
            }}
          />
          <ArrowDownwardOutlinedIcon
            sx={{
              color: "black",
              fontSize: 50,
              display: { xs: "block", sm: "none" },
            }}
          />
        </Box>
        <Box
          sx={{
            width: 200,
            backgroundColor: "#f2f2f2",
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            textAlign="center"
            variant="h4"
            sx={{ fontWeight: "bolder !important", color: "#333333" }}
          >
            Recibí
          </Typography>
          <LocalShippingOutlinedIcon
            sx={{ color: "#ed0000", fontSize: 50, my: 2 }}
          />
          <Typography
            variant="subtitle2"
            sx={{ color: "gray", textAlign: "center" }}
          >
            Recibí tu pedido rápidamente. ¡Listo para disfrutar, entregado
            directamente a tu puerta!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Delivery;