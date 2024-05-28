import { Grid, Typography } from "@mui/material";
import ProductCard from "./CardProduct";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        className="title"
        gutterBottom
        sx={{ textAlign: "center", m: 3 }}
      >
        Nuestro Menú
      </Typography>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto._id}>
              <ProductCard
                image={producto.image}
                title={producto.name}
                description={producto.description}
                price={producto.price}
                onClick={() => console.log(`${producto.name} added to cart`)}
              />
            </Grid>
          ))
        ) : (
          <Typography
            variant="body1"
            component="p"
            sx={{ textAlign: "center", width: "100%" }}
          >
            No hay productos disponibles.
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default CardContainer;
