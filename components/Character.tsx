import { Character } from "@/types"
import { Card, Grid, GridItem } from "@chakra-ui/react"
import { DataListItem, DataListRoot } from "./ui/data-list"
import Image from 'next/image'

const CharacterBlock = ({ character }: { character: Character }) => {
    return <Card.Root w={'100%'} h='100%'>
        <Card.Header>{character.name}</Card.Header>
        <Card.Body>
            <Grid templateColumns='repeat(2, 1fr)' gap='4'>
                <GridItem w={120}>
                    {character.image && <Image width="120" height="120" alt={character.name || "Character Photo"} src={character.image} />}
                </GridItem>
                <GridItem>
                    <DataListRoot orientation={'vertical'}>
                        <DataListItem alignItems='flex-start' key='location' label='Location' value={character?.location?.name} />
                        <DataListItem alignItems='flex-start' key='gender' label='Gender' value={character.gender} />
                        <DataListItem alignItems='flex-start' key='status' label='Status' value={character.status} />
                        <DataListItem alignItems='flex-start' key='species' label='Species' value={character.species} />
                    </DataListRoot>
                </GridItem>
            </Grid>
        </Card.Body>
    </Card.Root>
}
export default CharacterBlock