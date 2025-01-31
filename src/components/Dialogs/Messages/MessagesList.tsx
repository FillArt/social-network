import React from 'react';
import {Message} from "./Message";
import styled from "styled-components";
import {MessageType} from "../../../App";

type MessagesListProps = {
    messages: MessageType[];
}

export const MessagesList = ({messages}: MessagesListProps) => {
    return (
        <Container>

            {messages.map(message => {
                return (
                    <Message message={message} key={message.id} />
                )
            })}

        </Container>
    );
};

const Container = styled.div`
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
`