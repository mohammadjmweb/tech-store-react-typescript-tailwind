import { Link } from "react-router-dom";
import { useTheme } from "../components/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer
      className={`mt-20 transition-all duration-300 ${darkMode
        ? "bg-gray-950 text-gray-300"
        : "bg-gray-100 text-gray-800"
        }`}
    >

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">


        {/* About */}
        <div>

          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"
            }`}>
            Tech Store
          </h2>

          <p className="leading-7">
            Your trusted online store for laptops,
            smartphones, flash drives and accessories.
            We provide quality products with the best
            shopping experience.
          </p>

        </div>



        {/* Quick Links */}
        <div>

          <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"
            }`}>
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition"
              >
                Home
              </Link>
            </li>


            <li>
              <Link
                to="/cart"
                className="hover:text-blue-400 transition"
              >
                Cart
              </Link>
            </li>


            <li>
              <a
                href="#laptops"
                className="hover:text-blue-400 transition"
              >
                Categories
              </a>
            </li>

          </ul>

        </div>




        {/* Categories */}
        <div>

          <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"
            }`}>
            Categories
          </h3>


          <ul className="space-y-3">

            <li>Laptops</li>

            <li>Mobiles</li>

            <li>Flash Drives</li>

            <li>AirPods</li>

          </ul>

        </div>




        {/* Contact */}
        <div>

          <h3 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"
            }`}>
            Contact
          </h3>

          <ul className="space-y-3">

            <li>
              📧 support@techstore.com
            </li>

            <li>
              📞 +49 123 456 789
            </li>

            <li>
              📍 Germany
            </li>

          </ul>



          <div className="flex gap-5 mt-6">

            <a
              href="#"
              className="text-2xl cursor-pointer transition duration-300 hover:text-blue-500 hover:scale-110"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="#"
              className="text-2xl cursor-pointer transition duration-300 hover:text-pink-500 hover:scale-110"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="#"
              className="text-2xl cursor-pointer transition duration-300 hover:text-gray-300 hover:scale-110"
              aria-label="X"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>

            <a
              href="#"
              className="text-2xl cursor-pointer transition duration-300 hover:text-blue-400 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>

            <a
              href="#"
              className="text-2xl cursor-pointer transition duration-300 hover:text-white hover:scale-110"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

          </div>


        </div>


      </div>




      {/* Copyright */}

      <div className="border-t border-gray-700 py-5 text-center">

        <p>
          © {new Date().getFullYear()} Tech Store.
          All Rights Reserved.
        </p>

        <p className="text-sm mt-2">
          Designed and Developed with React + TypeScript
        </p>

      </div>


    </footer>
  );
};


export default Footer;