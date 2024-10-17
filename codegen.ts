import { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config'

const config: CodegenConfig = {
    schema: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    documents: ['app/**/*.{ts,tsx}'],
    generates: {
        './types.ts': {
            plugins: ["typescript", "typescript-resolvers"],
            config: {
                useIndexSignature: true
            }
        },
        './__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            }
        }
    },
    ignoreNoDocuments: true,
};

export default config;