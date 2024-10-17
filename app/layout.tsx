'use client';

import { Box, Flex, HStack, IconButton, Stack, useDisclosure } from '@chakra-ui/react'
import { Providers } from './providers'
import UserProfile, { UserProfileContext } from '@/components/UserProfile';
import { useContext } from 'react';

const Navigation = () => {
  return <Box as="a" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}>
    Home
  </Box>
}

const NavigationMenu = () => {
  const { user, hasUser } = useContext(UserProfileContext);
  const { open, onOpen, onClose } = useDisclosure()
  return <Box bg={'Menu'} px={4}>
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
      {hasUser && <Flex alignItems={'center'}>
        Username: {user?.username}
      </Flex>}
    </Flex>
    {open && (
      <Box pb={4} display={{ md: 'none' }}>
        <Stack as={'nav'}>
          <Navigation />
        </Stack>
      </Box>
    )}
  </Box>
}

const Layout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Providers>
          <UserProfile />
          <NavigationMenu />
          <Box p={4}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  )
}

export default Layout