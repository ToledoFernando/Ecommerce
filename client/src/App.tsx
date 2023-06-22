import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="pt-20 bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<h1>Productos</h1>} />
          <Route path="/category" element={<h1>Categorias</h1>} />
          <Route path="/about" element={<h1>Acerca de nosotros</h1>} />
          <Route path="/contact" element={<h1>Contacto</h1>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
