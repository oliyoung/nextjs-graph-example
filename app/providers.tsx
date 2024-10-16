'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <ApolloProvider client={client}>
        <ChakraProvider>
            {children}
        </ChakraProvider>
    </ApolloProvider>
}

export { Providers }

