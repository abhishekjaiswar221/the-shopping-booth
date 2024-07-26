import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserRound, Search } from "lucide-react";
import { useSelector } from "react-redux";

const HeaderNavigation = () => {
  const totalProducts = useSelector((state) => state.cart);
  return (
    <div>
      <header className="hidden border-b-2 border-gray-200 bg-secondary lg:block">
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

      <header className="lg:hidden">
        <nav>
          <div>
            <ul className="flex flex-col items-start justify-center w-full gap-4 p-5 text-lg text-black bg-secondary">
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
        </nav>
      </header>
    </div>
  );
};

export default HeaderNavigation;
