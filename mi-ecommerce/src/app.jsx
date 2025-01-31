import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Inicio from "./pages/Inicio";
import Ayuda from "./pages/Ayuda";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import CategoryPage from "./pages/CategoryPage";
import ProductDetail from "./components/ProductDetail";
import { CartProvider } from "./context/CartContext";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/productos" element={<Productos />} />
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/ayuda" element={<Ayuda />} />
                    <Route path="/category/:categoryName" element={<CategoryPage />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
