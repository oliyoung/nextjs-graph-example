'use client';

import { useQuery, gql } from '@apollo/client';
import Character from '@/components/Character';
import Pagination from '@/components/Pagination';
import { useSearchParams } from 'next/navigation'

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
    {data?.characters.results.map((character: any) => <Character character={character} />)}
    {!loading && <Pagination
      currentPage={Number(page)}
      pageCount={Number(data?.characters.info.pages)}
    />}
  </main>
}

export default Page;