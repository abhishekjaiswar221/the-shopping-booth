import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import FooterNavigation from "./FooterNavigation";
import { Provider } from "react-redux";
import store from "@/store/store";
const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        {/* Your header content */}
        <HeaderNavigation />
        <main>
          {/* Child routes will render here */}
          <Outlet />
        </main>
        {/* Your footer content */}
        <FooterNavigation />
      </Provider>
    </>
  );
};

export default AppLayout;
