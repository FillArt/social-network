import React from 'react';
import {Message} from "./Message";
import styled from "styled-components";

export const MessagesList = () => {
    return (
        <Container>
            <Message myTemp={false}/>
            <Message myTemp={false}/>
            <Message myTemp={true}/>
            <Message myTemp={false}/>
        </Container>
    );
};

const Container = styled.div`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
`