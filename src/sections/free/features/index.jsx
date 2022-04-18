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

// Chakra imports
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import bgDark from "assets/img/pro/features/bgDark.png";
import box1 from "assets/img/pro/features/section3-box1.png";
import box2 from "assets/img/pro/features/section3-box2.png";
import InnerContent from "layouts/innerContent";
import React from "react";
import BigCard from "sections/free/features/components/BigCard";
// Custom components
import SmallCard from "sections/free/features/components/SmallCard";

export default function Features() {
  // Chakra Color Mode
  const bg = useColorModeValue("#F7FAFC", `url(${bgDark})`);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  return (
    <Flex
      bg={bg}
      bgSize='cover'
      w='100%'
      direction={{ base: "column", md: "row" }}
      pt={{ base: "80px", md: "80px", xl: "140px" }}
      pb={{ base: "20px", md: "0px", xl: "120px" }}
      overflow='hidden'
      position='relative'>
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }}>
        <Flex direction='column' width='stretch'>
          <Box>
            <Text
              fontWeight='700'
              letterSpacing='2px'
              bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
              bgClip='text'
              fontSize='sm'
              w='100%'
              mb='10px'>
              MAIN FEATURES
            </Text>
            <Flex
              direction={{ base: "column", xl: "row" }}
              mx='auto'
              mb={{ base: "70px", xl: "40px" }}
              w='100%'>
              <Text
                color={textColor}
                fontWeight='700'
                fontSize={{ base: "26px", md: "38px", xl: "38px" }}
                lineHeight={{ base: "34px", md: "46px", xl: "46px" }}
                mb={{ base: "10px", xl: "30px" }}
                maxW='520px'>
                The admin template that you always searched for
              </Text>
              <Text
                ms={{ base: "0", md: "0", xl: "auto" }}
                color={textColorSecondary}
                fontSize='lg'
                mt='10px'
                maxW='513px'
                lineHeight='180%'>
                Horizon UI is built with over 400+ frontend individual elements,
                like buttons, inputs, navbars, nav tabs, cards, or alerts,
                giving you the freedom of choosing and combining.
              </Text>
            </Flex>
          </Box>
        </Flex>
        <SimpleGrid columns={{ base: "1", lg: "2" }} gap='20px'>
          <BigCard
            title='Dark & Light themes'
            desc='Choose your favorite theme mode! Horizon UI is available in two main features, Dark & Light theme modes!'
            image={
              <Image
                src={box1}
                position='absolute'
                bottom='0px'
                left='50%'
                transform='translate(-50%, 0px)'
              />
            }
          />
          <BigCard
            title='40+ Ready to use Pages'
            desc='With Horizon, you have access to many examples pages like Sign In, Car Interface, Smart House, NFTs pages, and so on...'
            image={
              <Image
                src={box2}
                position='absolute'
                bottom='0px'
                left='50%'
                transform='translate(-50%, 0px)'
              />
            }
          />
          <SmallCard
            title='Developer Experience'
            desc='Built to accelerate your designing & coding experience and workflow.'
            link='https://horizon-ui.com/chakra-pro/?ref=pro-website'
            linkText='See live preview'
          />
          <SmallCard
            title='Fully Documentation'
            desc='Each element is well presented in a fully detailed and complex documentation!'
            link='https://horizon-ui.com/documentation/docs/introduction?ref=pro-website'
            linkText='See full documentation'
          />
        </SimpleGrid>
      </InnerContent>
    </Flex>
  );
}
