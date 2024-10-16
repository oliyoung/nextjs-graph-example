'use client';

import { Box, Flex, HStack, IconButton, Stack, useDisclosure } from '@chakra-ui/react'

import { Providers } from './providers'

const Navigation = () => {
  return <Box as="a" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}>
    Home
  </Box>
}

const Layout = ({ children, }: { children: React.ReactNode }) => {
  const { open, onOpen, onClose } = useDisclosure()
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>
          <Box bg={'Menu'} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
              <IconButton
                size={'md'}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={open ? onClose : onOpen}
              />
              <HStack as={'nav'} display={{ base: 'none', md: 'flex' }}>
                <Navigation />
              </HStack>
              <Flex alignItems={'center'}>

              </Flex>
            </Flex>
            {open && (
              <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'}>
                  <Navigation />
                </Stack>
              </Box>
            )}
          </Box>
          <Box p={4}>{children}</Box>
        </Providers>
      </body>
    </html>
  )
}

export default Layout