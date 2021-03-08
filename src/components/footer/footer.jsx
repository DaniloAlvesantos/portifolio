import React from 'react';
import styled from 'styled-components'
import InstagramSVG from '../../doc/instagram.svg'
import LinkedinSVG from '../../doc/linkedin.svg'
import GitHubSVG from '../../doc/github.svg'
import GmailSVG from '../../doc/gmail.svg'

const UL = styled.ul`
display:inline-block;
`

const LI = styled.li`
font-size:1.4rem;

padding: 2px 10px;

cursor: pointer;

list-style-type:none;

display:inline-flex;
`

const IMG = styled.img`
    display:inline-flex;
    height:1.6rem;
    width:2rem;
    vertical-align:middle;
`

const FooterBox = styled.footer`
    text-align:center;
    align-items:center;

    padding-top:1rem;
`

const A = styled.a`
    text-decoration:none;
`

const Footer = () => (
    <>
        <FooterBox>   
            <UL>
                <LI><A href="https://www.instagram.com/danilodos9818/?hl=pt-br"><IMG src={InstagramSVG} />Instagram</A></LI>
                <LI><A href="https://www.linkedin.com/in/dalve-s-a7a589202/"><IMG src={LinkedinSVG} />Linkedin</A></LI>
                <LI><A href="https://github.com/DaniloAlvesantos"><IMG src={GitHubSVG} />GitHub</A></LI>
                <LI><A  href="mailto:dalvesantos@live.com?cc=name2@gma.com"><IMG src={GmailSVG}/>Gmail</A></LI>
            </UL>
        </FooterBox>
        <div id='cont'></div>
    </>
);

export default Footer;