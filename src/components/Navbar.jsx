import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Dropdown from "./utils/Dropdown.jsx";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const navItems = [
    { label: "Refer & Earn", href: "#" },
    { label: "Resources", href: "https://blog.accredian.com/" },
    { label: "About us", href: "https://accredian.com/About" },
  ];
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0 space-x-5">
              {/* Logo */}
              <img className="w-15 h-10" src={Logo} alt="" />
              {/* Dropdown for larger screens */}
              <div className="hidden lg:block">
                <Dropdown />
              </div>
            </div>
            {/* Nav links */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a target="_blank" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="" className="py-2 px-3 border rounded-md">
                Login
              </a>
              <a href="" className="bg-primaryBlue py-2 px-3 rounded-md">
                Try for free
              </a>
            </div>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <Dropdown />
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6">
                <a href="" className="py-2 px-3 border rounded-md">
                  Login
                </a>
                <a href="" className="bg-primaryBlue py-2 px-3 rounded-md">
                  Try for free
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
