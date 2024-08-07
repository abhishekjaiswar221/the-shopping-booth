import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import AppLayout from "./components/layouts/AppLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PageNotFound from "./components/component/PageNotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
