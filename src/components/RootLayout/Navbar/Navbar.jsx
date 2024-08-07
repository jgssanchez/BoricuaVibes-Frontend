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

import {  useSelector } from "react-redux";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import DefaultButton from "../../DefaultButton/DefaultButton";
import logoRestaurant from "../../../assets/images/logo.png";
import HamburguerMenu from "./HamburguerMenu";
import UserMenu from "./UserMenu";

const pages = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Categorias",
    path: "/categories",
  }, {
    name: "Envíos",
    path: "#delivery-section",
  },
  {
    name: "Contacto",
    path: "#contact-section",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  

  const handleNavClick = (path) => {
    if (path.startsWith("#")) {
      const sectionId = path.substring(1);
      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/", { state: { scrollTo: sectionId } });
      }
    } else {
      navigate(path);
    }
  };


  return (
    <AppBar
      position="sticky"
      sx={{ top: 0, backgroundColor: "white", color: "black" }}
    >
      <Container maxWidth="xl" sx={{ px: 1 }}>
        <Toolbar disableGutters>
        <Link to="/" style={{ textDecoration: 'none' }} >
      <Box
        component="img"
        src={logoRestaurant}
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          width: 150,
          cursor: 'pointer' 
        }}
      />
    </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <HamburguerMenu pages={pages} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, indexPage) => (
              <Button
                key={indexPage}
                sx={{ my: 2, color: "black", display: "block" }}
                onClick={()=>
                  handleNavClick(page.path)
                }
              >
                <Link
                  to={page.path}
                  style={{ textDecoration: "none", color: "#333333" }}
                >
                  {page.name}
                </Link>
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
                          color: "#0050f0",
                        },
                      }}
                    />
                  </Tooltip>
                  <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
                </Box>
              )}
              <UserMenu/>
            </Box>
          )}

          {!isAuthenticated && (
            <Box>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <DefaultButton buttonText="INICIAR SESION" />
              </NavLink>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;