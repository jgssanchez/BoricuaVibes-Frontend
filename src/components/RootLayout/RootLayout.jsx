import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const RootLayout = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;