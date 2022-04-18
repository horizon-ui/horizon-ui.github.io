/* eslint-disable */
// Chakra Imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { HorizonLogoPro } from "components/icons/Icons";
import { VSeparator } from "components/separator/Separator";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { IoLogoGithub, IoMdMoon, IoMdSunny } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
export default function AdminNavbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  });

  const { secondary, message } = props;

  // Here are all the props that may change depending on navbar's type or state.(secondary, variant, scrolled)
  let textColor = useColorModeValue("secondaryGray.900", "white");
  let navbarPosition = "fixed";
  let navbarFilter = "none";
  let navbarBackdrop = "blur(20px)";
  let navbarShadow = "none";
  let navbarBg = useColorModeValue("whiteAlpha.500", "rgba(11,20,55,0.5)");
  let navbarBorder = "transparent";
  let secondaryMargin = "0px";
  let paddingX = "15px";
  let gap = "0px";
  let menuBg = useColorModeValue("white", "navy.800");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)"
  );
  const changeNavbar = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <Box
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      backgroundPosition='center'
      backgroundSize='cover'
      zIndex='2'
      borderRadius='16px'
      borderWidth='1.5px'
      borderStyle='solid'
      transitionDelay='0s, 0s, 0s, 0s'
      transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
      transition-property='box-shadow, background-color, filter, border'
      transitionTimingFunction='linear, linear, linear, linear'
      alignItems={{ xl: "center" }}
      display={secondary ? "block" : "flex"}
      minH='75px'
      justifyContent={{ xl: "center" }}
      lineHeight='25.6px'
      mx='auto'
      mt={secondaryMargin}
      pb='8px'
      left='50%'
      transform='translate(-50%,0px)'
      px={{
        sm: paddingX,
        md: "10px",
      }}
      ps={{
        xl: "12px",
      }}
      pt='8px'
      top={{ base: "12px", md: "16px", xl: "18px" }}
      w={{
        base: "calc(100vw - 6%)",
        md: "calc(100vw - 8%)",
        lg: "calc(100vw - 6%)",
        xl: "calc(100vw - 250px)",
        "2xl": "1200px",
      }}>
      <Flex
        w='100%'
        flexDirection={{
          sm: "row",
          md: "row",
        }}
        alignItems='center'
        mb={gap}>
        <Icon as={HorizonLogoPro} color={textColor} w='193px' h='25px' />
        <Flex ms='auto'>
          <Link
            display={{ base: "none", lg: "block" }}
            href='https://horizon-ui.com/documentation/docs/introduction'
            color={textColor}
            fontSize='sm'
            fontWeight='700'
            me='30px'
            my='auto'>
            Documentation
          </Link>
          <Link
            display={{ base: "none", lg: "block" }}
            href='#pricing'
            color={textColor}
            fontSize='sm'
            fontWeight='500'
            me='30px'
            my='auto'>
            Pricing
          </Link>
          <VSeparator
            me='14px'
            bg={textColor}
            display={{ base: "none", lg: "block" }}
          />
          <Button
            variant='no-hover'
            h='max-content'
            w='max-content'
            bg='transparent'
            my='auto'>
            <Icon as={IoLogoGithub} color={textColor} w='18px' h='18px' />
          </Button>
          <Button
            variant='no-hover'
            h='max-content'
            w='max-content'
            bg='transparent'
            my='auto'
            me='10px'
            onClick={toggleColorMode}>
            <Icon
              h='18px'
              w='18px'
              color={textColor}
              as={colorMode === "light" ? IoMdMoon : IoMdSunny}
            />
          </Button>
          <Menu>
            <MenuButton
              display={{ base: "block", lg: "none" }}
              p='0px !important'
              mt={{ base: "0px", md: "1px" }}
              maxH='20px'
              maxW='20px'
              me={{ base: "30px", lg: "0px" }}
              display='flex'
              alignContent='end'>
              <Icon
                display={{ base: "block", lg: "none" }}
                as={IoMenuOutline}
                color={textColor}
                w='20px'
                h='20px'
                me='10px'
                _hover={{ cursor: "pointer" }}
              />
            </MenuButton>
            <MenuList
              boxShadow={shadow}
              p='0px'
              mt='10px'
              borderRadius='20px'
              bg={menuBg}
              border='none'>
              <Flex flexDirection='column' p='10px'>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  borderRadius='8px'
                  px='14px'>
                  <Link
                    href='DOCS'
                    color={textColor}
                    fontSize='sm'
                    fontWeight='500'
                    me='30px'
                    my='auto'>
                    Documentation
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  borderRadius='8px'
                  px='14px'>
                  <Link
                    href='Pricing'
                    color={textColor}
                    fontSize='sm'
                    fontWeight='500'
                    me='30px'
                    my='auto'>
                    Pricing
                  </Link>
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "none" }}
                  _focus={{ bg: "none" }}
                  color='red.400'
                  borderRadius='8px'>
                  <Link href='PREVIEW'>
                    <Button
                      variant='no-hover'
                      border='1px solid'
                      borderColor={textColor}
                      color={textColor}
                      borderRadius='12px'
                      bg='transparent'
                      onClick={toggleColorMode}>
                      Live preview
                    </Button>
                  </Link>
                </MenuItem>
              </Flex>
            </MenuList>
          </Menu>

          <Link
            href='https://horizon-ui.com/chakra-pro/'
            display={{ base: "none", lg: "block" }}>
            <Button
              variant='no-hover'
              border='1px solid'
              borderColor={textColor}
              color={textColor}
              borderRadius='12px'
              bg='transparent'
              my='auto'
              onClick={toggleColorMode}>
              Live preview
            </Button>
          </Link>
        </Flex>
      </Flex>
      {secondary ? <Text color='white'>{message}</Text> : null}
    </Box>
  );
}

AdminNavbar.propTypes = {
  brandText: PropTypes.string,
  variant: PropTypes.string,
  secondary: PropTypes.bool,
  fixed: PropTypes.bool,
  onOpen: PropTypes.func,
};
