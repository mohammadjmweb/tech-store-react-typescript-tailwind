import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { useTheme } from "../components/ThemeContext";

const categories = [
  {
    id: "laptops",
    title: "💻 Laptops",
    category: "Laptop",
  },
  {
    id: "mobiles",
    title: "📱 Mobiles",
    category: "Mobile",
  },
  {
    id: "flash",
    title: "💾 Flash Drives",
    category: "Flash",
  },
  {
    id: "airpods",
    title: "🎧 AirPods",
    category: "AirPods",
  },
] as const;

const Home = () => {
  const { darkMode } = useTheme();

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [priceRange, setPriceRange] =
    useState("all");

  return (
    <div className="px-6 py-8">

      {/* Filters */}

      <div
        className={`mb-12 rounded-xl shadow-lg p-6 border transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-300"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">
          🔎 Filter Products
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Product Type */}

          <div>
            <label className="block mb-2 font-semibold">
              Product Type
            </label>

            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
              className={`w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <option value="all">
                All Products
              </option>

              <option value="Laptop">
                Laptops
              </option>

              <option value="Mobile">
                Mobiles
              </option>

              <option value="Flash">
                Flash Drives
              </option>

              <option value="AirPods">
                AirPods
              </option>

            </select>
          </div>

          {/* Price */}

          <div>
            <label className="block mb-2 font-semibold">
              Price Range
            </label>

            <select
              value={priceRange}
              onChange={(e) =>
                setPriceRange(e.target.value)
              }
              className={`w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-300"
              }`}
            >
              <option value="all">
                All Prices
              </option>

              <option value="0-500">
                $0 - $500
              </option>

              <option value="500-1000">
                $500 - $1000
              </option>

              <option value="1000-1500">
                $1000 - $1500
              </option>

              <option value="1500-2000">
                $1500 - $2000
              </option>

            </select>
          </div>

        </div>
      </div>

      {/* Categories */}

      {categories
        .filter(
          (section) =>
            selectedCategory === "all" ||
            section.category === selectedCategory
        )
        .map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-16 scroll-mt-24"
          >
            <h2 className="text-4xl font-bold mb-8 border-b-2 border-blue-500 pb-3">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              {products
                .filter(
                  (product) =>
                    product.category ===
                    section.category
                )

                .filter((product) => {
                  if (priceRange === "all")
                    return true;

                  const [min, max] =
                    priceRange
                      .split("-")
                      .map(Number);

                  return (
                    product.price >= min &&
                    product.price <= max
                  );
                })

                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

            </div>
          </section>
        ))}
    </div>
  );
};

export default Home;