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
import { Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import React from "react";

export default function BigCard(props) {
  const { title, desc, image, ...rest } = props;
  // Chakra Color Mode
  const bgBox = useColorModeValue("white", "rgba(10, 16, 32, 0.4)");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.700";
  return (
    <Card
      px='0px'
      pb='0px'
      w='100%'
      borderRadius='20px'
      bg={bgBox}
      direction={{ base: "column" }}
      pt={{ base: "30px", md: "50px", xl: "50px" }}
      overflow='hidden'
      bgSize='cover'
      position='relative'
      {...rest}>
      <Text
        color={textColor}
        px={{ base: "20px", md: "40px" }}
        fontSize={{ base: "24px", md: "30px" }}
        fontWeight='700'
        mb='10px'>
        {title}
      </Text>
      <Text
        color={textColorSecondary}
        px={{ base: "20px", md: "40px" }}
        fontSize='md'
        fontWeight='400'
        maxW={{ base: "100%", xl: "86%" }}
        mb={{ base: "250px", md: "330px" }}>
        {desc}
      </Text>
      {/* <Image src={image} position='absolute' /> */}
      {image}
    </Card>
  );
}
