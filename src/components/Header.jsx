import React from 'react'
import styled from 'styled-components'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const Header = () => {
    return (
        <Container>
           <CatchingPokemonIcon fontSize="large"/>
        </Container>
    )
}

const Container= styled.div`
    width:100vw;
    height:70px;
    background-color:red;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
`

export default Header
