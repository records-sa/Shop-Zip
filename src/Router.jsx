import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import NewProducts from "./pages/NewProducts";
import ProductDetail from "./pages/ProductDetail";
import MyCart from "./pages/MyCart";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/new" element={<NewProducts />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/carts" element={<MyCart />} />
      </Route>
    </Routes>
  );
}
