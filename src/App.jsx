import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout/RootLayout";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/actions/userActions.js";
import Users from "./components/AdminDashboard/Users/Users.jsx";
import Products from "./components/AdminDashboard/Products/Products.jsx";
import Orders from "./components/AdminDashboard/Orders/Orders.jsx";
import { getAllProducts } from "./redux/actions/productActions.js";
import { getUserCart } from "./redux/actions/cartActions.js";
import { getUserOrders } from "./redux/actions/orderActions.js";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import AdminRoutes from "./routes/AdminRoutes.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx";
import FilterCategoriesPage from "./pages/FilterCategoriesPage.jsx";
import UserOrdersPage from "./pages/UserOrderPage.jsx";
import NotFoundPage  from "./pages/NotFoundPage.jsx";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllProducts());
    if (isAuthenticated && !loading) {
      dispatch(getUserCart());
      dispatch(getUserOrders());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/categories" element={<FilterCategoriesPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route
            path="/admin/*"
            element={
              <AdminRoutes>
                <AdminPage />
              </AdminRoutes>
            }
          >
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route
            path="/checkout"
            element={
              <ProtectedRoutes>
                <CheckoutPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/user-orders"
            element={
              <ProtectedRoutes>
                <UserOrdersPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
