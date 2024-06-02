import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ProductPage } from "@/pages/ProductPage";
import { ShopBasketPage } from "@/pages/ShopBasketPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/baskets" element={<ShopBasketPage />} />
    </Routes>
  );
}

export default App;
