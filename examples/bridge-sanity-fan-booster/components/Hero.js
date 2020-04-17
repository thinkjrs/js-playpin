import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';


import {
  Stack,
  Avatar,
  Box,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
  Link as ChakraLink,
  Heading,
  Icon
} from '@chakra-ui/core';

const DynPlot = dynamic(import('./HeroPlot'), {
  ssr: false
})

export const Hero = ({ title }) => (
  <Box maxW="xl" >
    <Flex justifyContent="space-between" alignItems="flex-start" >
      <Box py={4} px={1} pt="10rem"  maxW="xl">
        <Heading fontSize={50}>{title}</Heading>
      </Box>
      <Box py={4} px={1}  pt="10rem"  maxW="xl">
        <List spacing={3} my={0}>
          <ListItem>
            <ListIcon icon="check-circle" color="red.500" />
            <Link href="https://musicfox.io">
              <ChakraLink
                isExternal
                href="https://musicfox.io"
                flexGrow={1}
                mr={2}>
                Musicfox <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon icon="check-circle" color="red.500" />
            <Link href="https://fanbooster.musicfox.io">
              <ChakraLink
                isExternal
                href="https://fanbooster.musicfox.io"
                flexGrow={1}
                mr={2}>
                <em>FanBooster</em> <Icon name="external-link" mx="2px" />
              </ChakraLink>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
    <Stack isInline align="center" justifyContent="space-between"> 
      <Stack align='center' justifyContent='space-between' width="29%">
        <Box py={2} px={1}  maxW="xl">
          <Avatar size="2xl" name="Remi Wolf" src="https://storage.googleapis.com/fan-booster/avatars/remi-wolf_500x500.jpg" />
        </Box>
        <Box py={2} px={1}  maxW="xl">
          <Text>We're now testing serious overflow numbers to see what in the world happens when y-axis-based overflow takes place.</Text>
        </Box>
      </Stack>
      <Stack align='left' justifyContent='space-between' width='70%'>
      <Box py={2} px={1}  maxW="xl">
        <Heading>By The Numbers</Heading>
      </Box>
      <Box py={2} px={1}  maxW="xl" shouldWrapChildren>
        <DynPlot />
      </Box>
      </Stack>
    </Stack>
  </Box>
)

Hero.defaultProps = {
  title: Date().substring(0, 16), // TODO refactor this monster...
}
