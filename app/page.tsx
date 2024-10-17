'use client';

import { useQuery } from '@apollo/client';
import CharacterBlock from '@/components/Character';
import Pagination from '@/components/Pagination';
import { useSearchParams } from 'next/navigation'
import { BreadcrumbCurrentLink, BreadcrumbLink, BreadcrumbRoot, Grid, GridItem } from '@chakra-ui/react'

import { gql } from '@/__generated__/gql';
import { Character } from '@/types';

const getCharactersQuery = gql(`
    query getCharacters($page: Int!) {
    characters(page: $page) {
      info {
        pages
        count
      }
      results {
        id
        name
        status
        species
        gender
        image
        location {
          name
        }
      }
    }
  }`)

const Page = () => {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || 1

  const { data } = useQuery(getCharactersQuery, { variables: { page: Number(page) } });
  if (!data?.characters) {
    return <></>
  }

  return <main>
    <BreadcrumbRoot marginBottom={4}>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
      <BreadcrumbCurrentLink>Characters</BreadcrumbCurrentLink>
    </BreadcrumbRoot>
    <Grid templateColumns={['1', '1', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={[2, 6]}>
      {data?.characters?.results?.map((character) =>
        character && <GridItem>
          <CharacterBlock character={character as Character} />
        </GridItem>)}
    </Grid>

    <Pagination
      currentPage={Number(page)}
      pageCount={Number(data?.characters?.info?.pages)}
    />
  </main >
}

export default Page;