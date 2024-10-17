import { Character } from "@/types"
import { Card } from "@chakra-ui/react"

const CharacterBlock = ({ character }: { character: Pick<Character, 'name'> }) => {
    return <Card.Root>
        <Card.Header>{character.name}</Card.Header>
        <Card.Body />
        <Card.Footer />
    </Card.Root>
}
export default CharacterBlock