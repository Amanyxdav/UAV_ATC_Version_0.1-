import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../../slices/darkModeSlice";
import LogoImage from "../../assets/LogoImage.png";

const toggleDarkModeClass = (enable) => {
  const rootElement = document.documentElement;
  if (rootElement) {
    if (enable) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  }
};

const Navbar = ({ handleButtonClick }) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    toggleDarkModeClass(darkMode);
    return () => {
      toggleDarkModeClass(false); // Cleanup function
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkModeState = !darkMode;
    dispatch(setDarkMode(newDarkModeState));
    localStorage.setItem("darkMode", newDarkModeState);
  };

  return (
    <div className="flex items-center py-4 lg:px-10 md:px-6 sm:px-4 px-2">
      <div className="px-4 flex items-center w-full h-full justify-between">
        <div className="flex items-center">
          <img src={LogoImage} alt="drone" className="w-40" />
          <Link to="/" className="text-3xl font-bold text-white">
            AEROSCAN
          </Link>
        </div>
        {
          //   <ul className="hidden md:flex">
          //   <li className="text-white p-4 cursor-pointer">
          //     <Link to="/">Home</Link>
          //   </li>
          //   <li className="text-white p-4 cursor-pointer">
          //     <Link to="/about">About</Link>
          //   </li>
          //   <li className="text-white p-4 cursor-pointer">
          //     <Link to="/services">Services</Link>
          //   </li>
          //   <li className="text-white p-4 cursor-pointer">
          //     <Link to="/contact">Contact</Link>
          //   </li>
          // </ul>
        }
        <div
          onClick={handleButtonClick}
          className="text-black cursor-pointer border px-2 py-1 rounded-sm bg-red-50"
        >
          Live Data
        </div>
      </div>

      <div
        className="border-x border-gray-500 px-2 cursor-pointer"
        onClick={toggleDarkMode}
      >
        {!darkMode ? (
          <FaMoon
            // onClick={toggleDarkMode}
            className="text-black-400 hover:text-black-500 transition duration-300 cursor-pointer"
          />
        ) : (
          <FiSun
            // onClick={toggleDarkMode}
            className="dark:text-white  hover:text-black-500 transition duration-300 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
