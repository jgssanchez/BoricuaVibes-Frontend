// CardProduct.js
import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductCard = ({ image, title, description, price, onClick }) => {
  return (
    <Card sx={{ m: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image || "https://via.placeholder.com/150"} // Placeholder image if image is not provided
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.primary">
            Price: ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Button onClick={onClick} variant="contained" color="primary">
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
