import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Button,
  Divider,
  Tooltip,
} from "@mui/material";
import AutoAwesomeMosaicOutlinedIcon from "@mui/icons-material/AutoAwesomeMosaicOutlined";

import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import DefaultButton from "../../DefaultButton/DefaultButton";
import CartDrawer from "../../CartDrawer/CartDrawer";
import logoRestaurant from "../../../assets/images/logo.png";
import HamburguerMenu from "./HamburguerMenu";
import UserMenu from "./UserMenu";

const pages = ["Inicio", "Categorias", "Delivery", "Contacto"];

const Navbar = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  const [openCart, setOpenCart] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{ top: 0, backgroundColor: "white", color: "black" }}
    >
      <Container maxWidth="xl" sx={{ px: 1 }}>
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logoRestaurant}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              width: 120,
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <HamburguerMenu pages={pages} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {isAuthenticated && !loading && (
            <Box sx={{ flexGrow: 0, display: "flex" }}>
              {user?.role === "admin" && (
                <Box sx={{ display: "flex" }}>
                  <Tooltip title="Panel Administrador">
                    <AutoAwesomeMosaicOutlinedIcon
                      onClick={() => navigate("/admin/users")}
                      sx={{
                        color: "#333333",
                        cursor: "pointer",
                        transition: "all ease-in-out .3s",
                        ":hover": {
                          color: "#ffc139",
                        },
                      }}
                    />
                  </Tooltip>
                  <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                </Box>
              )}
              <UserMenu />
            </Box>
          )}

          {!isAuthenticated && (
            <Box>
              <NavLink to="/login">
                <DefaultButton buttonText="INICIAR SESION" />
              </NavLink>
            </Box>
          )}
        </Toolbar>
      </Container>

      {openCart && (
        <CartDrawer openCart={openCart} closeCart={() => setOpenCart(false)} />
      )}
    </AppBar>
  );
};

export default Navbar;