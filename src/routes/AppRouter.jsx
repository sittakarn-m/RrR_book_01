import React from "react";
import { Outlet, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import About from "../pages/About";
import Categories from "../pages/store/Categories";
import ProductDetail from "../pages/store/ProductDetail";
import Cart from "../pages/store/Cart";
import Checkout from "../pages/store/Checkout";
import Overview from "../pages/user/Overview";
import AccountInfo from "../pages/user/AccountInfo";
import ResetPassword from "../pages/user/ResetPassword";
import RentHistory from "../pages/user/RentHistory";
import ReturnBook from "../pages/user/ReturnBook";
import Dashboard from "../pages/admin/Dashboard";
import ManageBooks from "../pages/admin/ManageBooks";
import ManageUsers from "../pages/admin/ManageUsers";
import RentRequests from "../pages/admin/RentRequests";
import Store from "../pages/store/Store";
import ManageCategory from "../pages/admin/ManageCategory";
import AdminLayout from "../layouts/AdminLayout";

function AppRouter() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="book/:id" element={<ProductDetail />} />
        </Route>

        {/* Private [STORE] */}
        <Route path="store" element={<Layout />}>
          <Route index element={<Store />} />
          <Route path="categories/all" element={<Categories />} />
          <Route path="categories/:name" element={<Categories />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* Private [USER] */}
        <Route path="me" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="account-info" element={<AccountInfo />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="rent-history" element={<RentHistory />} />
          <Route path="return-book" element={<ReturnBook />} />
        </Route>

        {/* Private [ADMIN] */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-books" element={<ManageBooks />} />
          <Route path="manage-category" element={<ManageCategory />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="rent-requests" element={<RentRequests />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </>
  );
}

export default AppRouter;
