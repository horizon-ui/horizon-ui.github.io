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
  Flex,
  Link,
  Button,
  Icon,
  Grid,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import imageDark from "assets/img/pro/openSource/section4-dark.png";
import imageLight from "assets/img/pro/openSource/section4-light.png";
import { MdChevronRight } from "react-icons/md";

// Custom components
import InnerContent from "layouts/innerContent";

export default function GetStarted() {
  const image = useColorModeValue(imageLight, imageDark);
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  const borderColor = useColorModeValue("secondaryGray.100", "white");
  return (
    <Flex
      w='100%'
      direction={{ base: "column" }}
      pt={{ base: "100px", md: "120px", xl: "140px" }}
      pb={{ base: "20px", md: "0px", xl: "100px" }}
      overflow='hidden'
      bgSize='cover'
      position='relative'>
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }}>
        <Flex direction={{ base: "column-reverse", lg: "row" }} width='100%'>
          <Image
            me='110px'
            src={image}
            w={{ base: "90%", md: "100%", lg: "400px", xl: "565px" }}
            mt={{ base: "40px", md: "40px", lg: "0px" }}
          />
          <Flex direction='column' width='stretch'>
            <Box my='auto'>
              <Text
                fontWeight='700'
                letterSpacing='2px'
                bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
                bgClip='text'
                fontSize='sm'
                w='100%'
                mb='10px'>
                OPEN SOURCE ADMIN TEMPLATE
              </Text>
              <Text
                fontWeight='700'
                color={textColor}
                fontSize={{ base: "26px", md: "48px" }}
                lineHeight={{ base: "34px", md: "60px" }}
                mb='20px'
                maxW={{ base: "80%", md: "unset" }}>
                Dark & Light mode Admin Template
              </Text>
              <Text
                color={textColorSecondary}
                fontSize='lg'
                w={{ base: "90%", md: "100%" }}
                mb='30px'>
                Choose your favorite theme mode! Horizon UI is available in two
                main features, Dark & Light theme modes!
              </Text>
              <Flex align='center'>
                <Link
                  href='
                  https://github.com/horizon-ui/horizon-ui-chakra'>
                  <Button
                    py='20px'
                    px='16px'
                    fontSize='sm'
                    variant='brand'
                    borderRadius='12px'
                    me='20px'
                    w='160px'
                    h='54px'>
                    Get started
                    <Icon as={MdChevronRight} color='white' h='16px' w='16px' />
                  </Button>
                </Link>
                <Link href='https://www.figma.com/community/file/1098131983383434513/Horizon-UI---Trendiest-Open-Source-Admin-Template'>
                  <Button
                    variant='no-hover'
                    border='1px solid'
                    borderColor={borderColor}
                    color={textColor}
                    borderRadius='12px'
                    fontSize='sm'
                    me='30px'
                    w='160px'
                    h='54px'
                    bg='transparent'
                    my='auto'>
                    See Figma version
                  </Button>
                </Link>
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
        </Flex>
      </InnerContent>
    </Flex>
  );
}
