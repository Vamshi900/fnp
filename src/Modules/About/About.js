import React from 'react'
import styled from 'styled-components';

const PageName = styled.h1`
margin-top: 10vh;
color: black`;

const PageContet = styled.p`
color: black;
margin-top: 13vh;`;
function About() {
    return (
        <>
            <PageName className="font-bold text-2xl mb-3">About us</PageName>
            <PageContet>
                This is the about page content.
            </PageContet>
        </>
    )
}

export default About