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
import { Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { HSeparator } from "components/separator/Separator";
// Custom components
import InnerContent from "layouts/innerContent";
import React from "react";
import Testimonial from "sections/free/testimonials/components/Testimonial";

export default function Testimonials() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  const separator = useColorModeValue("transparent", "whiteAlpha.200");
  return (
    <Flex
      bgSize='cover'
      w='100%'
      direction={{ base: "column" }}
      pt={{ base: "130px", md: "80px", xl: "140px" }}
      overflow='hidden'
      position='relative'>
      <InnerContent>
        <Flex direction='column' width='stretch'>
          <Flex
            direction='column'
            mx='auto'
            mb='40px'
            maxW={{ base: "62%" }}
            textAlign='center'>
            <Text
              fontWeight='700'
              letterSpacing='2px'
              bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
              bgClip='text'
              fontSize='lg'
              w='100%'
              mb='10px'>
              WHAT PEOPLE SAY
            </Text>
            <Text color={textColor} fontWeight='700' fontSize='48px'>
              Trusted by 18,000+ developers
            </Text>
            <Text color={textColorSecondary} fontSize='lg' w='100%'>
              Developers, designers, startups and many Fortune 500 companies
              from all around the world use and love Simmmple's products.
              Horizon UI is one of them!
            </Text>
          </Flex>
        </Flex>
        <SimpleGrid columns={{ base: "1", xl: "2" }} gap='20px'>
          <SimpleGrid columns='1' gap='20px'>
            <Testimonial
              avatar={"AA"}
              link='https://creative-tim.com'
              title='The most comprehensive all-in-one dashboard!'
              name='Alexandru Paduraru'
              desc='"One of the most comprehensive all-in-one dashboard tools. From account to stats and messages, you have all the necessary examples to start your project. I really love the NFTs pages too!”'
              job='Co-Founder at '
              company='Creative Tim'
            />
            <Testimonial
              avatar={"AA"}
              link='https://creative-tim.com'
              title='The most comprehensive all-in-one dashboard!'
              name='Alexandru Paduraru'
              desc='"One of the most comprehensive all-in-one dashboard tools. From account to stats and messages, you have all the necessary examples to start your project. I really love the NFTs pages too!”'
              job='Co-Founder at '
              company='Creative Tim'
            />
            <Testimonial
              avatar={"AA"}
              link='https://creative-tim.com'
              title='The most comprehensive all-in-one dashboard!'
              name='Alexandru Paduraru'
              desc='"One of the most comprehensive all-in-one dashboard tools. From account to stats and messages, you have all the necessary examples to start your project. I really love the NFTs pages too!”'
              job='Co-Founder at '
              company='Creative Tim'
            />
          </SimpleGrid>
          <SimpleGrid columns='1' gap='20px'>
            <Testimonial
              avatar={"AA"}
              link='https://creative-tim.com'
              title='The most comprehensive all-in-one dashboard!'
              name='Alexandru Paduraru'
              desc='"One of the most comprehensive all-in-one dashboard tools. From account to stats and messages, you have all the necessary examples to start your project. I really love the NFTs pages too!”'
              job='Co-Founder at '
              company='Creative Tim'
            />
            <Testimonial
              avatar={"AA"}
              link='https://creative-tim.com'
              title='The most comprehensive all-in-one dashboard!'
              name='Alexandru Paduraru'
              desc='"One of the most comprehensive all-in-one dashboard tools. From account to stats and messages, you have all the necessary examples to start your project. I really love the NFTs pages too!”'
              job='Co-Founder at '
              company='Creative Tim'
            />
            <Testimonial
              avatar={"AA"}
              link='https://creative-tim.com'
              title='The most comprehensive all-in-one dashboard!'
              name='Alexandru Paduraru'
              desc='"One of the most comprehensive all-in-one dashboard tools. From account to stats and messages, you have all the necessary examples to start your project. I really love the NFTs pages too!”'
              job='Co-Founder at '
              company='Creative Tim'
            />
          </SimpleGrid>
        </SimpleGrid>
        <HSeparator mt='140px' h='2px' bg={separator} />
      </InnerContent>
    </Flex>
  );
}
