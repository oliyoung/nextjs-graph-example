'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from "@/components/ui/provider"
import { UserProfileProvider } from '@/components/UserProfile';

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider>
        <ApolloProvider client={client}>
            <UserProfileProvider>
                {children}
            </UserProfileProvider>
        </ApolloProvider>
    </Provider>
}


export { Providers }

