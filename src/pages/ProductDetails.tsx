import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../CartContext";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
const ProductDetails = () => {
  const { id } = useParams();

  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center text-3xl mt-20">
        Product not found.
      </div>
    );
  }

  const inCart = cartItems.some(
    (item) => item.product.id === product.id
  );

  const similarProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto p-8">

      <div className="grid md:grid-cols-2 gap-12">

        <img
          src={product.img}
          alt={product.name}
          className="w-full h-auto object-contain rounded-4xl shadow-lg"
        />

        <div className="flex flex-col justify-between h-full">

          <h1 className="text-4xl font-bold mb-6">
            {product.name}
          </h1>

          <h2 className="text-3xl text-blue-600 font-semibold mb-6">
            ${product.price.toFixed(2)}
          </h2>

          <div className="whitespace-pre-line text-lg leading-8 mb-8">
            {product.description}
          </div>

          <button
            onClick={() =>
              inCart
                ? removeFromCart(product.id)
                : addToCart(product)
            }
            className={`cursor-pointer px-8 py-3 rounded-xl text-white text-xl transition duration-300 ${
              inCart
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {inCart
              ? "Remove from Cart"
              : "Add to Cart"}
          </button>

        </div>

      </div>

      <div className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Similar Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {similarProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;