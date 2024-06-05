import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ProductPage } from "@/pages/ProductPage";
import { ShopBasketPage } from "@/pages/ShopBasketPage";
import { ListingsPage } from "@/pages/ListingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/baskets" element={<ShopBasketPage />} />
      <Route path="/allproduct" element={<ListingsPage />} />
    </Routes>
  );
}

export default App;
