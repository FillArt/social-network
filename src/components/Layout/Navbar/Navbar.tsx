import React from 'react';
import styled from "styled-components";

export const Navbar = () => {
    return (
        <NavContainer>
            <nav>
                <ul>
                    <li><a href="">Profile</a></li>
                    <li><a href="">Message</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Settings</a></li>
                </ul>
            </nav>
        </NavContainer>
    );
};

const NavContainer = styled.article`
    background: darkslategrey;
    color: white;
    padding: 10px 15px;

    ul {
        list-style-type: none;
        padding: 0;

        & li {
            &:not(:last-child) {
                margin: 0 0 15px 0;
            }
            
            &:last-child {
                margin: 50px 0 0 0;
            }
            & > a {
                color: white;
                font-size: 25px;
                text-decoration: none;
            }
        }
    }
`