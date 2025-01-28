import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const RoutesItem: [string, string][] = [
    ['/', 'Profile'],
    ['/dialogs', 'Messages'],
    ['/news', 'News'],
    ['/music', 'Music'],
    ['/settings', 'Settings'],
]

export const Navbar = () => {
    return (
        <NavContainer>
            <nav>
                <ul>
                    {RoutesItem.map(([path, label], index) => (
                        <li key={path}>
                            <NavLink to={path}>{label}</NavLink>
                        </li>
                    ))}
                    {/*<li><a href="">Profile</a></li>*/}
                    {/*<li><a href="">Message</a></li>*/}
                    {/*<li><a href="">News</a></li>*/}
                    {/*<li><a href="">Music</a></li>*/}
                    {/*<li><a href="">Settings</a></li>*/}
                </ul>
            </nav>
        </NavContainer>
    );
};

const NavContainer = styled.article`
    min-height: calc(100vh - 105px);
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