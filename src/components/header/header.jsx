import React from 'react';
import { LiBox, NAVBOX } from './style'
import './index.css'
import styled from 'styled-components';

const Box = styled.div`
background-color:#1b1b1b;
opacity:0.6;
border-radius:0  0 4px 4px ;
`

const A = styled.a`
    text-decoration:none;
    color:white;
    opacity:1;
`

const Header = () => (
    <div className="box">
        <NAVBOX>
            <Box>
                <LiBox>Home</LiBox>
                <LiBox><A href="#info">Informações</A></LiBox>
                <LiBox><A href="#Pro">Projetos</A></LiBox>
            </Box>
        </NAVBOX>
    </div>
)

export default Header;