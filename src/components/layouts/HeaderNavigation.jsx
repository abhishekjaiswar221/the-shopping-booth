import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, CircleUserRound } from "lucide-react";
import { useSelector } from "react-redux";

const HeaderNavigation = () => {
  const totalProducts = useSelector((state) => state.cart);
  return (
    <div>
      <header className="hidden bg-gray-100 border-b-2 border-gray-200 lg:block">
        <nav>
          <div className="px-20">
            <ul className="flex items-center justify-between w-full h-14">
              <div>
                <h1 className="text-2xl font-semibold">The Shopping Booth</h1>
              </div>
              <div className="flex items-center justify-start gap-10">
                {/* <li>
                  <div>
                    <Link to="/">
                      <Home size={22} strokeWidth={1.5} />
                    </Link>
                  </div>
                </li> */}
                <li>Beauty</li>
                {/* <li>Fragrances</li> */}
                <li>Home Decor</li>
                {/* <li>Furniture</li> */}
                <li>Tech</li>
                {/* <li>Tech Accessories</li> */}
                <li>Home & Living</li>
                {/* <li>Groceries</li> */}
                {/* <li>Kitchen Accessories</li> */}
                <li>Life Style</li>
                <li>Mens</li>
                <li>Women</li>
                <li className="flex items-center justify-center gap-2">
                  <div>
                    <Link to="/cart">
                      <ShoppingCart size={26} strokeWidth={1.3} />
                    </Link>
                  </div>
                  <div>{totalProducts.length}</div>
                </li>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div>
                  <Button
                    variant="outline"
                    className="border-[1.5px] text-[#18181b] hover:text-[#18181b]  border-[#18181b]"
                    asChild
                  >
                    <Link to="sign-in">Sign In</Link>
                  </Button>
                </div>
                <div>
                  <Link to="sign-up">
                    <CircleUserRound
                      className="cursor-pointer"
                      size={26}
                      strokeWidth={1.3}
                    />
                  </Link>
                  {/* <Button asChild>
                    <Link to="sign-up">Sign Up</Link>
                  </Button> */}
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </header>

      <header className="lg:hidden">
        <nav>
          <div>
            <ul className="flex flex-col items-start justify-center w-full gap-4 p-5 text-lg text-black bg-gray-400">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Beauty</li>
              {/* <li>Fragrances</li> */}
              <li>Home Decor</li>
              {/* <li>Furniture</li> */}
              <li>Tech</li>
              {/* <li>Tech Accessories</li> */}
              <li>Home & Living</li>
              {/* <li>Groceries</li> */}
              {/* <li>Kitchen Accessories</li> */}
              <li>Life Style</li>
              <li>Mens</li>
              <li>Women</li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/sign-in">Sign In</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderNavigation;
