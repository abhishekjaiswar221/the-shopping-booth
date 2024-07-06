import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import FooterNavigation from "./FooterNavigation";

const AppLayout = () => {
  return (
    <>
      {/* Your header content */}
      <HeaderNavigation />
      <main>
        {/* Child routes will render here */}
        <Outlet />
      </main>
      {/* Your footer content */}
      <FooterNavigation />
    </>
  );
};

export default AppLayout;
