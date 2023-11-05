import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";

import { Navbar } from "Components";

import routes from "./routes";
import { renderRoute } from "./pieces";

const Navigator = () => (
  <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>{routes.public.map(renderRoute)}</Routes>
  </BrowserRouter>
);

export default Navigator;
