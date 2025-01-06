import React from "react";
import store from "@/store/store";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/toaster";
import { Outlet, useLocation } from "react-router-dom";
import HeaderNavigation from "../navigation/HeaderNavigation";
import FooterNavigation from "../navigation/FooterNavigation";

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
