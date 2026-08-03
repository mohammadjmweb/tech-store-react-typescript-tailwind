import "./App.css";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { CartProvider } from "./CartContext";
import { useTheme } from "./components/ThemeContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

import { useState , useEffect} from "react";

import Loading from "./components/Loading";

import ScrollToTop from "./components/ScrollToTop";

const App = () => {

  const { darkMode } = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }


  return (

    <CartProvider>

      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-black"
        }`}
      >

        <Navbar />


        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />


            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />


            <Route
              path="/cart"
              element={<Cart />}
            />


            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </main>
        <Footer/>
        <ScrollToTop/>
      </div>

    </CartProvider>

  );
};


export default App;