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
  Box,
  Button,
  Icon,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import dashboardDark from "assets/img/free/upgrade/section2-dashboard-dark.png";
// Assets
import dashboardLight from "assets/img/free/upgrade/section2-dashboard-light.png";
import { MdChevronRight } from "react-icons/md";

// Custom components
import InnerContent from "layouts/innerContent";

export default function Fast() {
  const dashboard = useColorModeValue(dashboardLight, dashboardDark);
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  const borderColor = useColorModeValue("secondaryGray.100", "white");
  return (
    <Flex
      w='100%'
      maxW='100%'
      direction={{ base: "column" }}
      pt={{ base: "80px", md: "120px", xl: "140px" }}
      overflow='hidden'
      bgSize='cover'
      position='relative'>
      <InnerContent>
        <Flex
          maxW='100%'
          direction='column'
          width='stretch'
          px={{ base: "20px", md: "40px", xl: "0px" }}>
          <Flex
            direction='column'
            mx='auto'
            mb='40px'
            maxW={{ base: "100%", lg: "70%", "2xl": "85%" }}
            textAlign='center'>
            <Text
              fontWeight='700'
              letterSpacing='2px'
              bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
              bgClip='text'
              fontSize='sm'
              w='100%'
              mb='10px'>
              UPGRADE TO HORIZON UI PRO
            </Text>
            <Text
              color={textColor}
              fontWeight='800'
              fontSize={{ base: "28px", md: "48px" }}
              mb={{ base: "14px", lg: "30px" }}>
              Improve your development process and start doing more with Horizon
              UI PRO
            </Text>
            <Text
              mb='30px'
              color={textColorSecondary}
              alignSelf='center'
              fontSize='lg'
              w='80%'>
              Save hundreds of hours trying to create and develop a dashboard
              from scratch. The fastest, most responsive & trendiest admin
              template is here. Seriously.
            </Text>{" "}
            <Flex align='center' justify='center' mb='30px'>
              <Flex me={{ base: "20px", md: "50px" }} direction='column'>
                <Text
                  color={textColor}
                  fontWeight='800'
                  mb='10px'
                  fontSize={{ base: "30px", md: "38px" }}
                  lineHeight='100%'>
                  400+
                </Text>
                <Text
                  color={textColorSecondary}
                  fontWeight='700'
                  fontSize={{ base: "xs", md: "sm" }}
                  letterSpacing='2px'>
                  COMPONENTS
                </Text>
              </Flex>
              <Flex me='50px' direction='column'>
                <Text
                  color={textColor}
                  fontWeight='800'
                  mb='10px'
                  fontSize={{ base: "30px", md: "38px" }}
                  lineHeight='100%'>
                  40+
                </Text>
                <Text
                  color={textColorSecondary}
                  fontWeight='700'
                  fontSize={{ base: "xs", md: "sm" }}
                  letterSpacing='2px'>
                  EXAMPLES
                </Text>
              </Flex>
              <Flex direction='column'>
                <Text
                  color={textColor}
                  fontWeight='800'
                  mb='10px'
                  fontSize={{ base: "30px", md: "38px" }}
                  lineHeight='100%'>
                  10+
                </Text>
                <Text
                  color={textColorSecondary}
                  fontWeight='700'
                  fontSize={{ base: "xs", md: "sm" }}
                  letterSpacing='2px'>
                  CATEGORIES
                </Text>
              </Flex>
            </Flex>
            <Flex mx='auto' align='center' justifyItems='center'>
              <Link href='https://horizon-ui.com/pro'>
                <Button
                  py='20px'
                  px='16px'
                  fontSize='sm'
                  variant='brand'
                  borderRadius='12px'
                  me='20px'
                  w='160px'
                  h='54px'>
                  Upgrade to PRO
                  <Icon as={MdChevronRight} color='white' h='16px' w='16px' />
                </Button>
              </Link>
              <Link href='https://horizon-ui.com/chakra-pro/'>
                <Button
                  variant='no-hover'
                  border='1px solid'
                  borderColor={borderColor}
                  color={textColor}
                  borderRadius='12px'
                  fontSize='sm'
                  w='160px'
                  h='54px'
                  bg='transparent'
                  my='auto'>
                  See live preview
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Box mt='auto'>
            <Image src={dashboard} maxH='max-content' />
          </Box>
        </Flex>
      </InnerContent>
    </Flex>
  );
}
