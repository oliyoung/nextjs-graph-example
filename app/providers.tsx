'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from "@/components/ui/provider"
import UserProfile from '@/components/UserProfile';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }) => <Provider>
    <ApolloProvider client={client}>
        <UserProfile>
            {children}
        </UserProfile>
    </ApolloProvider>
</Provider>


export { Providers }

