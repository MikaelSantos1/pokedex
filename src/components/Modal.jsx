import React from 'react'
import styled from 'styled-components'
import LinearProgress from '@material-ui/core/LinearProgress'
import CloseIcon from '@mui/icons-material/Close';


const Modal = ({ showModal, setShowModal, name, image, stats, type ,background2}) => {



    return (
        <>
            {showModal ?
                <ModalWrap>
                    <ModalContent >
                        <PokemonContainer  >

                            <span ><h2>{name}</h2></span>

                            <img src={background2} alt="" />
                        </PokemonContainer>
                        <StatsContainer >
                            {stats.map((stat, i) => {
                                return (
                                    <h4 key={i}>{stat.stat.name} :{stat.base_stat} <LinearProgress variant='determinate' value={stat.base_stat} /></h4>
                                )


                            })}
                        </StatsContainer>
                        <Button onClick={() => setShowModal(!showModal)} >
                            <CloseIcon></CloseIcon>
                        </Button>
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
    background-color:#000000cc;
     display:flex;
     justify-content:center;
     align-items:center;
    z-index:100;
`
const ModalContent = styled.div`
    width:800px;
    height:400px;
    background-color:#fff;
    color:#000;
    display:flex;
    
    background-color:#cccccc;
    @media(max-width: 520px) {
    
    flex-direction:column;
  }
     

`
const Button = styled.button`
    width:50px;
    height:50px;
    cursor: pointer;
    border:none;
    background-color:#cccccc;
   
`
const PokemonContainer = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    span{
    border-radius: 100rem;
   
    padding: .3rem .7rem;
    text-align: center;
    margin-bottom: .5rem;
    text-transform: capitalize;

     }
     img{
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
