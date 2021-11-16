import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <h1>POKEDEX</h1>
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
`
export default Header
