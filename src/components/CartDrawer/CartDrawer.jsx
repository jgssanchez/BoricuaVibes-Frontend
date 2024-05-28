import { Box, Drawer, List, ListItem } from "@mui/material";

const CartDrawer = ({ openCart, closeCart }) => {
    
  const ProductsList = (
    <Box sx={{ width: 250}} role="presentation" onClick={closeCart} >
      <List>
        <ListItem>1</ListItem>
        <ListItem>1</ListItem>
        <ListItem>1</ListItem>
        <ListItem>1</ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer open={openCart} onClose={closeCart} anchor="right">
        {ProductsList}
      </Drawer>
    </>
  );
};

export default CartDrawer;