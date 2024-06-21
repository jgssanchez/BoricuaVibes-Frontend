import { Outlet } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import { Container } from "@mui/material";

const AdminPage = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ minHeight: "500px"}}>
      <AdminDashboard />
      <Outlet/>
    </Container>
  );
};

export default AdminPage;