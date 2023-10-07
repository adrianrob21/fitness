import React from "react";

import { Counter, Photos } from "Pages";

export default {
  private: [],
  public: [
    {
      path: "/",
      element: <Counter />,
      label: "Counter",
    },
    {
      path: "/Photos",
      element: <Photos />,
      label: "Photos",
    },
  ],
};
