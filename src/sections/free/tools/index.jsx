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

import React from 'react';
// Chakra imports
import { Box, Icon, Flex, Image, Link, Text, useColorModeValue, SimpleGrid } from '@chakra-ui/react';
// Assets
import card1 from 'assets/img/free/tools/card1.png';
import card2 from 'assets/img/free/tools/card2.png';

// Custom components
import InnerContent from 'layouts/innerContent';
import Card from 'components/card/Card';

export default function Tools() {
	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const textColorSecondary = useColorModeValue('secondaryGray.700', 'white');
	const brandColor = useColorModeValue('brand.500', 'white');
	return (
		<Flex
			w='100%'
			maxW='100%'
			direction={{ base: 'column' }}
			pt={{ base: '80px', md: '120px', xl: '140px' }}
			pb={{ base: '30px', md: '30px', xl: '50px' }}
			overflow='hidden'
			bgSize='cover'
			position='relative'>
			<InnerContent>
				<Flex maxW='100%' direction='column' width='stretch' px={{ base: '20px', md: '20px', xl: '0px' }}>
					<Flex
						direction='column'
						mx='auto'
						mb='40px'
						maxW={{ base: '100%', lg: '70%', '2xl': '70%' }}
						textAlign='center'>
						<Text
							fontWeight='700'
							letterSpacing='2px'
							bg='linear-gradient(135deg, #868CFF 0%, #4318FF 100%)'
							bgClip='text'
							fontSize='sm'
							w='100%'
							mb='10px'>
							TRY HORIZON WITH DIFFERENT TOOLS
						</Text>
						<Text
							color={textColor}
							fontWeight='800'
							fontSize={{ base: '28px', md: '48px' }}
							mb={{ base: '14px', lg: '30px' }}>
							Make your Horizon project faster with these amazing tools
						</Text>
					</Flex>
				</Flex>
				<SimpleGrid w='100%' columns={{ base: '1', lg: '2' }} gap='20px' px='20px'>
					<Link href="https://www.supa-palette.com/?ref=horizon-ui">
						<Card p='0px'>
							<Image src={card1} borderRadius='30px' />
							<Box mt={{ base: '-38px', md: '-44px' }} me={{ base: '0px', lg: '0px' }} p='30px'>
								<Text
									fontWeight='800'
									mb='20px'
									color={textColor}
									fontSize={{ base: 'xl', md: '22px' }}
									lineHeight={{ base: '140%', md: '100%' }}
									maxW={{ base: '90%', md: 'unset' }}>
									Horizon UI + Supa Palette
								</Text>
								<Text
									mb='30px'
									fontWeight='500'
									color={textColorSecondary}
									fontSize={{ base: 'sm', md: 'md' }}>
									Horizon UI’s color palette system is available on Supa Palette, a color palettes
									generator, editor and manager plugin for Figma!
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='https://www.supa-palette.com/?ref=horizon-ui'
									fontSize='md'
									whiteSpace='nowrap'
									textDecor='underline'>
									Try Horizon + Supa Pallete for free
								</Link>
							</Box>
					    </Card>
					</Link>
					<Link href="https://appseed.us/product/horizon-ui/api-server-nodejs/?ref=horizon-ui">
						<Card p='0px'>
							<Image src={card2} borderRadius='30px' />
							<Box mt={{ base: '-38px', md: '-44px' }} me={{ base: '0px', lg: '0px' }} p='30px'>
								<Text
									fontWeight='800'
									mb='20px'
									color={textColor}
									fontSize={{ base: 'xl', md: '22px' }}
									lineHeight={{ base: '140%', md: '100%' }}
									maxW={{ base: '90%', md: 'unset' }}>
									Horizon UI - NodeJS, Django, Flask & Firebase
								</Text>
								<Text
									mb='30px'
									fontWeight='500'
									color={textColorSecondary}
									fontSize={{ base: 'sm', md: 'md' }}>
									Try Horizon UI with the most popular back-end languages: NodeJS, Django, Flask &
									Firebase made with AppSeed generator!
								</Text>
								<Link
									mt={{ base: '20px', md: 'unset' }}
									w='max-content'
									color={brandColor}
									fontWeight='700'
									href='https://appseed.us/product/horizon-ui/api-server-nodejs/?ref=horizon-ui'
									fontSize='md'
									whiteSpace='nowrap'
									textDecor='underline'>
									Get started with Horizon Full Stack
								</Link>
							</Box>
						</Card>
					</Link>
				</SimpleGrid>
			</InnerContent>
		</Flex>
	);
}
