import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Admin from "./pages/Admin";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
