import { Grid, Typography } from "@mui/material";
import CardProduct from "./CardProduct";

const listaProductos = [
  {
    image: "",
    title: "Producto 1",
    description: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    price: 123,
  },
  {
    image: "",
    title: "Producto 2",
    description: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    price: 456,
  },
  {
    image: "",
    title: "Producto 3",
    description: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    price: 789,
  },
  {
    image: "",
    title: "Producto 3",
    description: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem",
    price: 789,
  },
];

const CardContainer = () => {
  return (
      <>
      <Typography variant="h3" component="h2" className="title" gutterBottom sx={{textAlign: "center", m: 3}}> 
          Nuestro Menú
        </Typography>
    <Grid container spacing={2} sx={{ width: "100%" }} >
    
      {listaProductos.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardProduct
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            />
        </Grid>
      ))}
    </Grid>
      </>
  );
};

export default CardContainer;
