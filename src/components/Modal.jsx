import React from 'react'
import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress'


const Modal = ({ showModal, setShowModal, name, image, stats, type, getColor }) => {
   
    type.join(" ")

    return (
        <>
            {showModal ?
                <ModalWrap>
                    <ModalContent >
                        <PokemonContainer color={getColor}  > 
                            <span ><h2>{name}</h2></span>
                           
                            <img src={image} alt="" />
                        </PokemonContainer>
                        <StatsContainer >
                            {stats.map((stat, i) => {
                                return (
                                    <h1 key={i}>{stat.stat.name} :{stat.base_stat} <LinearProgress variant='determinate' value={stat.base_stat} /></h1>
                                )
                                console.log(stat.base_stat)
                                console.log(stat.stat.name)

                            })}
                        </StatsContainer>
                        <Button onClick={() => setShowModal(!showModal)} />
                    </ModalContent>
                </ModalWrap> : null}
        </>
    )
}

const ModalWrap = styled.div`
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:#0000004b;
     display:flex;
     justify-content:center;
     align-items:center;
    z-index:100;
`
const ModalContent = styled.div`
    width:800px;
    height:500px;
    background-color:#fff;
    color:#000;
    display:flex;
    
     

`
const Button = styled.button`
    width:50px;
    height:50px;
    background-color:red;
  
   
`
const PokemonContainer = styled.div`
     width:100%;
    height:100%;
    
    display:flex;
    flex-direction:column;
    span{
    border-radius: 100rem;
    background:${(props) => props.color};
    padding: .3rem .7rem;
    text-align: center;
    margin-bottom: .5rem;
    text-transform: capitalize;
    width:100%;

     }
  
`

const StatsContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
  
    `
export default Modal
