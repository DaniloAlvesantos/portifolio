import React, { Component } from 'react';
import Header from './header/header'
import SectionBox from './section/section'
import styled from 'styled-components'

const BOX = styled.div`
    height:100%;
    width:100%;
`
const HRBOX = styled.hr`
    width:90%;

    margin-left:45px;
    margin-top:18px;
    margin-bottom:18px;

    color:#1f1f1f;
`

class AppContent extends Component {
    render() { 
        return (
            <BOX> 
                <Header/>
                <HRBOX/>
                <SectionBox/>
            </BOX>
        );
    }
}
 
export default AppContent;