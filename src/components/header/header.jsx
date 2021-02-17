import React from 'react';
import { LiBox, NAVBOX } from './style'
// import BackJPG from '../../doc/back.jpg'
import './index.css'

const Header = () => (
    <div className="box">
        <NAVBOX>
            <LiBox>Home</LiBox>
            <LiBox>#</LiBox>
        </NAVBOX>
    </div>
)

export default Header;