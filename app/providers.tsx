'use client';


import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Provider } from "@/components/ui/provider"

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    cache: new InMemoryCache(),
});

const Providers = ({ children }: { children: React.ReactNode }) => <ApolloProvider client={client}>
    <Provider>
        {children}
    </Provider>
</ApolloProvider>


export { Providers }

