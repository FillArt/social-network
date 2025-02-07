import React from 'react';
import {Profile} from "../Profile/Profile";
import {Navbar} from "../Layout/Navbar/Navbar";
import {Header} from "../Layout/Header/Header";

import styled from "styled-components";
import {PostType} from "../../App";

type HomePageProps = {
    data: PostType[]
    addPost: (post: PostType) => void;
}

export const HomePage = (props :HomePageProps) => {
    return (
        <Container>
            <Header/>
            <MainContainer>
                <Navbar/>
                <Profile posts={props.data} addPost={props.addPost} />
            </MainContainer>
        </Container>
    );
};

export const Container = styled.div`
    max-width: 1100px;
    padding: 0 10px;
    margin: 0 auto;
    
    height: calc(100vh - 85px);
`

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 2fr 10fr;
    gap: 10px;
`