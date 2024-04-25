import { Box, Container, Divider, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth={false} sx={{ backgroundColor: "#1976D2", color:"white" }}>
      <Grid container maxWidth="xl" sx={{mx:"auto", display:"flex", justifyContent:"space-around", pt:4}}>
        <Grid item xs={12} sm={4} sx={{mt:{xs:2,sm:0}}}>
          <Typography variant="h4">Contacto</Typography>
          <Typography>BoricuaVibes@gmail.com</Typography>
          <Typography>+54381132123</Typography>
          <Typography>
            308 Negra Arroyo Lane, Albuquerque, New Mexico
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}  sx={{mt:{xs:2,sm:0}}}>
          <Typography variant="h4">Redes Sociales</Typography>
          <Typography>Facebook</Typography>
          <Typography>Twitter</Typography>
          <Typography>Instagram</Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{mt:{xs:2,sm:0}}}>
          <Typography variant="h4"  >Sobre Nosotros</Typography>
          <Typography>Nosotros</Typography>
          <Typography>Politicas de Privacidad</Typography>
          <Typography>Terminos y Condiciones</Typography>
        </Grid>
      </Grid>
      <Divider  sx={{backgroundColor:"white", my:1}}/>
      <Box  maxWidth="xl" sx={{textAlign:"center", mx:"auto", pb: 2}}>
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          © Rolling Code School 2024 - Todos los derechos reservados
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
