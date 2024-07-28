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
    <div className="fixed top-0 z-10 w-full shadow-sm">
      {/* Navbar for Mobile */}
      <div className="lg:hidden">
        <header>
          <nav className="flex items-center border-b border-[#e6e6e6] justify-around sm:justify-between sm:px-5 w-full h-14 bg-white">
            <div className="flex items-center justify-center gap-5">
              <div onClick={toggleMenu}>
                {/* Ternary Operator-->Condition? True: False */}
                {menuBar ? ( //condition
                  <X size={18} strokeWidth={1.5} /> //true-->clicked
                ) : (
                  <Menu size={18} strokeWidth={1.5} /> //false-->not clicked
                )}
              </div>
              <div>
                <Search size={18} strokeWidth={1.5} />
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
              <div>
                <ShoppingCart size={18} strokeWidth={1.5} />
              </div>
              <div>
                <CircleUserRound size={18} strokeWidth={1.5} />
              </div>
            </div>
          </nav>

          {menuBar && (
            <div>
              <ul className="flex flex-col items-start justify-center w-full gap-4 p-5 text-lg text-black bg-gray-100">
                <li>
                  <Link to="men">Men</Link>
                </li>
                <li>
                  <Link to="women">Women</Link>
                </li>
                <li>
                  <Link to="/">Beauty</Link>
                </li>
                <li>
                  <Link to="home-kitchen">Home & Kitchen</Link>
                </li>
                <li>
                  <Link to="groceries">Groceries</Link>
                </li>
                <li>
                  <Link to="technology">Technology</Link>
                </li>
              </ul>
            </div>
          )}
        </header>
      </div>

      {/* Navbar for Desktop */}
      <div className="hidden lg:block">
        <header className="border-b-2 border-gray-200 bg-secondary lg:block">
          <nav>
            <div className="px-20">
              <ul className="flex items-center justify-between w-full h-14">
                {/* Section One */}
                <div>
                  <Link to="/" className="text-2xl font-semibold">
                    The Shopping Booth
                  </Link>
                </div>
                {/* Section Two */}
                <div className="flex items-center justify-start gap-10">
                  <li>
                    <Link to="men">Men</Link>
                  </li>
                  <li>
                    <Link to="women">Women</Link>
                  </li>
                  <li>
                    <Link to="/">Beauty</Link>
                  </li>
                  <li>
                    <Link to="home-kitchen">Home & Kitchen</Link>
                  </li>
                  <li>
                    <Link to="groceries">Groceries</Link>
                  </li>
                  <li>
                    <Link to="technology">Technology</Link>
                  </li>
                </div>
                {/* Section Three */}
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <Search size={22} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <Link to="/cart">
                        <ShoppingCart size={22} strokeWidth={1.5} />
                      </Link>
                    </div>
                    <div>{totalProducts.length}</div>
                  </div>
                  <div>
                    <Link to="/sign-up">
                      <UserRound
                        className="cursor-pointer"
                        size={22}
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
