import { Box, Container, Typography } from "@mui/material";

import offertLeft from "../../../assets/images/offersLeft.jpg";
import offertCenter from "../../../assets/images/offersCenter.jpg";
import offertRight from "../../../assets/images/offersRight.jpg";

const Offerts = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        mx: "auto",
        my: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <Box component="img" src={offertLeft} sx={{ width: "100%" }} alt="ofertas"/>
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, 0%)",
            color: "#ed0000",
            textShadow:"5px 3px 5px black",
            fontWeight: "bolder !important",
            fontSize: { xs: "3rem", sm: "5rem", md: "3rem" },
            width: "100%",
            textAlign: "center",
          }}
        >
          HAPPY
        </Typography>
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, 80%)",
            color: "#0050f0",
            textShadow:"5px 3px 5px black",
            fontWeight: "bolder !important",
            fontSize: { xs: "3rem", sm: "5rem", md: "3rem" },
          }}
        >
          HOUR!
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, 500%)",
            color: "#fff",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "1rem" },
            width: "100%",
            textAlign: "center",
          }}
        >
          <mark>Lunes a Jueves 20:00 - 22:00</mark>
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box component="img" src={offertCenter} sx={{ width: "100%" }} alt="ofertas"/>
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 0%)",
            color: "#ed0000",
            textShadow:"3px 1px 5px black",
            fontSize: { xs: "1.3rem", sm: "3rem", md: "2.5rem", lg: "3rem" },
            width: "100%",
            textAlign: "center",
            letterSpacing: "2px",
          }}
        >
          OFERTA ESPECIAL
        </Typography>
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            top: "55%",
            left: "50%",
            fontWeight: "bolder !important",
            transform: "translate(-50%, 80%)",
            color: "#0050f0",
            textShadow:"3px 1px 5px black",
            fontSize: { xs: "1.5rem", sm: "3rem", md: "2.5rem", lg: "3rem" },
            width: "100%",
            textAlign: "center",
          }}
        >
          PAGÁ DOS, COMÉ TRES
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, 500%)",
            color: "#333333",
            fontSize: { xs: ".8rem", sm: "2rem", md: "1.3rem", lg: "1.5rem" },
            width: "100%",
            textAlign: "center",
          }}
        >
          <mark>*ABONANDO CON EFECTIVO</mark>
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box component="img" src={offertRight} sx={{ width: "100%" }} alt="ofertas"/>
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            bottom: "30%",
            left: "50%",
            fontWeight: "bolder !important",
            transform: "translate(-50%, 0%)",
            color: "#0050f0",
            textShadow:"5px 3px 5px black",
            fontSize: { xs: "3rem", sm: "5rem", md: "2.5rem", lg: "3rem" },
            width: "100%",
            textAlign: "center",
          }}
        >
          15% OFF
        </Typography>
        <Typography
          variant="h3"
          sx={{
            position: "absolute",
            bottom: "30%",
            left: "50%",
            fontWeight: "bolder !important",
            transform: "translate(-50%, 100%)",
            color: "#ed0000",
            textShadow:"5px 3px 5px black",
            fontSize: { xs: "2.5rem", sm: "5rem", md: "2.5rem", lg: "2.5rem" },
            width: "100%",
            textAlign: "center",
          }}
        >
          SÁBADOS
        </Typography>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            bottom: "25%",
            left: "50%",
            transform: "translate(-50%, 500%)",
            color: "#333333",
            fontSize: { xs: ".8rem", sm: "2rem", md: ".8rem", lg: "1rem" },
            width: "100%",
            textAlign: "center",
          }}
        >
          <mark>*SÓLO CONSUMO EN LOCAL
          </mark>        </Typography>
      </Box>
    </Container>
  );
};

export default Offerts;