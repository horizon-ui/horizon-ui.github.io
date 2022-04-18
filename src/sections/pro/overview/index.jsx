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
            maxW={{ base: "100%", md: "100%", lg: "80%", xl: "54%" }}
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
              Boost your productivity with fully coded pages
            </Text>
            <Text color={textColorSecondary} fontSize='lg' w='100%'>
              Improve your development process with a set of fully coded pages!
              Trendy page categories like NFTs pages and many more are available
              to save your time!
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid
          columns={{ base: "1", md: "2", lg: "4" }}
          gap='20px'
          w={{ base: "72%", md: "100%" }}
          mb='20px'>
          <PageCard title='Main Dashboard' image={image} link='link' />
          <PageCard title='Smart Home' image={image1} link='link' />
          <PageCard title='Car Interface' image={image2} link='link' />
          <PageCard title='Profile Overview' image={image3} link='link' />
          <PageCard title='NFT Marketplace' image={image4} link='link' />
          <PageCard title='NFT Page' image={image5} link='link' />
          <PageCard title='NFT Collection' image={image6} link='link' />
          <PageCard title='NFT Profile' image={image7} link='link' />
        </SimpleGrid>
        <Box position='relative' pb='120px'>
          <Flex
            position='absolute'
            h='100px'
            w='100%'
            zIndex='3'
            justifyContent='center'
            bottom='200px'>
            <Link
              mx='auto'
              href='https://horizon-ui.com/chakra-pro/?ref=horizon-website'>
              <Button
                w='141px'
                h='54px'
                fontSize='sm'
                mt='auto'
                borderRadius='12px'
                variant='darkBrand'>
                See all Pages
              </Button>
            </Link>
          </Flex>
          <Flex
            position='absolute'
            transform={{
              base: "translate(-222px, -120px)",
              md: "translate(-1500px, -110px)",
            }}
            h='100%'
            w='300vw'
            zIndex='1'
            bg={gradient}></Flex>
          <SimpleGrid
            columns={{ base: "1", md: "2", lg: "4" }}
            gap='20px'
            w='100%'>
            <PageCard title='Kanban Page' image={image8} link='link' />
            <PageCard title='Billing Page' image={image9} link='link' />
            <PageCard title='Application' image={image10} link='link' />
            <PageCard title='Course Page' image={image11} link='link' />
          </SimpleGrid>
        </Box>
      </InnerContent>
    </Flex>
  );
}
