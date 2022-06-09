import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import ContactsList from "./components/Admin/ContactsList/ContactsList";
import MainLayout from "./components/layout/MainLayout";
import ContactContextProvider from "./context/ContactContextProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Specialist from "./pages/Specialist";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* {/* <Route path="/" element={<Home />} /> */}
        <Route path="/specialist" element={<Specialist />} />
        <Route path="/" element={<ContactContextProvider />} />
        <Route path="/list" element={<ContactsList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
