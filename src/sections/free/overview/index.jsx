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
  Flex,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets

import image from "assets/img/pro/overview/image.png";
import image1 from "assets/img/pro/overview/image-1.png";
import image2 from "assets/img/pro/overview/image-2.png";
import image3 from "assets/img/pro/overview/image-3.png";
import image4 from "assets/img/pro/overview/image-4.png";
import image5 from "assets/img/pro/overview/image-5.png";
import image6 from "assets/img/pro/overview/image-6.png";

// Custom components
import InnerContent from "layouts/innerContent";
import PageCard from "./components/PageCard";

export default function Overview() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  const gradient = useColorModeValue(
    "linear-gradient(360deg, #F7FAFC 17.92%, rgba(247, 250, 252, 0) 100%)",
    "linear-gradient(360deg, #1C1F39 17.92%, rgba(28, 31, 57, 0) 100%)"
  );
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
            maxW={{ base: "100%", md: "100%", lg: "80%", xl: "70%" }}
            textAlign='center'>
            <Text
              fontWeight='700'
              letterSpacing='2px'
              bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
              bgClip='text'
              fontSize='sm'
              w='100%'
              mb='10px'>
              PAGES AND COMPONENTS OVERVIEW
            </Text>
            <Text
              color={textColor}
              fontWeight='700'
              fontSize={{ base: "28px", md: "48px" }}
              mb='30px'>
              Chakra UI admin template pages
            </Text>
            <Text color={textColorSecondary} fontSize='lg' w='100%'>
              Improve your development process with a set of fully coded pages!
              Trendy page categories like NFTs page and many more are available
              to save your time!{" "}
              <Text color={textColor} as='span' fontWeight='700'>
                Click on a image to see live preview!
              </Text>
            </Text>
          </Flex>
        </Flex>
        <Flex
          mb='90px'
          justify='center'
          w={{ base: "72%", md: "100%" }}
          flexWrap='wrap'>
          <PageCard
            mb='20px'
            me='20px'
            title='Main Dashboard'
            image={image}
            link='https://horizon-ui.com/horizon-ui-chakra/#/admin/default'
          />
          <PageCard
            mb='20px'
            me='20px'
            title='NFT Marketplace'
            image={image1}
            link='https://horizon-ui.com/horizon-ui-chakra/#/admin/nft-marketplace'
          />
          <PageCard
            mb='20px'
            me='20px'
            title='Tables Page'
            image={image2}
            link='https://horizon-ui.com/horizon-ui-chakra/#/admin/data-tables'
          />
          <PageCard
            mb='20px'
            title='Kanban Page'
            image={image3}
            link='https://horizon-ui.com/horizon-ui-chakra/#/rtl/rtl-default'
          />
          <PageCard
            me='20px'
            title='Profile Overview'
            image={image4}
            link='https://horizon-ui.com/horizon-ui-chakra/#/admin/profile'
          />
          <PageCard
            me='20px'
            title='Sign In Page'
            image={image5}
            link='https://horizon-ui.com/horizon-ui-chakra/#/auth/sign-in'
          />
          <PageCard title='RTL Page' image={image6} link='link' />
        </Flex>
        <Link href='https://horizon-ui.com/pro/'>
          <Button
            h='50px'
            borderRadius='12px'
            variant='darkBrand'
            fontSize='sm'>
            Unlock more pages with Horizon PRO
          </Button>
        </Link>
      </InnerContent>
    </Flex>
  );
}
