'use client';

import { Box, Button, Flex, HStack, IconButton, Stack, useDisclosure, VStack } from '@chakra-ui/react'
import { Providers } from './providers'
import { UserProfileContext, UserProfile } from '@/components/UserProfile';
import { useContext, useEffect, useState } from 'react';
import { CharacterDetail } from '@/components/Character';

const Navigation = () => {
  return <Box as="a" px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: 'gray.200' }}>
    Home
  </Box>
}
const UserMenu = () => {
  const { user, hasUser, setUser } = useContext(UserProfileContext);
  const [isClient, setIsClient] = useState(false)

  // Work around NextJS hydration issues, ensure this is executed in the browser
  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient && hasUser && <HStack gap={2}>
    {`${user?.username} (${user?.jobTitle})`}
    <Button onClick={() => setUser && setUser({ username: '', jobTitle: '' })}>Logout</Button>
  </HStack>
}

const NavigationMenu = () => {
  const { open, onOpen, onClose } = useDisclosure()
  return <Box bg={'Menu'} px={4}>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <IconButton
        size={'md'}
        aria-label={'Open Menu'}
        display={{ md: 'none' }}
        onClick={open ? onClose : onOpen}
      />
      <HStack as='nav' display={{ base: 'none', md: 'flex' }}>
        <Navigation />
      </HStack>
      <Flex alignItems={'center'}>
        <UserMenu />
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
}

const Layout = ({ children, }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Providers>
          <CharacterDetail />
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