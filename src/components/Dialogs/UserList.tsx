import React from 'react';
import styled from "styled-components";

export const UserList = () => {
    return (
        <List>
            <li>
                <a href="">Artiom</a>
            </li>
            <li>
                <a href="">Elissa</a>
            </li>
            <li>
                <a href="">Vlad</a>
            </li>
            <li>
                <a href="">Max</a>
            </li>
            <li>
                <a href="">Dima</a>
            </li>
        </List>
    );
};

const List = styled.ul`
    padding: 0;
    margin: 0;
    
    li {
        list-style: none;
        &:not(:last-child) {
            margin: 0 0 30px 0;
        }
        
    }
    
    a {
        text-decoration: none;
        font-size: 25px;
        color: darkslategrey;
    }
`