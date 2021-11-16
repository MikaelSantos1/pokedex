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
      
       for (let i in types){
        if (types[i] === 'water') return '#609fb5'
        if (types[i] === 'fire') return 'rgba(255, 99, 71,0.7)'
        if (types[i] === 'fighting') return '#f1d7b4'
        if (types[i] === 'psychic') return '#D8BFD8'
        if (types[i] === 'grass') return '#46f3b1'
        if (types[i] === 'poison') return '#4B0082'
        if (types[i] === 'bug') return 'rgba(85, 107, 47,0.8)'
        if (types[i] === 'ground') return '#755640'
        if (types[i] === 'normal') return '#F5F5DC'
        if (types[i] === 'electric') return '#ffd96fe2'
        if (types[i] === 'ice') return '#83c8e0'
        if (types[i] === 'rock') return '#ccc'
        if (types[i] === 'fairy') return '#FF69B4'
        if (types[i] === 'dragon') return '#FFA500'
        if (types[i] === 'ghost') return '#9370DB'
        return ""
       }
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
            />
        </>
    )
}



const CardContainer = styled.div`

    width:100%;
    height:100%;
   
    display:flex;
    
    justify-content:center;
    align-items:center;
    color:#fff;
    background:${(props) => props.color};
    padding:15px;
    border-radius:25px;
    position: relative;
    
`
const Background = styled.div`

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    span{
     position: absolute;
    top: 0px;
    right: 20px;
    font-size: 2.5rem;
    color: rgba( 255,255,255,.7 );
    z-index:1;
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
