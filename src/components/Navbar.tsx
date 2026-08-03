import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useCart } from "../CartContext";
import { useTheme } from "./ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
  faCartShopping,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { cartItems } = useCart();
  const { darkMode, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    { name: "Laptops", id: "laptops" },
    { name: "Mobiles", id: "mobiles" },
    { name: "Flash Drives", id: "flash" },
    { name: "AirPods", id: "airpods" },
  ];

  const scrollToCategory = (id: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 border-b-2 border-b-blue-700 shadow-lg transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-blue-600 text-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
        >
          <FontAwesomeIcon icon={faStore} />
          <span>Tech Store</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-8">
          {/* Home */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faHouse} />
            <span className="hidden md:inline">Home</span>
          </Link>

          {/* Categories */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition duration-300"
            >
              <FontAwesomeIcon icon={faList} />
              <span className="hidden md:inline">
                Categories {open ? "▲" : "▼"}
              </span>
            </button>

            <div
              className={`absolute left-0 mt-3 w-44 rounded-lg shadow-xl overflow-hidden transition-all duration-300 origin-top ${
                open
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0 pointer-events-none"
              } ${
                darkMode
                  ? "bg-gray-800"
                  : "bg-white text-black"
              }`}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToCategory(category.id)}
                  className="block w-full text-left px-4 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-300"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 cursor-pointer hover:text-yellow-300 transition duration-300"
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="hidden md:inline">Cart</span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-5 bg-red-500 text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="cursor-pointer px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-300"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;