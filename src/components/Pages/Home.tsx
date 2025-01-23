import React from 'react';
import {Profile} from "../Profile/Profile";
import {Navbar} from "../Layout/Navbar/Navbar";
import {Header} from "../Layout/Header/Header";

import styled from "styled-components";

export const Home = () => {
    return (
        <>
         <Container>
             <Header/>
         </Container>

         <MainContainer>
             <Navbar/>
             <Profile/>
         </MainContainer>
        </>
    );
};

const Container = styled.div`
    max-width: 1100px;
    padding: 0 10px;
    margin: 0 auto;
`

const MainContainer = styled(Container)`
    outline: 1px solid red;
    
    display: grid;
    grid-template-columns: 2fr 10fr;
    gap: 10px;
`