import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "./Footer";


export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
