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
  Text,
  useColorModeValue,
  Avatar,
  Link,
  Flex,
  Box,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import React from "react";

export default function BigCard(props) {
  const { title, desc, image, name, job, company, avatar, link, ...rest } =
    props;
  // Chakra Color Mode
  const bgBox = useColorModeValue("white", "#1C1F39");
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.700";
  const brandColor = useColorModeValue("brand.500", "white");
  return (
    <Card
      bg={bgBox}
      p='30px 50px'
      pe='20px'
      w='100%'
      direction={{ base: "column" }}
      overflow='hidden'
      bgSize='cover'
      position='relative'
      {...rest}>
      <Text color={textColor} fontSize='22px' fontWeight='700' mb='24px'>
        {title}
      </Text>
      <Text
        color={textColorSecondary}
        fontSize='md'
        fontWeight='400'
        maxW='85%'
        mb='45px'>
        {desc}
      </Text>
      <Flex alignItems='center'>
        <Avatar h='48px' w='48px' me='20px' src={avatar} />
        <Box>
          <Text color={textColor} fontSize='md' fontWeight='700'>
            {name}
          </Text>
          <Flex align='center'>
            <Text
              color={textColorSecondary}
              fontSize='sm'
              fontWeight='500'
              me='5px'>
              {job}
            </Text>
            <Link href={link} color={brandColor} fontWeight='700' fontSize='sm'>
              {company}
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
}
