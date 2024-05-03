import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import error404 from "../assets/error404.jpg";

const NotFoundPage = () => {
  const rootStyle = {
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '50px',
  };

  const imageStyle = {
    maxWidth: '60%',
    height: 'auto',
  };

  return (
    <div style={rootStyle}>
        <img src={error404}	 alt="Error 404" style={imageStyle} />
      <Typography variant="h4" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lo sentimos, la página que estás buscando no existe.
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/">
        Volver a la página de inicio
      </Button>
    </div>
  );
};

export default NotFoundPage;
