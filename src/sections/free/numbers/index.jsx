/*eslint-disable*/
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
  Icon,
  Avatar,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

// Assets
import GitHubButton from "react-github-btn";
import { IoLogoGithub } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FigmaLogo, ProductHuntLogo } from "components/icons/Icons";

// Custom components
import Card from "components/card/Card";
import avatar from "assets/img/free/numbers/Image-4.png";
import InnerContent from "layouts/innerContent";
import { HSeparator } from "components/separator/Separator";

export default function GetStarted() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  return (
    <Flex
      w='100%'
      direction={{ base: "column" }}
      pt={{ base: "100px", md: "120px", xl: "140px" }}
      overflow='hidden'
      bgSize='cover'
      position='relative'>
      <InnerContent px={{ base: "20px", md: "40px", xl: "0px" }}>
        <Flex
          pb={{ base: "70px", lg: "0px" }}
          direction={{ base: "column", lg: "row" }}
          width='100%'
          justify='space-between'>
          <Flex
            me={{ lg: "80px" }}
            mb={{ base: "40px", lg: "0px" }}
            direction='column'
            width='stretch'>
            <Box my='auto'>
              <Text
                fontWeight='800'
                letterSpacing='2px'
                bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
                bgClip='text'
                fontSize='sm'
                w='100%'
                mb='10px'>
                HORIZON UI IN NUMBERS
              </Text>
              <Text
                fontWeight='800'
                color={textColor}
                fontSize={{ base: "26px", md: "48px" }}
                lineHeight={{ base: "34px", md: "60px" }}
                mb='20px'
                maxW={{ base: "80%", md: "unset" }}>
                Expand your horizons with Horizon UI!
              </Text>
              <Text
                color={textColorSecondary}
                fontSize='md'
                w='100%'
                lineHeight='28px'
                mb='30px'>
                "A useful admin template that perfectly combines the UI with UX.
                The diversity of screens (NFT Page, Car Interface, Smart Home,
                etc.) helps the user reduce many workdays. For sure, you can
                broaden your web design horizons with Horizon!"
              </Text>
              <Flex alignItems='center'>
                <Avatar h='48px' w='48px' me='20px' src={avatar} />
                <Box>
                  <Text color={textColor} fontSize='md' fontWeight='800'>
                    Elisa Paduraru
                  </Text>
                  <Flex align='center'>
                    <Text
                      color={textColorSecondary}
                      fontSize='sm'
                      fontWeight='500'
                      me='5px'>
                      Chief Design Officer at
                    </Text>
                    <Link
                      href='https://creative-tim.com/?ref=horizon-ui.com'
                      color={brandColor}
                      fontWeight='700'
                      fontSize='sm'>
                      Creative Tim
                    </Link>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex ms='auto' direction='column' width='stretch'>
            <Box maxW='100%' my='auto'>
              <Card
                maxW={{ base: "100%", md: "unset" }}
                minW={{ base: "200px", lg: "500px", xl: "545px" }}
                p='30px'
                mb='20px'
                ms={{ base: "0px", xl: "30px" }}>
                <Flex align='center' flexWrap={{ base: "wrap", md: "unset" }}>
                  <Flex
                    mb={{ base: "20px", md: "unset" }}
                    me='20px'
                    bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
                    borderRadius='70px'
                    align='center'
                    justify='center'
                    w={{ base: "50px", md: "74px" }}
                    h={{ base: "50px", md: "74px" }}
                    minW={{ base: "50px", md: "74px" }}>
                    <Icon as={IoLogoGithub} h='32px' w='32px' color='white' />
                  </Flex>
                  <Box
                    me={{ base: "40px", md: "auto" }}
                    mb={{ base: "20px", md: "unset" }}>
                    <Text
                      fontWeight='800'
                      mb='10px'
                      color={textColor}
                      fontSize={{ base: "22px", md: "34px" }}
                      lineHeight={{ base: "100%", md: "100%" }}
                      maxW={{ base: "80%", md: "unset" }}>
                      490+
                    </Text>
                    <Text
                      fontWeight='700'
                      color={textColorSecondary}
                      fontSize={{ base: "sm", md: "sm" }}
                      lineHeight={{ base: "100%", md: "100%" }}
                      letterSpacing='2.48px'>
                      STARS ON GITHUB
                    </Text>
                  </Box>
                  <GitHubButton
                    w='200px'
                    size='large'
                    href='https://github.com/horizon-ui/horizon-ui-chakra'
                    data-icon='octicon-star'
                    data-show-count='true'
                    aria-label='Star horizon-ui/horizon-ui-chakra on GitHub'>
                    Star
                  </GitHubButton>
                </Flex>
              </Card>
              <Card
                maxW={{ base: "100%", md: "unset" }}
                minW={{ base: "200px", lg: "500px", xl: "545px" }}
                p='30px'
                mb='20px'
                me={{ base: "0px", xl: "30px" }}>
                <Flex align='center' flexWrap={{ base: "wrap", md: "unset" }}>
                  <Flex
                    me='20px'
                    bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
                    borderRadius='70px'
                    align='center'
                    justify='center'
                    w={{ base: "50px", md: "74px" }}
                    h={{ base: "50px", md: "74px" }}
                    minW={{ base: "50px", md: "74px" }}>
                    <Icon as={FigmaLogo} w='17px' h='26px' color='white' />
                  </Flex>
                  <Box me='auto'>
                    <Text
                      fontWeight='800'
                      mb='10px'
                      color={textColor}
                      fontSize={{ base: "22px", md: "34px" }}
                      lineHeight={{ base: "100%", md: "100%" }}
                      maxW={{ base: "80%", md: "unset" }}>
                      4,000+
                    </Text>
                    <Text
                      fontWeight='700'
                      color={textColorSecondary}
                      fontSize={{ base: "sm", md: "sm" }}
                      lineHeight={{ base: "100%", md: "100%" }}
                      letterSpacing='2.48px'>
                      FIGMA DUPLICATES
                    </Text>
                  </Box>
                  <Link
                    mt={{ base: "20px", md: "unset" }}
                    w='max-content'
                    color={brandColor}
                    fontWeight='700'
                    href='https://www.figma.com/community/file/1098131983383434513/Horizon-UI---Trendiest-Open-Source-Admin-Template'
                    fontSize='sm'
                    whiteSpace='nowrap'
                    textDecor='underline'>
                    See Horizon UI for Figma!
                  </Link>
                </Flex>
              </Card>
              <Card
                maxW={{ base: "100%", md: "unset" }}
                minW={{ base: "200px", lg: "500px", xl: "545px" }}
                p='30px'
                mb='20px'
                me={{ base: "0px", xl: "30px" }}>
                <Flex align='center' flexWrap={{ base: "wrap", md: "unset" }}>
                  <Flex
                    me='20px'
                    bg='linear-gradient(109.6deg, #FF9966 17.44%, #FF5E62 78.63%)'
                    borderRadius='70px'
                    align='center'
                    justify='center'
                    w={{ base: "50px", md: "74px" }}
                    h={{ base: "50px", md: "74px" }}
                    minW={{ base: "50px", md: "74px" }}>
                    <Icon as={FaDiscord} w='28px' h='22px' color='white' />
                  </Flex>
                  <Box me='auto'>
                    <Text
                      fontWeight='800'
                      mb='10px'
                      color={textColor}
                      fontSize={{ base: "22px", md: "34px" }}
                      lineHeight={{ base: "100%", md: "100%" }}
                      maxW={{ base: "80%", md: "unset" }}>
                      40+
                    </Text>
                    <Text
                      fontWeight='700'
                      color={textColorSecondary}
                      fontSize={{ base: "sm", md: "sm" }}
                      lineHeight={{ base: "100%", md: "100%" }}
                      letterSpacing='2.48px'>
                      DISCORD MEMBERS
                    </Text>
                  </Box>
                  <Link
                    mt={{ base: "20px", md: "unset" }}
                    w='max-content'
                    color={brandColor}
                    fontWeight='700'
                    href='https://discord.gg/f6tEKFBd4m'
                    fontSize='sm'
                    whiteSpace='nowrap'
                    textDecor='underline'>
                    Join #HorizonUI Community!
                  </Link>
                </Flex>
              </Card>
              <Card
                maxW={{ base: "100%", md: "unset" }}
                minW={{ base: "200px", lg: "500px", xl: "545px" }}
                p='30px'
                ms={{ base: "0px", xl: "30px" }}>
                <Flex align='center' flexWrap={{ base: "wrap", md: "unset" }}>
                  <Flex
                    me='20px'
                    bg='linear-gradient(111.8deg, #FFE259 16.38%, #FFA751 77.86%)'
                    borderRadius='70px'
                    align='center'
                    justify='center'
                    w={{ base: "50px", md: "74px" }}
                    h={{ base: "50px", md: "74px" }}
                    minW={{ base: "50px", md: "74px" }}>
                    <Icon
                      as={ProductHuntLogo}
                      w='18px'
                      h='21px'
                      color='white'
                    />
                  </Flex>
                  <Box me='auto'>
                    <Text
                      fontWeight='800'
                      mb='10px'
                      color={textColor}
                      fontSize={{ base: "22px", md: "34px" }}
                      lineHeight={{ base: "100%", md: "100%" }}
                      maxW={{ base: "80%", md: "unset" }}>
                      #3 🏆
                    </Text>
                    <Text
                      fontWeight='700'
                      color={textColorSecondary}
                      fontSize={{ base: "sm", md: "sm" }}
                      lineHeight={{ base: "100%", md: "100%" }}
                      letterSpacing='2.48px'
                      whiteSpace='nowrap'>
                      ON PRODUCT HUNT
                    </Text>
                  </Box>
                  <Box
                    mt={{ base: "20px", md: "unset" }}
                    transform={{
                      base: "scale(0.8) translate(-30px,0px)",
                      md: "scale(0.8) translate(30px,0px)",
                    }}>
                    <a
                      href='https://www.producthunt.com/posts/horizon-ui?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-horizon&#0045;ui'
                      target='_blank'>
                      <img
                        src='https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=342582&theme=light&period=daily'
                        alt='Horizon&#0032;UI - Trendiest&#0032;open&#0045;source&#0032;React&#0032;admin&#0032;template | Product Hunt'
                        style={{
                          width: "250px",
                          height: "54px",
                          pointerEvents: "none",
                        }}
                        width='250'
                        height='54'
                      />
                    </a>
                  </Box>
                </Flex>
              </Card>
            </Box>
          </Flex>
        </Flex>
      </InnerContent>
      <HSeparator
        w='100%'
        mt={{ base: "20px", md: "20px", xl: "140px" }}
        maxW='calc(100% - 40px)'
        w='1170px'
        mx={{ base: "20px", md: "auto" }}
      />
    </Flex>
  );
}
