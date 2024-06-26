import Typography from "@mui/material/Typography";
import error404 from "../../assets/error404.jpg";
import DefaultButton from "../DefaultButton/DefaultButton";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Container sx={{ my: 5}} maxWidth="md">
      
        <Box component="img" src={error404} alt="Error 404" sx={{mx:"auto" , width:"100%"}}/>
        <Typography textAlign="center" variant="h4" gutterBottom>
          Página no encontrada
        </Typography>
        <Typography textAlign="center" variant="body1" gutterBottom>
          Lo sentimos, nada delicioso fue encontrado aqui.
        </Typography>
        <DefaultButton
          buttonText="Volver al Inicio"
          styles={{ margin: "auto" }}
          onclick={()=> navigate("/")}
        />
      
    </Container>
  );
};

export default NotFound;
