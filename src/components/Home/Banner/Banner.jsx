import { Container, Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logoBoricua from "../../../assets/images/banner.jpeg";
import DefaultButton from "../../DefaultButton/DefaultButton";
import "./Banner.css";

const Banner = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container
      disableGutters
      maxWidth="xl"
      className="banner-container"
      sx={{
        backgroundImage: `url(${logoBoricua}) alt="banner principal"`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box className="banner-overlay" />
      <Box
        className="banner-content"
        sx={{
          paddingLeft: { xs: "5%", sm: "10%", md: "15%" },
          paddingRight: { xs: "5%", sm: "10%", md: "15%" },
          paddingY: "5%",
        }}
      >
        <Typography
          variant="h1"
          className="title-banner"
          sx={{
            fontSize: { xs: "3.5rem", sm: "5rem", md: "6rem", lg: "7rem" },
          }}
        >
          BORICUA
        </Typography>
        <Typography
          variant="h2"
          className="subtitle-banner"
          sx={{
            fontSize: { xs: "3rem", sm: "4rem", md: "rem", lg: "6rem" },
          }}
        >
          VIBES
        </Typography>
        <Typography
          variant="body1"
          className="description-banner"
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem", lg: "1rem" },
            maxWidth: { xs: "100%", md: "70%" },
          }}
        >
          Descubre la auténtica experiencia culinaria de Puerto Rico. Cada plato es una celebración de sabores que te transportará directamente a la isla del encanto.
        </Typography>
        <Box className="button-container">
          <DefaultButton
            styles={{
              marginTop: "2rem",
              alignSelf: "flex-start",
            }}
            buttonText={isMobile ? "Categorias" : "Explorar Categorias"}
            onclick={
              isAuthenticated ? () => navigate("/categories") : () => navigate("/login")
            }
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Banner;