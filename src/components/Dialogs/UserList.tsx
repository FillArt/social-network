import React from 'react';
import styled from "styled-components";
import {DialogType} from "../../App";

type UserListProps = {
    users: DialogType[]
}

export const UserList = ({users}: UserListProps) => {
    return (
        <List>

            {users.map(user => {
                return (
                    <li key={user.id}>
                        <a href="">{user.name}</a>
                    </li>
                )
            })}
        </List>
    );
};

const List = styled.ul`
    padding: 10px;
    box-sizing: border-box;
    margin: 0;
    min-height: calc(100vh - 145px);
    background: #282c34;
    
    li {
        list-style: none;
        &:not(:last-child) {
            margin: 0 0 30px 0;
        }
        
    }
    
    a {
        text-decoration: none;
        font-size: 20px;
        color: white;
    }
`