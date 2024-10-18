import { Character } from "@/types"
import { Card, DialogBackdrop, DialogBody, DialogContent, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, Grid, GridItem, GridProps, Stack } from "@chakra-ui/react"
import { DataListItem, DataListRoot } from "./ui/data-list"
import Image from 'next/image'
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface CharacterContextInterface {
    character?: Character,
    setCharacter?: Dispatch<SetStateAction<Character | undefined>>
}

export const CharacterContext = createContext<CharacterContextInterface>({});

export const CharacterProvider = ({ children }: { children: React.ReactNode }) => {
    const [character, setCharacter] = useState<Character>()
    return <CharacterContext.Provider value={{ character, setCharacter }}>
        {children}
    </CharacterContext.Provider>
}

export const CharacterDetail = () => {
    const { character, setCharacter } = useContext(CharacterContext);
    if (!character || !setCharacter) {
        return <></>
    }
    return <div style={{ position: 'absolute', width: '100vw', padding: '0 20%', margin: '10% auto' }}>
        <DialogRoot modal
            centered
            motionPreset="slide-in-bottom"
            open={!!character}
            closeOnEscape={true}
            size="cover"
            onEscapeKeyDown={() => setCharacter(undefined)}
            onPointerDownOutside={() => setCharacter(undefined)}
        >
            <DialogBackdrop />
            <DialogTrigger />
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{character.name}</DialogTitle>
                </DialogHeader>
                <DialogBody>
                    <Stack gap="4">
                        {character.image && <Image width="400" height="400" alt={character.name || "Character Photo"} src={character.image} />}
                        <DataListRoot orientation='horizontal'>
                            <DataListItem alignItems='flex-start' key='location' label='Location' value={character?.location?.name} />
                            <DataListItem alignItems='flex-start' key='gender' label='Gender' value={character.gender} />
                            <DataListItem alignItems='flex-start' key='species' label='Species' value={character.species} />
                        </DataListRoot>
                    </Stack>
                </DialogBody>
            </DialogContent>
        </DialogRoot >
    </div>
}

export const CharacterBlock = ({ character }: { character: Readonly<Character> }) => {
    const { setCharacter } = useContext(CharacterContext);
    let status: GridProps = { opacity: 1 }

    switch (character.status?.toLowerCase()) {
        case 'dead':
            status = { opacity: 0.5, filter: 'auto', blur: '2px' }
            break;
        case 'unknown':
            status = { opacity: 0.5 }
            break;
    }

    return <Card.Root w='100%' h='100%' onClick={() => setCharacter && setCharacter(character)}>
        <Card.Header>{character.name} ({character.status})</Card.Header>
        <Card.Body>
            <Grid templateColumns='repeat(2, 1fr)' gap='4' {...status}>
                <GridItem w={120}>
                    {character.image && <Image width="120" height="120" alt={character.name || "Character Photo"} src={character.image} />}
                </GridItem>
                <GridItem>
                    <DataListRoot orientation='vertical'>
                        <DataListItem alignItems='flex-start' key='location' label='Location' value={character?.location?.name} />
                        <DataListItem alignItems='flex-start' key='gender' label='Gender' value={character.gender} />
                        <DataListItem alignItems='flex-start' key='species' label='Species' value={character.species} />
                    </DataListRoot>
                </GridItem>
            </Grid>
        </Card.Body>
    </Card.Root >
}
