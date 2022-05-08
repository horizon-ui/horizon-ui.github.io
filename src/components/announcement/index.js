/*eslint-disable*/
import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import Bg from "assets/img/free/layout/Announcement.png";
import { BrandLogo } from "components/icons/Icons";
export default function Footer() {
  return (
    <Flex
      px={{
        base: "20px",
        xl: "unset",
      }}
      bg={`url(${Bg})`}
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
        mx='auto'
        justifyContent='space-between'
        align='center'>
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
            lineHeight='100%'
            fontWeight='700'>
            We just released Horizon UI Components page! Check it out!
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
