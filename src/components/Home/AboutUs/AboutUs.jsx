import { Grid, Typography } from "@mui/material";
import "../AboutUs/AboutUs.css";
import sticker1 from "../../../assets/sticker1.jpg";
const AboutUs = () => {
  return (
    <Grid container className="container">
      <Grid item xs={12} md={6} className="imageContainer">
        <img
          src={sticker1}
          alt="Delicious Food"
          className="image"
        />
      </Grid>
      <Grid item xs={12} md={6} className="contentContainer">
        <Typography variant="h2" component="h2" className="title" gutterBottom>
          BIENVENIDO A BORICUA VIBES
        </Typography>
        <Typography variant="body1" className="paragraph" paragraph>
          Ubicado en el corazón de la ciudad, Boricua Vibes es mucho más que un
          restaurante: es un viaje culinario a la vibrante isla de Puerto Rico.
          Con una atmósfera acogedora y auténtica, este lugar encarna la esencia
          misma de la cultura caribeña. Desde el momento en que entras, te
          envuelve la música tropical y la decoración colorida, transportándote
          a las calles de San Juan.
        </Typography>
        <Typography variant="body1" className="paragraph" paragraph>
          El menú de Boricua Vibes es un festín para los sentidos. Con platos
          tradicionales como el mofongo y el lechón asado, cada bocado está
          lleno de los sabores ricos y las especias característicos de la cocina
          puertorriqueña. Los ingredientes frescos y las recetas transmitidas de
          generación en generación dan vida a una experiencia gastronómica
          única.
        </Typography>
        <Typography variant="body1" className="paragraph" paragraph>
          Pero Boricua Vibes es más que solo comida: es hospitalidad
          puertorriqueña en su máxima expresión. El personal es amable, acogedor
          y siempre está dispuesto a compartir historias sobre los platos y la
          cultura de la isla. Ya sea que estés disfrutando de una cena íntima o
          de una celebración con amigos, te hacen sentir como en casa.
        </Typography>
        <Typography variant="body1" className="paragraph" paragraph>
          Pero Boricua Vibes es más que solo comida: es hospitalidad
          puertorriqueña en su máxima expresión. El personal es amable, acogedor
          y siempre está dispuesto a compartir historias sobre los platos y la
          cultura de la isla. Ya sea que estés disfrutando de una cena íntima o
          de una celebración con amigos, te hacen sentir como en casa.
        </Typography>
        
      </Grid>
    </Grid>
  );
};

export default AboutUs;
