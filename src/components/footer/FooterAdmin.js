/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  Box,
  Icon,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Bg from "assets/img/layout/Background.png";
import { FaDiscord } from "react-icons/fa";
import { HorizonUIFree } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
export default function Footer() {
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "#A0AEC0");
  const textColorSimmmple = useColorModeValue("secondaryGray.700", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      pb='30px'>
      <Flex bg={`url(${Bg})`} w='100%' h='250px' bgSize='cover'>
        <Flex align='center' w='100%' maxW='1170px' mx='auto'>
          <Icon me='40px' as={FaDiscord} color='white' w='80px' h='80px' />
          <Box>
            <Text fontSize='30px' color='white' fontWeight='700'>
              Connect with the community!
            </Text>
            <Text fontSize='xl' color='white' fontWeight='700'>
              Feel free to ask questions, report issues, and meet new people.
            </Text>
          </Box>
          <Button
            ms='auto'
            bg='white'
            color='brand.500'
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            borderRadius='12px'
            w='276px'
            h='54px'>
            Join the #HorizonUI Community!
          </Button>
        </Flex>
      </Flex>
      <Flex
        justifyContent='space-between'
        mt='100px'
        w='1170px'
        maxW='1170px'
        mx='auto'>
        <Box maxW='360px'>
          <HorizonUIFree w='138px' h='24px' mb='26px' color={textColor} />
          <Text
            lineHeight='180%'
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'>
            Start your development process and build your dream web app with
            Horizon UI Dashboard, the most trendiest & innovative Admin Template
            for Chakra UI, React and Figma!
          </Text>
        </Box>
        <Flex direction='column'>
          <Text
            mb='20px'
            fontSize='lg'
            color={textColorSecondary}
            fontWeight='400'>
            Resources
          </Text>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'>
            Figma version
          </Link>
        </Flex>
        <Flex direction='column'>
          <Text
            mb='20px'
            fontSize='lg'
            color={textColorSecondary}
            fontWeight='400'>
            Resources
          </Text>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'>
            Figma version
          </Link>
        </Flex>
        <Flex direction='column'>
          <Text
            mb='20px'
            fontSize='lg'
            color={textColorSecondary}
            fontWeight='400'>
            Resources
          </Text>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'>
            Figma version
          </Link>
        </Flex>
        <Flex direction='column'>
          <Text
            mb='20px'
            fontSize='lg'
            color={textColorSecondary}
            fontWeight='400'>
            Resources
          </Text>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'
            mb='20px'>
            Figma version
          </Link>
          <Link
            href=''
            fontSize='md'
            color={textColorSecondary}
            fontWeight='400'>
            Figma version
          </Link>
        </Flex>
      </Flex>
      <HSeparator mt='75px' mb='50px' maxW='1170px' mx='auto' />
      <Flex mx='auto'>
        <Text me='4px' textColor={textColorSecondary}>
          © 2022 Horizon UI. All Rights Reserved. Made with love by
        </Text>
        <Link
          fontWeight='500'
          href='https://simmmple.com'
          color={textColorSimmmple}>
          Simmmple!
        </Link>
      </Flex>
    </Flex>
  );
}
