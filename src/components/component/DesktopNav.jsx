import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search, ShoppingCart, UserRound } from "lucide-react";

const DesktopNav = () => {
  const totalProducts = useSelector((state) => state.cart);
  return (
    <header className="bg-white shadow-sm lg:block">
      <nav>
        <div className="px-5 xl:px-20">
          <ul className="flex items-center justify-between w-full h-14 lg:h-16">
            {/* Section One */}
            <div>
              <Link to="/" className="text-2xl font-semibold">
                {/* The Shopping Booth */}
                <img className="w-full h-16" src="/logo/logo.png" alt="Logo" />
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
  );
};

export default DesktopNav;
