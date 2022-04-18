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
import Hero from "sections/pro/hero";
import Fast from "sections/pro/fast";
import Features from "sections/pro/features";
import GetStarted from "sections/pro/started";
import Overview from "sections/pro/overview";
import Testimonials from "sections/pro/testimonials";
import Pricing from "sections/pro/pricing";
import FAQ from "sections/pro/faq";
export default function Default() {
  return (
    <Flex direction={{ base: "column" }}>
      <Hero />
      <Fast />
      <Features />
      <GetStarted />
      <Overview />
      <Testimonials />
      <Pricing />
      <FAQ />
    </Flex>
  );
}
