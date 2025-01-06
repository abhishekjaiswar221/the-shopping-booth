import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart, Search, X, Menu, CircleUserRound } from "lucide-react";

const MobileNav = () => {
  const totalProducts = useSelector((state) => state.cart);
  const [menuBar, setMenuBar] = useState(false);

  const toggleMenu = () => {
    setMenuBar(!menuBar); // Toggle the value of menuBar[State]-->If true then ~true-->false if false then ~false-->true
  };
  return (
    <header className="absolute w-full border-b border-gray-200 ">
      <nav className="flex items-center justify-between w-full px-5 bg-white shadow h-14 lg:h-16 md:px-6">
        <div className="flex items-center justify-center gap-5">
          <div onClick={toggleMenu}>
            {/* Ternary Operator-->Condition? True: False */}
            {menuBar ? ( //condition
              <X size={20} strokeWidth={1.5} /> //true-->clicked
            ) : (
              <Menu size={20} strokeWidth={1.5} /> //false-->not clicked
            )}
          </div>
          <div>
            <Search size={20} strokeWidth={1.5} />
          </div>
        </div>
        <div>
          <picture>
            <img className="h-14" src={"/logo/logo.png"} alt="Logo" />
          </picture>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div className="gap-2 md:flex md:items-center md:justify-center">
            <div>
              <Link to="/cart">
                <ShoppingCart size={22} strokeWidth={1.5} />
              </Link>
            </div>
            <div className="hidden md:block">{totalProducts.length}</div>
          </div>
          <div>
            <CircleUserRound size={22} strokeWidth={1.5} />
          </div>
        </div>
      </nav>

      {menuBar && (
        <div>
          <ul className="flex flex-col items-start justify-center w-full gap-4 p-5 text-lg text-black bg-white">
            <li>
              <Link to="/men">Men</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/beauty">Beauty</Link>
            </li>
            <li>
              <Link to="/home-kitchen">Home & Kitchen</Link>
            </li>
            <li>
              <Link to="/groceries">Groceries</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default MobileNav;
