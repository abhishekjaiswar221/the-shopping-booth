import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  UserRound,
  Search,
  X,
  Menu,
  CircleUserRound,
} from "lucide-react";
import { useSelector } from "react-redux";

const HeaderNavigation = () => {
  const totalProducts = useSelector((state) => state.cart);
  const [menuBar, setMenuBar] = useState(false);

  const toggleMenu = () => {
    setMenuBar(!menuBar); // Toggle the value of menuBar[State]-->If true then ~true-->false if false then ~false-->true
  };

  return (
    <div className="fixed top-0 z-10 w-full shadow-md">
      {/* Navbar for Mobile */}
      <div className="lg:hidden">
        <header>
          <nav className="flex items-center bg-white border-b border-[#e6e6e6] justify-between w-full h-14 lg:h-16  px-5 md:px-6">
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
                {/* <img
                  className="h-[23px]"
                  src={microsoftLogo}
                  alt="Microsoft Logo"
                /> */}
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
      </div>

      {/* Navbar for Desktop */}
      <div className="hidden lg:block">
        <header className="bg-white border-b border-[#e6e6e6] lg:block">
          <nav>
            <div className="px-5 xl:px-20">
              <ul className="flex items-center justify-between w-full h-14 lg:h-16">
                {/* Section One */}
                <div>
                  <Link to="/" className="text-2xl font-semibold">
                    The Shopping Booth
                  </Link>
                </div>
                {/* Section Two */}
                <div className="flex items-center justify-start gap-10">
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
                </div>
                {/* Section Three */}
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <Search size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <Link to="/cart">
                        <ShoppingCart size={24} strokeWidth={1.5} />
                      </Link>
                    </div>
                    <div>{totalProducts.length}</div>
                  </div>
                  <div>
                    <Link to="/sign-up">
                      <UserRound
                        className="cursor-pointer"
                        size={24}
                        strokeWidth={1.5}
                      />
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default HeaderNavigation;
