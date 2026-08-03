import { useNavigate } from "react-router-dom";
import type { Product } from "../types/Product";
import { useTheme } from "./ThemeContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className={`cursor-pointer rounded-2xl border-2 border-blue-700 overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Category */}
      <div className="px-4 pt-4">
        <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Product Image */}
      <div className="h-64 flex items-center justify-center p-5">
        <img
          src={product.img}
          alt={product.name}
          className="max-h-full max-w-full rounded-xl object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Product Name */}
      <div className="px-5 pb-5">
        <h2 className="text-xl font-semibold text-center line-clamp-2 min-h-15">
          {product.name}
        </h2>

        <button
          className="cursor-pointer w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;