import { Container, Paper, Tab, Tabs } from "@mui/material";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";

const itemsList = [
  {
    value: 0,
    name: "Usuarios",
    path: "users",
    icon: <ManageAccountsOutlinedIcon />,
  },
  {
    value: 1,
    name: "Productos",
    path: "products",
    icon: <RestaurantOutlinedIcon />,
  },
  {
    value: 2,
    name: "Pedidos",
    path: "orders",
    icon: <LocalShippingOutlinedIcon />,
  },
];

const AdminDashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      disableGutters
      maxWidth="md"
      component={Paper}
      sx={{ position: "sticky", top: {xs: 55, sm: 75, }, backgroundColor: "white", zIndex: 2 }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#ed0000",
            height: "4px",
          },
        }}
      >
        {itemsList.map((item, index) => (
          <Tab
            key={index}
            icon={
              <span
                style={{ color: value === item.value ? "#0050f0" : "#333333" }}
              >
                {item.icon}
              </span>
            }
            label={
              <span
                style={{ color: value === item.value ? "#000" : "#333333" }}
              >
                {item.name}
              </span>
            }
            component={Link}
            to={item.path}
          />
        ))}
      </Tabs>
    </Container>
  );
};

export default AdminDashboard;