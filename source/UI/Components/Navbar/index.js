import React from "react";

import routes from "Navigator/routes";

import { renderNavLink } from "./pieces";

const Navbar = () => (
  <div className="flex w-3/12 justify-between">
    {routes.public.map(renderNavLink)}
  </div>
);

export default Navbar;
