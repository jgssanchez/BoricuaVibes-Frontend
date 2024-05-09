import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';


const CardProduct = ({image, title, description, price}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price}
        </Typography>
        <Button variant="contained">Ver más</Button>
      </CardContent>
    </Card>
  );
};

export default CardProduct;
