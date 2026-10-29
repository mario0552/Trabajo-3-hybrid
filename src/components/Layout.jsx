import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Layout compartido: Navbar arriba, la página activa en <Outlet /> y Footer abajo
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
