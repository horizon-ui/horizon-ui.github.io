/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
// Chakra imports
import { Flex } from "@chakra-ui/react";
// Custom components
import Hero from "sections/free/hero";
import Upgrade from "sections/free/upgrade";
import GetStarted from "sections/free/started";
import OpenSource from "sections/free/openSource";
import Overview from "sections/free/overview";
export default function Default() {
  return (
    <Flex direction={{ base: "column" }}>
      <Hero />
      <Overview />
      <GetStarted />
      <OpenSource />
      <Upgrade />
    </Flex>
  );
}
