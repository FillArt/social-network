import React from 'react';
import {Header} from "../Layout/Header/Header";
import {Navbar} from "../Layout/Navbar/Navbar";
import {Profile} from "../Profile/Profile";
import {Container, MainContainer} from "./Home";

export const Dialogs = () => {
    return (
        <Container>
            <Header/>
            <MainContainer>
                <Navbar/>
                <h1>Dialog</h1>
            </MainContainer>
        </Container>
    );
};