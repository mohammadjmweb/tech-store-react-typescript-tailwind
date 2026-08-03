import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";

const NotFound = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center px-6 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >

      <h1 className="text-8xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-6">
        Page Not Found
      </h2>

      <p className="text-lg mt-4 max-w-md">
        Sorry, the page you are looking for does not exist
        or has been moved.
      </p>


      <Link
        to="/"
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl transition duration-300"
      >
        Back To Home
      </Link>

    </div>
  );
};

export default NotFound;