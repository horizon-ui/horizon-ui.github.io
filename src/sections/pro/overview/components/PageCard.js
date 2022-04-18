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
  Flex,
  Link,
  Text,
  Image,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";
export default function PageCard(props) {
  const { title, desc, link, image, ...rest } = props;
  // Chakra Color Mode
  const bgBox = useColorModeValue("#EDF2F7", "#131C3D");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const dot = useColorModeValue("#CBD5E0", "#4A5568");
  return (
    <Link href={link}>
      <Card
        p='0px'
        w='100%'
        borderRadius='20px'
        bg={bgBox}
        direction={{ base: "column" }}
        overflow='hidden'
        bgSize='cover'
        position='relative'
        {...rest}>
        <Flex align='center' p='18px'>
          <Icon me='6px' h='10px' w='10px' as={BsCircleFill} color={dot} />
          <Icon me='6px' h='10px' w='10px' as={BsCircleFill} color={dot} />
          <Icon h='10px' w='10px' as={BsCircleFill} color={dot} />
          <Text color={textColor} fontSize='md' fontWeight='700' mx='auto'>
            {title}
          </Text>
          <Icon as={MdOpenInNew} color={textColor} />
        </Flex>
        <Box bg='Red' h='100%' w='100%'></Box>
        <Image h='100%' w='110%' src={image} />
      </Card>
    </Link>
  );
}
