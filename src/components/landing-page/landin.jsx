import React from 'react';
import styled from 'styled-components';
import LOGO from '../../doc/LOGO.svg';
import { Link } from 'react-router-dom';
import './style.css'

const Container = styled.div`
    background:#dddddd;
    height:110vh;
    font-family:'Bellota Text', cursive;;
`
const ContainerHead = styled.div`
    text-align:center;

`
const H1 = styled.h1`
    font-size:30pt;
`

const IMG = styled.img`
    position:absolute;
    left:0.1rem;
    display:block;
`

const P = styled.p`
    margin-left:50rem;
    margin-top:10rem;
    margin-bottom:2rem;
`

const Landing = () => (
    <div className='logo' >
        <Container>
            <ContainerHead>
                <H1>Bem-Vindo</H1>
            </ContainerHead>    
            <IMG src={LOGO} />
            <P>Esse portifolio e sobre minha carreira na programação.
                <br/>
                Sobre as linguagens que eu estudei,etc...
                <br/>
                Mas eu fiz com o intuito de corricolo
                <br/>
                E mostrar meu trabalho e comnhecimento
                <br/> 
                Que eu sei e que eu estudei nesse periodo
            </P>
            <Link to='/Home' className='LINK'>Proseguir</Link>
        </Container>
    </div>
)

export default Landing;