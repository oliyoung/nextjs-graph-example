import { Character, Maybe } from "@/types"
import { Card } from "@chakra-ui/react"
import { DataListItem, DataListRoot } from "./ui/data-list"

const CharacterBlock = ({ character }: { character: Character }) => {
    return <Card.Root w={'100%'} h='100%'>
        <Card.Header>{character.name}</Card.Header>
        <Card.Body>
            <DataListRoot orientation="horizontal">
                <DataListItem key='location' label='Location' value={character?.location?.name} />
                <DataListItem key='gender' label='Gender' value={character.gender} />
                <DataListItem key='status' label='Status' value={character.status} />
                <DataListItem key='species' label='Species' value={character.species} />
            </DataListRoot>
        </Card.Body>
    </Card.Root>
}
export default CharacterBlock