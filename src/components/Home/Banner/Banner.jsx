import "./Banner.css";

import { Container, Box, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import logoBoricua from "../../../assets/images/logo1.jfif";
import DefaultButton from "../../DefaultButton/DefaultButton";

const Banner = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate()

  return (
    <Container
      disableGutters
      maxWidth='xl'
      sx={{
        backgroundImage: `url(${logoBoricua})`,
        height: {xs: "100vh", xl: "60dvh"},
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box
        sx={{
          px: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 150%)",
        }}
      >
        <Typography variant="h1" className="title-banner">
          BORICUA 
        </Typography>
        <Typography variant="h2" className="subtitle-banner">
          VIBES
        </Typography>
        <Typography variant="h2" className="description-banner">
          Sabores de PR a tu mesa
        </Typography>
        {/* <DefaultButton
          styles={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 200%)",
          }}
          buttonText="Comprar ahora"
          onclick={isAuthenticated ? () => navigate("/categories") : () => navigate("/login")}
        /> */}
      </Box>
    </Container>
  );
};

export default Banner;