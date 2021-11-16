import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from './Card'
import SearchIcon from '@mui/icons-material/Search';
const Pokedex = () => {

    const [pokemon, setPokemon] = useState([])
    const [input, setInput] = useState('')


    useEffect(() => {

        const getPokemon = () => {
            try {
                axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
                    .then((res) => {
                        return res.data.results
                    }).then((results) => {
                        return Promise.all(results.map((res) => axios.get(res.url)))
                    }).then((results) => {
                        setPokemon(results.map((res) => res.data))
                    })

            } catch (e) {
                console.log(e)
            }
        }
        getPokemon()

    }, [])

    console.log(pokemon)

    return (
        <>
            <Search>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <span>
                    <SearchIcon />
                </span>

            </Search>

            <Wrap>
                {

                    pokemon.map((pokemons, i) => {
                        
                       if (pokemons.name.includes(input)) {
                            return (
                                <Card
                                    key={i}
                                    id={i + 1}
                                    name={pokemons.name}
                                    background={pokemons.sprites.other.dream_world.front_default}
                                    background2={pokemons.sprites.front_default}
                                    types={pokemons.types}
                                    stats={pokemons.stats}
                                />
                                 
                            )
                        }
                            return null
                    })}

            </Wrap>

        </>
    )

}
const Wrap = styled.div`

margin:20px auto;
display:grid;
grid-template-columns:repeat(3,1fr);
gap:30px;
max-width:100%;
width:80vw;
@media(max-width: 800px) {
    
    grid-template-columns:repeat(2,1fr);
  }
  @media(max-width: 520px) {
    
    grid-template-columns:repeat(1,1fr);
  }

`
const Search = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 0 auto;
    margin-top:20px;
    position:relative;
    width:300px;
    height:30px;
input{
    padding-left:10px;
    width:100%;
    height:100%;
    border-radius:20px;
    
}
    span{
        position:absolute;
        right:0;
    }
   
`

export default Pokedex
