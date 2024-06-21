import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: "#23201E", color: "white" }}
    >
      <Grid
        container
        maxWidth="xl"
        sx={{
          pt: 4,
          mx: "auto",
        }}
      >
        <Grid item xs={12} sm={4} sx={{ mt: { xs: 2, sm: 0 } }}>
          <Typography textAlign="center" variant="h4">
            Contacto
          </Typography>
          <Box sx={{ width: 200, mx: "auto", my: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                height: 40,
              }}
            >
              <MailOutlineIcon sx={{ fontSize: 30, color: "#ffc139" }} />
              <Typography sx={{ width: 140, color: "gray" }}>
                restaurante@gmail.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                height: 40,
                my: 2,
              }}
            >
              <CallOutlinedIcon sx={{ fontSize: 30, color: "#ffc139" }} />
              <Typography sx={{ width: 140, color: "gray" }}>
                +543811111111
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                height: 40,
              }}
            >
              <LocationOnOutlinedIcon sx={{ fontSize: 30, color: "#ffc139" }} />
              <Typography sx={{ width: 140, color: "gray" }}>
                308 Negra Arroyo Lane, Albuquerque
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ my: { xs: 4, sm: 0 } }}>
          <Typography
            textAlign="center"
            variant="h4"
            sx={{ fontSize: { xs: 70, sm: 34 } }}
          >
            Restaurante
          </Typography>
          <Typography
            textAlign="center"
            sx={{
              fontSize: { xs: 36, sm: 24 },
              color: "gray",
              mt: { xs: -2, sm: 0 },
            }}
          >
            <i>Síguenos en</i>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
            <FacebookIcon sx={{ color: "#3b5998", fontSize: 40 }} />
            <InstagramIcon sx={{ color: "#F56040", fontSize: 40, mx: 2 }} />
            <TwitterIcon sx={{ color: "#1DA1F2", fontSize: 40 }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ mt: { xs: 2, sm: 0 } }}>
          <Typography textAlign="center" variant="h4">
            Sobre Nosotros
          </Typography>
          <Box sx={{ width: 200, mx: "auto", my: 2 }}>
            <Typography sx={{ height: 40, color: "gray" }}>Nosotros</Typography>
            <Typography sx={{ height: 40, my: 2, color: "gray" }}>
              Politicas de Privacidad
            </Typography>
            <Typography sx={{ height: 40, color: "gray" }}>
              Terminos y Condiciones
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ backgroundColor: "white", my: 1 }} />
      <Box maxWidth="xl" sx={{ textAlign: "center", mx: "auto", pb: 2 }}>
        <Typography variant="h7" sx={{ textAlign: "center" }}>
          © ROLLING CODE SCHOOL - TODOS LOS DERECHOS RESERVADOS
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;