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
  Flex,
  Link,
  Text,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import React from "react";
// Custom components
import InnerContent from "layouts/innerContent";

export default function Pricing() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.700", "white");
  return (
    <Flex
      bgSize='cover'
      w='100%'
      direction={{ base: "column" }}
      py={{ base: "130px", md: "80px", xl: "140px" }}
      overflow='hidden'
      position='relative'>
      <InnerContent>
        <Flex
          direction='column'
          mx='auto'
          mb='40px'
          maxW={{ base: "62%" }}
          textAlign='center'>
          <Text
            fontWeight='700'
            letterSpacing='2px'
            bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
            bgClip='text'
            fontSize='lg'
            w='100%'
            mb='10px'>
            WHAT PEOPLE SAY
          </Text>
          <Text color={textColor} fontWeight='700' fontSize='48px' mb='10px'>
            Frequently asked questions
          </Text>
          <Text
            color={textColorSecondary}
            fontWeight='400'
            fontSize='lg'
            mb='30px'>
            Search for the questions that are frequently asked about Horzion UI
          </Text>
        </Flex>

        <Flex
          pb='100px'
          direction='column'
          w='1170px'
          maxW='100%'
          px={{ base: "0px", xl: "0px" }}
          mx='auto'>
          <Flex
            w='100%'
            mb='72px'
            mx='auto'
            flexDirection={{ base: "column", xl: "row" }}>
            <Flex
              direction='column'
              w={{ base: "90%", md: "50%" }}
              mx={{ base: "auto", xl: "0px" }}
              me={{ base: "auto", xl: "50px" }}>
              {/* 1. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                How do I use the license that I got with my purchase?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                You will receive a license code in your order receipt. You do
                not need to insert it anywhere. Please keep it in your records
                for any future inquiry from us. If you create a client project,
                you can either keep this code or you can send us an email using
                our
                <Link to='/contact'>
                  <Text
                    textDecoration='underline'
                    color='#F6AB3E'
                    fontWeight='500'
                    as='span'
                    mx='3px'>
                    contact page
                  </Text>
                </Link>
                {""}, and we will transfer the license to your client, provided
                that they have an account on our website.
              </Text>
              {/* 2. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                What is the difference between the Freelancer/Company/Enterprise
                licenses?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                The Freelancer license is aimed at people who work on their own.
                It grants you the right to use the purchased product only for
                one project (either yours or for a client).
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                The Company license is aimed at agencies or larger teams. It
                grants you the right to create other licensed products base on
                the template that you purchase form us.
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                The Enterprise license is aimed at large companies with multiple
                projects. It grants you the right to create any kind of
                software, SaaS, digital products and sell them.
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                All the differences between the types of licenses are{" "}
                <Link to='/licenses'>
                  <Text
                    textDecoration='underline'
                    color='#F6AB3E'
                    fontWeight='500'
                    as='span'
                    mx='3px'>
                    available here
                  </Text>
                </Link>
                .
              </Text>
              {/* 3. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                Are the images, fonts, and icons free to use?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                The images, fonts, icons and every other creative element for
                each theme can be freely used in your project under our
                licensing terms.
              </Text>
              {/* 4. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                Do these themes work with Wordpress?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                These products are not Wordpress themes, however, they can be
                integrated in Wordpress by an experienced web developer.
              </Text>
              {/* 5. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'
                pe='90px'>
                What does the Included Documentation feature refer to?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                It means that each theme within the Exclusive Digital Bundle
                promotion has a thorough and up to date documentation on how to
                get started with the product and each components and plugin is
                properly explained.
              </Text>
              {/* 6. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'
                pe='90px'>
                Can I use a premium product in an open source project?{" "}
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                mb='16px'
                maxW='548px'>
                Yes, of course! You can use the PRO product for an open source
                project if you add in the Readme file (on github) or in the
                description of your product that you built the project using “
                <Text fontWeight='500' mx='3px' as='span'>
                  X product from Simmmple
                </Text>{" "}
                ” and a link to the product page.
              </Text>

              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='60px'
                maxW='548px'>
                Please let us know after you launched the project and, if it is
                helping the developers community, we will support you with
                feedback and promote it in our gallery, social media and
                newsletters.
              </Text>
              <Flex
                flexDirection='column'
                bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
                ps='24px'
                pe='23px'
                pt='25px'
                pb='35px'
                borderRadius='20px'
                maxW='575px'
                display={{ base: "none", xl: "flex" }}>
                <Text
                  color='white'
                  fontSize='22px'
                  lineHeight='34px'
                  fontWeight='500'
                  mb='16px'>
                  Something unclear? We are here to help you!
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='28px'
                  color='#C5C9EB'
                  fontWeight='400'
                  maxW='548px'>
                  Feel free to send us a message using the
                  <Link to='/contact'>
                    <Text
                      textDecoration='underline'
                      color='#F6AB3E'
                      fontWeight='500'
                      as='span'
                      mx='3px'>
                      contact page
                    </Text>
                  </Link>
                  {""}
                  and one of our team members will get back to you in the
                  shortest time possible
                </Text>
              </Flex>
            </Flex>
            <Flex
              direction='column'
              w={{ base: "90%", md: "50%" }}
              mx={{ base: "auto", xl: "0px" }}>
              {/* 7. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                What does the number of "Projects" refer to?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                Depending on the License you purchase, you can use our products
                to either code a website/web application for you, for a client,
                or for multiple clients, which will be hosted on one or multiple
                domains:
              </Text>
              <UnorderedList ps='10px'>
                <ListItem color='#C5C9EB'>
                  <Text
                    fontSize='md'
                    lineHeight='28px'
                    fontWeight='400'
                    mb='16px'
                    maxW='608px'
                    letterSpacing='-0.5px'>
                    For example, if you purchased the Freelancer License you can
                    create only one website (for you or a client). Same, if you
                    have multiple subdomains, like "test.yoursite.com" or
                    "dev.yoursite.com", you can use the Freelancer License.
                  </Text>
                </ListItem>
                <ListItem color='#C5C9EB'>
                  <Text
                    fontSize='md'
                    lineHeight='28px'
                    fontWeight='400'
                    mb='72px'
                    maxW='548px'>
                    If you want to create multiple websites, you will need a
                    bigger License (like Company or Enterprise). Same, if you
                    have a complex application like a SaaS and have
                    "client1.yoursite.com" and "client2.yoursite.com", you will
                    need a multi-domain License like Company or Enterprise.
                  </Text>
                </ListItem>
              </UnorderedList>
              {/* 8. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                What does the refer to?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='608px'>
                Depending on your license type, you have a fixed period when you
                can submit any ticket to us regarding product functionalities
                and bug fixes (learning and tutorials related requests are not
                included). You will get responses directly from the product's
                creators in 24 hours (during business days):
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                mb='16px'
                maxW='608px'
                letterSpacing='-0.2px'>
                If you purchase the Freelancer license, you will receive Support
                from us for 8 months. If you need 12 months of Support, you will
                need the Company license.
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='608px'>
                If you purchase the Enterprise license, you will benefit from 24
                months of Support. At the end of this period, you will need to
                renew your license (purchase the product again) to get Support.
              </Text>
              {/* 9. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                Are the themes available with only classic CSS and without Sass
                as well?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                Yes, they are. Each theme has a
                <Text color='#F6AB3E' mx='3px' as='span'>
                  html&css
                </Text>{" "}
                folder which contains the theme with classic HTML, CSS, and
                Javascript files.
              </Text>
              {/* 10. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                If I purchased a Freelancer/Company License, how can I upgrade
                to the Company/Enterprise License?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                In case you have already purchased a license, but you want to
                upgrade, you can just send us a message using the
                <Link to='/contact'>
                  <Text
                    textDecoration='underline'
                    color='#F6AB3E'
                    fontWeight='500'
                    as='span'
                    mx='3px'>
                    contact page
                  </Text>
                </Link>
                {""}
                and we will send you a discount code so you will only pay the
                difference for the upgrade.
              </Text>
              {/* 11. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='34px'
                fontWeight='500'
                mb='16px'>
                What is the difference between a Free and a PRO product?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='16px'
                maxW='548px'>
                The differences between the Free and Pro products consists of
                the number of components, plugins, sections, pages in each.
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                mb='72px'
                maxW='548px'>
                The Free versions contain only a few elements which allow you to
                build a website but the PRO version is gives you much more
                flexibility.
              </Text>
              {/* 12. */}
              <Text
                color='white'
                fontSize='22px'
                lineHeight='28px'
                fontWeight='500'
                mb='16px'>
                Can I remove the copyright notice from the files?
              </Text>
              <Text
                fontSize='md'
                lineHeight='28px'
                color='#C5C9EB'
                fontWeight='400'
                letterSpacing='-0.5px'
                maxW='548px'
                mb={{ base: "72px", xl: "0px" }}>
                You can remove the copyright notice (if it's a premium item),
                but then you will need to create a separate
                <Text color='#F6AB3E' mx='3px' as='span'>
                  .txt
                </Text>{" "}
                file called
                <Text color='#F6AB3E' mx='3px' as='span'>
                  LICENSE.txt
                </Text>
                , and copy paste the copyright text in there. This file should
                be added to the root folder of your project.
              </Text>
              <Flex
                flexDirection='column'
                bg='linear-gradient(177.68deg, #242A4A 1.95%, #0E101E 118.65%)'
                ps='24px'
                pe='23px'
                pt='25px'
                pb='35px'
                borderRadius='20px'
                maxW='575px'
                display={{ base: "flex", xl: "none" }}>
                <Text
                  color='white'
                  fontSize='22px'
                  lineHeight='28px'
                  fontWeight='500'
                  mb='16px'>
                  Something unclear? We are here to help you!
                </Text>
                <Text
                  fontSize='md'
                  lineHeight='28px'
                  color='#C5C9EB'
                  fontWeight='400'
                  maxW='548px'>
                  Feel free to send us a message using the
                  <Link to='/contact'>
                    <Text
                      textDecoration='underline'
                      color='#F6AB3E'
                      fontWeight='500'
                      as='span'
                      mx='3px'>
                      contact page
                    </Text>
                  </Link>
                  {""}
                  and one of our team members will get back to you in the
                  shortest time possible
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </InnerContent>
    </Flex>
  );
}
