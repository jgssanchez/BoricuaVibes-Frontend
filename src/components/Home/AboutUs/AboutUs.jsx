import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import logo1 from "../../../assets/images/aboutus.jpg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Grid container maxWidth="xl" sx={{ mx: "auto", my: 5, px: 1 }}>
      <Grid item xs={12} md={6} className="imageContainer">
        <Box
          component="img"
          src={logo1}
          alt="Delicious Food"
          className="aboutUsImage"
          height="80%"
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ px: { xs: 1, md: 3 } }}>
        <Typography
          variant="h2"
          className="aboutUsTitle"
          sx={{ textAlign: "center", mt: 5 }}
        >
          ¿QUIÉNES SOMOS?
        </Typography>
        <Typography
          variant="h5"
          className="aboutUsParagraph"
          sx={{ textAlign: { xs: "center", md: "justify" }, mt: 3 }}
          paragraph
        >
          Boricua Vibes es mucho más que un
          restaurante: es un viaje culinario a la vibrante isla de Puerto Rico.
          Con una atmósfera acogedora y auténtica, este lugar encarna la esencia
          misma de la cultura caribeña. Desde el momento en que entras, te
          envuelve la música tropical y la decoración colorida, transportándote
          a las calles de San Juan. Nuestros chefs, preparan cada plato con
          ingredientes frescos y auténticos, garantizando una experiencia
          culinaria inigualable. En Boricua Vibes, cada visita es una
          celebración vibrante de los sabores, colores y tradiciones de Puerto
          Rico.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
