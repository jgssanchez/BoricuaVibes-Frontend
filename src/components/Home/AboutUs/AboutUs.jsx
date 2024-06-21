import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import logo1 from "../../../assets/images/logo1.jfif";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Grid container className="aboutUsContainer">
      <Grid item xs={12} md={6} className="imageContainer">
        <Box
          component="img"
          src={logo1}
          alt="Delicious Food"
          className="aboutUsImage"
        />
      </Grid>
      <Grid item xs={12} md={6} className="contentContainer">
        <Typography
          variant="h4"
          className="aboutUsTitle"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          BIENVENIDO A BORICUA VIBES
        </Typography>
        <Typography
          variant="body1"
          className="aboutUsParagraph"
          sx={{ textAlign: { xs: "center", md: "left" }, mt: 3 }}
          paragraph
        >
          Ubicado en el corazón de la ciudad, Boricua Vibes es mucho más que un
          restaurante: es un viaje culinario a la vibrante isla de Puerto Rico.
          Con una atmósfera acogedora y auténtica, este lugar encarna la esencia
          misma de la cultura caribeña. Desde el momento en que entras, te
          envuelve la música tropical y la decoración colorida, transportándote
          a las calles de San Juan.
        </Typography>
       

      </Grid>
    </Grid>
  );
};

export default AboutUs;
