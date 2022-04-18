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
import image7 from "assets/img/pro/overview/image-7.png";
import image8 from "assets/img/pro/overview/image-8.png";
import image9 from "assets/img/pro/overview/image-9.png";
import image10 from "assets/img/pro/overview/image-10.png";
import image11 from "assets/img/pro/overview/image-11.png";

// Custom components
import InnerContent from "layouts/innerContent";
import PageCard from "./components/PageCard";
import { Link } from "react-router-dom";

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
            maxW={{ base: "100%", md: "100%", lg: "80%", xl: "64%" }}
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
          flexWrap='wrap'
          mb='20px'>
          <PageCard
            mb='20px'
            me='20px'
            title='Main Dashboard'
            image={image}
            link='link'
          />
          <PageCard
            mb='20px'
            me='20px'
            title='Smart Home'
            image={image1}
            link='link'
          />
          <PageCard
            mb='20px'
            me='20px'
            title='Car Interface'
            image={image2}
            link='link'
          />
          <PageCard
            mb='20px'
            title='Profile Overview'
            image={image3}
            link='link'
          />
          <PageCard
            me='20px'
            title='NFT Marketplace'
            image={image4}
            link='link'
          />
          <PageCard me='20px' title='NFT Page' image={image5} link='link' />
          <PageCard title='NFT Collection' image={image6} link='link' />
        </Flex>
        <Link>
          <Button
            h='35px'
            borderRadius='12px'
            variant='darkBrand'
            fontSoze='sm'>
            Unlock more pages with Horizon PRO
          </Button>
        </Link>
      </InnerContent>
    </Flex>
  );
}
