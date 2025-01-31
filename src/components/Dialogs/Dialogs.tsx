import React from 'react';
import styled from "styled-components";
import {UserList} from "./UserList";
import {MessagesList} from "./Messages/MessagesList";
import {DialogType, MessageType} from "../../App";


type DialogProps = {
    data: DialogType[];
    messages: MessageType[];
}

export const Dialogs = (props: DialogProps) => {
    return (
        <DialogsContainer>
            <h2>Dialogs</h2>
            <DialogsFlex>
                <UserList users={props.data} />
                <MessagesList messages={props.messages} />
            </DialogsFlex>
        </DialogsContainer>
    );
};

const DialogsContainer = styled.div`
    h2 {
        margin: 0 0 20px 0;
    }
`

const DialogsFlex = styled.div`
    display: grid;
    grid-template-columns: 3fr 9fr;
    gap: 10px;
`
