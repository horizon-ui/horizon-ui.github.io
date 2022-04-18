import React from "react";

import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

// Admin Imports
import Pro from "views/pro";
import Free from "views/free";

const routes = [
  // --- Dashboards ---
  {
    name: "Horizon UI Pro",
    layout: "/admin",
    path: "/pro",
    component: Pro,
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  },
  {
    name: "Horizon UI",
    layout: "/admin",
    path: "/free",
    component: Free,
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  },
];

export default routes;
