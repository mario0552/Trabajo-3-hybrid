import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";
import AboutUs from "./pages/AboutUs";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import AdminUsers from "./pages/AdminUsers";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacto" element={<NotFound />} />
        <Route path="/no-autorizado" element={<Unauthorized />} />

        {/* Protegida por login + role: solo "admin" */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/usuarios" element={<AdminUsers />} />
        </Route>

        <Route path="/404" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
