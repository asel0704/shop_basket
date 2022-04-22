import {useCallback, useEffect, useState} from "react";
import {Grid, styled} from "@mui/material";

const DEFAULT_CHARACTERS_URL = 'https://rickandmortyapi.com/api/character'
const DEFAULT_EPISODES_URL = 'https://rickandmortyapi.com/api/episode'
const Avatar = styled('img')`
  width: 80px;
  height: 130px;
  object-fit: cover;
`
export function RickAndMortyPage() {
    const [characters, setCharacters] = useState([])
    const [episodes, setEpisodes] = useState([])

    const loadCharacters = useCallback((url = DEFAULT_CHARACTERS_URL) => {
        fetch(url)
            .then((data) => data.json())
            .then(({ info, results }) => {
                setCharacters((current) => [...current, ...results])
                if (info.next) {
                    loadCharacters(info.next)
                }
            })
    }, [])

    const loadEpisodes = useCallback((url = DEFAULT_EPISODES_URL) => {
        fetch(url)
            .then((data) => data.json())
            .then(({ info, results }) => {
                setEpisodes((current) => [...current, ...results])
                if (info.next) {
                    loadEpisodes(info.next)
                }
            })
    }, [])

    useEffect(() => {
        loadCharacters()
        loadEpisodes()
    }, [loadCharacters, loadEpisodes])

    return (
        <div>
            <Grid container spacing={3}>
                {characters.map((character) => (
                    <Grid item xs={4} key={character.id}>
                        <Avatar src={character.image} />
                        <a href={character.url} target="_blank">{character.name}</a>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
