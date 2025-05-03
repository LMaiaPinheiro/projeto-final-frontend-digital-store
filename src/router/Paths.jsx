// Paths.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductListingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;
