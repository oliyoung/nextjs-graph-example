import { Character } from "@/types"
import { Card } from "@chakra-ui/react"

const CharacterBlock = ({ character }: { character: Omit<Character, 'location' | 'episode'> }) => {
    return <Card.Root w={'100%'} h='100%'>
        <Card.Header>{character.name}</Card.Header>
        <Card.Body>
            {character.gender}
            {character.status}
        </Card.Body>
    </Card.Root>
}
export default CharacterBlock