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
import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import dashboardDark from "assets/img/pro/fast/section2-dashboard-dark.png";
// Assets
import dashboardLight from "assets/img/pro/fast/section2-dashboard-light.png";
import mobileDark from "assets/img/pro/fast/section2-mobile-dark.png";
import mobileLight from "assets/img/pro/fast/section2-mobile-light.png";

// Custom components
import InnerContent from "layouts/innerContent";

export default function Fast() {
  const dashboard = useColorModeValue(dashboardLight, dashboardDark);
  const mobile = useColorModeValue(mobileLight, mobileDark);
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  return (
    <Flex
      w='100%'
      direction={{ base: "column" }}
      pt={{ base: "80px", md: "120px", xl: "140px" }}
      overflow='hidden'
      bgSize='cover'
      position='relative'>
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }}>
        <Flex direction='column' width='stretch'>
          <Flex
            direction='column'
            mx='auto'
            mb='40px'
            maxW={{ base: "100%", lg: "70%", "2xl": "54%" }}
            textAlign='center'>
            <Text
              fontWeight='700'
              letterSpacing='2px'
              bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
              bgClip='text'
              fontSize='sm'
              w='100%'
              mb='10px'>
              ADAPTIVE ADMIN DASHBOARD
            </Text>
            <Text
              color={textColor}
              fontWeight='700'
              fontSize={{ base: "28px", md: "48px" }}
              mb={{ base: "14px", lg: "30px" }}>
              Fast. Responsive. Trendy.
            </Text>
            <Text color={textColorSecondary} fontSize='lg' w='100%'>
              Save hundreds of hours trying to create and develop a dashboard
              from scratch. The fastest, most responsive & trendiest admin
              template is here. Seriously.
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Box mt='auto'>
            <Image src={dashboard} maxH='max-content' />
          </Box>
          <Image
            src={mobile}
            maxH='max-content'
            w={{ base: "34%", md: "30%", lg: "28%", xl: "unset" }}
            ms='-130px'
          />
        </Flex>
      </InnerContent>
    </Flex>
  );
}
