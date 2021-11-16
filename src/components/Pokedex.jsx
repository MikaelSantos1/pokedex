import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from './Card'

const Pokedex = () => {

    const [pokemon, setPokemon] = useState([])
    const [input,setInput]=useState('')
   

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
    
   
    
    return (
        <>
       
            <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
       
           
            <Wrap>
                {

                    pokemon.map((pokemons, i) => {
                        if  (pokemons.name.includes(input)){
                            return (
                                <Card
                                    key={i}
                                    id={i + 1}
                                    name={pokemons.name}
                                    background={pokemons.sprites.other.dream_world.front_default}
                                    types={pokemons.types}
                                    stats={pokemons.stats}
                                />
                            )
                      }
                        return
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
`


export default Pokedex
