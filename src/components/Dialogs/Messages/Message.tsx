import React, {useState} from 'react';
import styled from "styled-components";
import {MessageType} from "../../../App";

type MessageProps = {
    message: MessageType;
}

export const Message = ({message}: MessageProps) => {

    return (
        <MessageBlock myMessage={message.myMessage}>
            <Avatar>
                <img src="" alt=""/>
                <span>{message.author}</span>
            </Avatar>

            <MessageText>
                <p>{message.message}</p>
            </MessageText>
        </MessageBlock>
    );
};


type MessageBlockStyle = {
    myMessage: boolean
}

const MessageBlock = styled.div<MessageBlockStyle>`
    display: flex;
    flex-direction: ${({ myMessage }) => (myMessage ? 'row-reverse' : 'row')};
    justify-content: ${({ myMessage }) => (myMessage ? 'end' : 'start')};
    gap: 15px;
    max-width: 300px;
    margin: ${({ myMessage }) => (myMessage ? '0 0 10px auto' : 'auto 0 10px 0')};
`

const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        background: #282c34;
        //border-radius: 50%;
        width: 50px;
        height: 50px; 
    }
`

const MessageText = styled.div`
    background: #282c34;
    padding: 8px 25px;
    max-width: 200px;
    color: white;
`