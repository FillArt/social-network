import React from 'react';
import {Header} from "../Layout/Header/Header";
import {Navbar} from "../Layout/Navbar/Navbar";
import {Container, MainContainer} from "./HomePage";
import {Dialogs} from "../Dialogs/Dialogs"
import {DialogType} from "../../App";

type DialogsPageProps = {
    data: DialogType[];
}

export const DialogsPage = (props: DialogsPageProps) => {
    return (
        <Container>
            <Header/>
            <MainContainer>
                <Navbar/>
                <Dialogs data={props.data} />
            </MainContainer>
        </Container>
    );
};