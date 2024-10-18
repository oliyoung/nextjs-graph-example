'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from "@/components/ui/provider"
import { UserProfileProvider } from '@/components/UserProfile';
import { CharacterProvider } from '@/components/Character';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider>
        <ApolloProvider client={client}>
            <UserProfileProvider>
                <CharacterProvider>
                    {children}
                </CharacterProvider>
            </UserProfileProvider>
        </ApolloProvider>
    </Provider>
}


export { Providers }

