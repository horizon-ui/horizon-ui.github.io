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
  Button,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import bgDark from "assets/img/pro/features/bgDark.png";
// Custom components
import Card from "components/card/Card";
import InnerContent from "layouts/innerContent";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { columnsData } from "sections/pro/pricing/components/columnsData";
import Table from "sections/pro/pricing/components/Table";
import tableData from "sections/pro/pricing/components/tableData.json";

export default function Pricing() {
  // Chakra Color Mode
  const buttonBg = useColorModeValue("#F6F8FD", "transparent");
  const buttonBorder = useColorModeValue("#E0E5F2", "white");
  const bg = useColorModeValue("#F7FAFC", `url(${bgDark})`);
  const bgHighlight = useColorModeValue(
    "#fff",
    `linear-gradient(135deg, #868CFF 0%, #4318FF 100%)`
  );
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  const brandColor = useColorModeValue("white", "brand.500");
  const badgeColor = useColorModeValue("#E9E3FF", "white");

  // const Paddle = window.Paddle;
  // const openCheckout = () => {
  //   Paddle.Checkout.open({ product: 762852 });
  // };

  return (
    <Flex
      bg={bg}
      bgSize='cover'
      w='100%'
      direction={{ base: "column" }}
      py={{ base: "130px", md: "80px", xl: "140px" }}
      overflow='hidden'
      position='relative'>
      <InnerContent>
        <Flex
          direction='column'
          me='auto'
          mb='62px'
          maxW={{ base: "62%" }}
          textAlign='start'>
          <Text
            fontWeight='700'
            letterSpacing='2px'
            bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
            bgClip='text'
            fontSize='lg'
            w='100%'
            mb='10px'>
            PRICING PLANS
          </Text>
          <Text color={textColor} fontWeight='700' fontSize='48px'>
            Choose the right plan for you and your business
          </Text>
        </Flex>

        <Card mb='20px'>
          <SimpleGrid
            ms='auto'
            columns={{ base: "1", md: "3" }}
            gap='20px'
            mb='80px'
            w='80%'>
            {/* <Flex p='20px' direction='column' width='stretch'></Flex> */}
            <Flex
              w='100%'
              p='20px'
              direction='column'
              width='stretch'
              pt='40px'>
              <Text color={textColor} fontSize='lg' fontWeight='500'>
                Community
              </Text>
              <Text color={textColor} fontSize='48px' fontWeight='700'>
                Free
              </Text>
              <Text color={textColorSecondary} mb='30px' pe='30px'>
                Limited plan for community people who want to see how Horizon UI
                looks and works.
              </Text>
              <Link>
                <Button
                  w='100%'
                  ms='auto'
                  fontSize='sm'
                  border='1px solid'
                  // onClick={openCheckout}
                  borderColor={buttonBorder}
                  color={textColor}
                  borderRadius='12px'
                  bg={buttonBg}
                  my='auto'>
                  Buy it now
                  <Icon as={MdChevronRight} textColor={textColor} />
                </Button>
              </Link>
            </Flex>
            <Card
              position='relative'
              mt='-40px'
              me='20px'
              py='0px'
              p='20px'
              bg={bgHighlight}
              direction='column'
              width='stretch'
              pt='60px'>
              <Text color={textColor} fontSize='lg' fontWeight='500'>
                Community
              </Text>
              <Text color={textColor} fontSize='48px' fontWeight='700'>
                Free
              </Text>
              <Text color={textColorSecondary} mb='30px' pe='30px'>
                Limited plan for community people who want to see how Horizon UI
                looks and works.
              </Text>
              <Link w='100%'>
                <Button
                  w='100%'
                  ms='auto'
                  fontSize='sm'
                  borderRadius='12px'
                  my='auto'
                  variant='pricing'>
                  Get started
                  <Icon as={MdChevronRight} color={brandColor} />
                </Button>
              </Link>
              <Text
                p='10px 16px'
                fontWeight='700'
                bg={badgeColor}
                h='max-content'
                w='max-content'
                color='brand.500'
                position='absolute'
                top='-10px'
                left='50%'
                transform='translate(-50%,0%)'
                lineHeight='100%'
                borderRadius='50px'>
                MOST POPULAR
              </Text>
            </Card>
            <Flex w='100%' direction='column' width='stretch' pt='40px'>
              <Text color={textColor} fontSize='lg' fontWeight='500'>
                Community
              </Text>
              <Text color={textColor} fontSize='48px' fontWeight='700'>
                Free
              </Text>
              <Text color={textColorSecondary} mb='30px' pe='30px'>
                Limited plan for community people who want to see how Horizon UI
                looks and works.
              </Text>
              <Link>
                <Button
                  w='100%'
                  ms='auto'
                  fontSize='sm'
                  border='1px solid'
                  borderColor={buttonBorder}
                  color={textColor}
                  borderRadius='12px'
                  bg={buttonBg}
                  my='auto'>
                  Buy it now
                  <Icon as={MdChevronRight} textColor={textColor} />
                </Button>
              </Link>
            </Flex>
          </SimpleGrid>
          <Table columnsData={columnsData} tableData={tableData} />
        </Card>
        <Card alignItems='center' flexDirection='row' p='32px'>
          <Box me='128px'>
            <Text color={textColor} fontSize='lg' fontWeight='500'>
              Enterprise
            </Text>
            <Text color={textColor} fontSize='48px' fontWeight='700'>
              $499
            </Text>
          </Box>
          <Box me='128px' maxW='465px'>
            <Text color={textColor} fontSize='md' fontWeight='500'>
              Every feature from Company Plan but for Unlimited Users.
            </Text>
            <Text fontSize='md' color={textColor} fontWeight='400'>
              Relevant for large-scale uses and extended redistribution rights.
              A license for large companies working on big projects.
            </Text>
          </Box>
          <Link>
            <Button
              w='276px'
              h='54px'
              ms='auto'
              fontSize='sm'
              border='1px solid'
              borderColor={buttonBorder}
              color={textColor}
              borderRadius='12px'
              bg={buttonBg}
              my='auto'>
              Buy it now
              <Icon as={MdChevronRight} textColor={textColor} />
            </Button>
          </Link>
        </Card>
      </InnerContent>
    </Flex>
  );
}
