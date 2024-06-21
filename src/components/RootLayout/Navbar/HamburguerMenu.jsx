import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const HamburguerMenu = ({pages}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon
          sx={{
            borderRadius: 1,
            backgroundColor: "#0050f0",
            color: "white",
            width: 40,
            height: 30,
          }}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page, indexPage) => (
          <MenuItem key={indexPage} onClick={handleCloseNavMenu}>
            <Link to={page.path} style={{ textDecoration: "none", color: "#333333" }}>{page.name.toUpperCase()}</Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HamburguerMenu;