import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

// Admin Imports
import Free from "views/free";

const routes = [
  // --- Dashboards ---
  {
    name: "Horizon UI",
    layout: "/ ",
    path: "/",
    component: Free,
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  },
];

export default routes;
