import React from 'react';
import styled, { keyframes } from 'styled-components';
import LogoPNG from '../../doc/users.png' 
import './index.css'

const DivBox = styled.div`
    max-width:95%;
    
    text-align:center;
    `
const BoxIMG = styled.div`
    width:450px;
    height:400px;

    font:15pt;

    margin-left:10px;

    border-radius:3px;
    border:1px solid #1b1b1b;

    background:#ffffff;
    transform:scale(0.8);
    transition: all ease 0.3s;


`

const H4 = styled.h4`
    margin-left:20px;
`

const IMG = styled.img`
    width:300px;
    height:300px;

    margin-top:50px;

    margin-left:75px;

    display:flex;
`

const SectionBox = () => (
    <DivBox id='info' > 
        <h3>Esse portifolio e sobre meus projetos,eles sao feitos so por mim</h3>
            <div>
                Meu nome e Danilo, tenho 15anos, agora que eu estou escrevendo esse texto, faz 6 mese que eu estudo programação web.
                <p>Eu sou programador em Front-end, estou estudando JavaScrip, React.js,Next.js,e eu sei um pouco de C#</p>
                <p>Eu fiz curso na Alura,Curso em Vídeo,RocketSeat,workShops online,Udemy,entre outros. </p>
                <p>Pra você aprender programar,ou que seja outra pofissao, nem sempre precisa ser pago, eu fiz a maioria dos meus cursos foram gratis,e sao muito bom esses cursos.</p>
                <p>É bom pagar curso? Sim , so que você paga se você tiver certeza que você vai levar isso a fundo, levar isso pra frente.</p>
                <p>Tem gente q faz so por fazer,temos que ser diferente,temos que fazer por que nos gostamos de fazer isso!</p>
            </div>
        <h3>Veja alguns projetos</h3>
        <BoxIMG id='Pro' className='BoxImg'>
            <H4>Esse site, ele usa a API do Github para procurar por usuario</H4>
            <IMG src={LogoPNG} />
        </BoxIMG>
    </DivBox>
);

export default SectionBox;