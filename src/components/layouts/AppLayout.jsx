import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import FooterNavigation from "./FooterNavigation";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Toaster } from "@/components/ui/toaster";

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/sign-up", "/sign-in"].includes(location.pathname);
  return (
    <>
      <Provider store={store}>
        {/* Your header content */}
        {!hideHeaderFooter && <HeaderNavigation />}
        <main>
          {/* Child routes will render here */}
          <Outlet />
          <Toaster />
        </main>
        {/* Your footer content */}
        {!hideHeaderFooter && <FooterNavigation />}
      </Provider>
    </>
  );
};

export default AppLayout;
