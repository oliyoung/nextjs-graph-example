'use client';

import { useQuery } from '@apollo/client';
import Character from '@/components/Character';
import Pagination from '@/components/Pagination';
import { useSearchParams } from 'next/navigation'
import { Grid, GridItem } from '@chakra-ui/react'

import { gql } from '@/__generated__/gql';

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
        type
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
    <Grid templateColumns={['1', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']} gap={[2, 6]}>
      {data?.characters?.results?.map((character) =>
        character && <GridItem>
          <Character character={character} />
        </GridItem>)}
    </Grid>

    <Pagination
      currentPage={Number(page)}
      pageCount={Number(data?.characters?.info?.pages)}
    />
  </main >
}

export default Page;