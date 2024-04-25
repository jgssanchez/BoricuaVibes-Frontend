import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout/RootLayout";

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
