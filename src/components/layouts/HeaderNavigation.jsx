import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Home, ShoppingCart } from "lucide-react";

const HeaderNavigation = () => {
  return (
    <div>
      <header className="bg-gray-100 border-b-2 border-gray-200">
        <nav className="max-w-7xl">
          <div className="px-20">
            <ul className="flex items-center justify-between w-full h-14">
              <div>
                <h1 className="text-2xl font-semibold">The Shopping Booth</h1>
              </div>
              <div className="flex items-center justify-start gap-10">
                <li className="flex items-center justify-center gap-2">
                  <div>
                    <Home size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <Link className="text-gray-600" to="/">
                      Home
                    </Link>
                  </div>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <div>
                    <ShoppingCart size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <Link className="text-gray-600" to="/cart">
                      Cart
                    </Link>
                  </div>
                  <div>0</div>
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
                  <Button asChild>
                    <Link to="sign-up">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderNavigation;
