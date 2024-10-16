'use client';

import { useQuery, gql } from '@apollo/client';
import Character from '@/components/Character';
import Pagination from '@/components/Pagination';
import { useSearchParams } from 'next/navigation'
import { Grid, GridItem } from '@chakra-ui/react'

const Page = () => {
  const searchParams = useSearchParams()
  const page = searchParams.get('page') || 1

  const CHARACTER_QUERY = gql`
  query {
    characters(page: ${page}) {
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
  }`
  const { loading, error, data } = useQuery(CHARACTER_QUERY);

  return <main>
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {data?.characters.results.map((character: any) =>
        <GridItem w='100%' h='100'>
          <Character character={character} />
        </GridItem>)}
    </Grid>
    <Pagination
      currentPage={Number(page)}
      pageCount={Number(data?.characters.info.pages)}
    />
  </main>
}

export default Page;