import React from 'react';
import styled from "styled-components";
import Logo from '../../../logo.svg'

export const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} width="75px" height="75px" alt=""/>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    background: darkslategrey;
    margin: 0 0 10px 0;
`