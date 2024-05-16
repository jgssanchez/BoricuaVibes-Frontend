import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout/RootLayout";
import NotFound from "./pages/NotFound.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import {  useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/actions/userActions.js";




const App = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getUser())
  }, [])

  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
