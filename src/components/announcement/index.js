/*eslint-disable*/
import React from "react";
import { Flex, Icon, Text, Link } from "@chakra-ui/react";
import { BrandLogo } from "components/icons/Icons";
export default function Footer() {
  return (
    <Link href='https://horizon-ui.com/pro?ref=horizon-announcement'>
      <Flex
        px={{
          base: "20px",
          xl: "unset",
        }}
        bg="linear-gradient(269.77deg, #FFA26E -5.11%, #FF18F6 29.39%, #4318FF 69.57%, #00E0FF 100.59%)"
        w='100%'
        bgPosition='center'
        h={{ base: "60px", lg: "60px" }}
        bgSize='cover'>
        <Flex
          mx='auto'
          my='auto'
          align='center'
          w='100%'
          maxW='1170px'
          justifyContent='space-between'>
          <Flex flexDirection='row' mx='auto'>
            <Icon
              me={{ base: "10px", lg: "10px" }}
              as={BrandLogo}
              color='white'
              w='16px'
              h='16px'
            />
            <Text
              fontSize={{ base: "sm", md: "sm" }}
              mb='unset'
              color='white'
              lineHeight='120%'
              textAlign='center'
              fontWeight='700'>
              SUMMER PROMOTION | Discounts up to -34% off at Horizon UI PRO
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
}
