import React from 'react';
import {Header} from "../Layout/Header/Header";
import {Navbar} from "../Layout/Navbar/Navbar";
import {Container, MainContainer} from "./HomePage";
import {Dialogs} from "../Dialogs/Dialogs"

export const DialogsPage = () => {
    return (
        <Container>
            <Header/>
            <MainContainer>
                <Navbar/>
                <Dialogs/>
            </MainContainer>
        </Container>
    );
};