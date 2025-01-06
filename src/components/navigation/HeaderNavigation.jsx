import React from "react";
import DesktopNav from "../component/DesktopNav";
import MobileNav from "../component/MobileNav";

const HeaderNavigation = () => {
  return (
    <div className="sticky top-0 z-10 w-full">
      {/* Navbar for Mobile */}
      <div className="lg:hidden">
        <MobileNav />
      </div>

      {/* Navbar for Desktop */}
      <div className="hidden lg:block">
        <DesktopNav />
      </div>
    </div>
  );
};

export default HeaderNavigation;
