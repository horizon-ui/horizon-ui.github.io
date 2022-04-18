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
import {
  Flex,
  Grid,
  Box,
  Button,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import heroBg from "assets/img/pro/hero/heroBg.png";
import {
  FigmaLogo,
  ChakraLogo,
  ReactLogo,
  TailwindLogo,
} from "components/icons/Icons";
import InnerContent from "layouts/innerContent";

export default function Default() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Flex
      w='100%'
      direction={{ base: "column", xl: "row" }}
      pt={{ base: "130px", md: "80px", xl: "80px" }}
      bgImage={heroBg}
      bgSize='cover'>
      <InnerContent>
        <Flex direction='column' width='stretch'>
          <Box maxW='60%'>
            <Text color={textColor} fontSize='46px' mb='30px'>
              Most trendiest, complex and innovative{" "}
              <Text as='span' fontWeight='700'>
                Admin Template for Chakra UI & React
              </Text>
            </Text>
            <Text color={textColor} fontSize='lg' w='70%' mb='30px'>
              Build your dream web app with Horizon UI PRO, the most trendiest &
              innovative admin dashboard for Chakra UI!
            </Text>
            <Flex align='center'>
              <Button
                py='20px'
                px='16px'
                fontSize='sm'
                variant='brand'
                borderRadius='12px'
                me='30px'
                w='160px'
                h='54px'>
                Get Horizon PRO
              </Button>
              <Icon
                as={ChakraLogo}
                color={textColor}
                w='24px'
                h='24px'
                me='25px'
              />
              <Icon
                as={ReactLogo}
                color={textColor}
                w='26px'
                h='24px'
                me='25px'
              />
              <Icon
                as={FigmaLogo}
                color={textColor}
                w='18px'
                h='25px'
                me='20px'
              />
              <Icon as={TailwindLogo} color={textColor} w='39px' h='23px' />
            </Flex>
          </Box>
          <Grid
            mb='20px'
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              "2xl": "720fr 350fr",
            }}
            gap='20px'
            display={{ base: "block", lg: "grid" }}>
            <Flex
              gridArea={{
                base: "1 / 1 / 2 / 3",
                "2xl": "1 / 1 / 2 / 2",
              }}></Flex>
            <Flex
              gridArea={{
                base: "2 / 1 / 3 / 3",
                "2xl": "1 / 2 / 2 / 3",
              }}></Flex>
          </Grid>
        </Flex>
      </InnerContent>
    </Flex>
  );
}
