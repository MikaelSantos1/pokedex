import React, { useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal'


const Card = (props) => {
    const [showModal, setShowModal] = useState(false)

    let types = []

    if (props.types) {
        props.types.map((type, i) => {
            return types.push(type.type.name)
        })

    }


    function getColor() {
      
    
        if (types[0] === 'water') return '#609fb5'
        if (types[0] === 'fire') return 'rgba(255, 99, 71,0.7)'
        if (types[0] === 'fighting') return '#f1d7b4'
        if (types[0] === 'psychic') return '#D8BFD8'
        if (types[0] === 'grass') return '#46f3b1'
        if (types[0] === 'poison') return '#4B0082'
        if (types[0] === 'bug') return 'rgba(85, 107, 47,0.8)'
        if (types[0] === 'ground') return '#755640'
        if (types[0] === 'normal') return '#F5F5DC'
        if (types[0] === 'electric') return '#ffd96fe2'
        if (types[0] === 'ice') return '#83c8e0'
        if (types[0] === 'rock') return '#ccc'
        if (types[0] === 'fairy') return '#FF69B4'
        if (types[0] === 'dragon') return '#FFA500'
        if (types[0] === 'ghost') return '#9370DB'
        return ""
       
    }
    const openModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <CardContainer color={getColor(types)} onClick={openModal}>
                <Description>
                    <h3> {props.name} </h3>

                    {types.map
                        ((type, i) =>
                            <span key={i} >

                                <h4>{type}</h4>
                            </span>)}
                </Description>

                <Background>
                    <span><h3>#{props.id}</h3></span>

                    <img src={props.background} alt="f" />
                </Background>
            </CardContainer>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                name={props.name}
                image={props.background}
                stats={props.stats}
                type={types}
                getColor={getColor}
                background2={props.background2}
            />
        </>
    )
}



const CardContainer = styled.div`

    width:100%;
    height:150px;
   
    display:flex;
    
    justify-content:center;
    align-items:center;
    color:#fff;
    background:${(props) => props.color};
    padding:15px;
    border-radius:25px;
    position: relative;
    cursor:pointer;
    
`
const Background = styled.div`

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    span {
     position: absolute;
    top: 0px;
    right: 20px;
    font-size: 2.5rem;
    color: rgba( 255,255,255,.7 );
    z-index:1;
    }
    h3{
        font-size: 2.5rem;
    }
`
const Description = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;

    span{
    border-radius: 100rem;
    background-color: rgba( 255,255,255,.2 );
    padding: .3rem .7rem;
    text-align: center;
    margin-bottom: .5rem;
    text-transform: capitalize;
    width:70px;

     }
`


export default Card
