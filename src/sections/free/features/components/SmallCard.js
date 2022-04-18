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
import { Button, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import React from "react";
import { MdChevronRight } from "react-icons/md";

export default function SmallCard(props) {
  const { title, desc, link, linkText, ...rest } = props;
  // Chakra Color Mode
  const bgBox = useColorModeValue("white", "rgba(10, 16, 32, 0.4)");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const textColorSecondary = "secondaryGray.700";
  return (
    <Card
      p='40px 30px'
      w='100%'
      borderRadius='20px'
      bg={bgBox}
      direction={{ base: "column" }}
      overflow='hidden'
      bgSize='cover'
      position='relative'
      {...rest}>
      <Text
        color={textColor}
        fontSize={{ base: "24px", md: "30px" }}
        fontWeight='700'
        mb='10px'>
        {title}
      </Text>
      <Text
        color={textColorSecondary}
        fontSize='md'
        fontWeight='400'
        maxW={{ base: "100%", xl: "65%" }}
        mb='20px'>
        {desc}
      </Text>
      <Link href={link}>
        <Button p='0px' ms='auto' variant='no-hover' bg='transparent'>
          <Text
            fontSize='lg'
            color={brandColor}
            fontWeight='bold'
            cursor='pointer'
            transition='all .3s ease'
            _hover={{ me: "4px" }}>
            {linkText}
          </Text>
          <Icon
            as={MdChevronRight}
            w='18px'
            h='18px'
            color={brandColor}
            transition='all .3s ease'
            ms='.3rem'
            cursor='pointer'
            _hover={{ transform: "translate(4px)" }}
          />
        </Button>
      </Link>
    </Card>
  );
}
