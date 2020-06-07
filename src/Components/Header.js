import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 1000;
    will-change: transform;
    background: rgb(255, 255, 255);
    transition: all 0.3s ease 0s;
    background-color: #00994f;
    color: #fff;
   ;

`;
const GridContainer = styled.div`
max-width: 1600px;
width: 100%;
position: relative;
height: 40px;
margin: 0px auto;
padding: 5px 35px;
display:flex;
justify-content: between;
align:center;
flex-direction:row;
`;
const Logo = styled.div`
height: 20px;
padding-left: 10px;
line-height: 20px;
&.Image {
    max-height: 28px;
    vertical-align: initial;
}
`;

const Image = styled.img`
max-width: 100%;
border-style: none;
`;


function Header() {
    return (
        <HeaderDiv id="header">
            <GridContainer>
                <Navigation />
                {/* <Link to="/" >
                    <Logo>  <Image  alt="fernsnpetals" src="https://i7.fnp.com/assets/images/new-fnplogo.png" /> </Logo>
                </Link> */}
            </GridContainer>
        </HeaderDiv>
    )
}

export default Header