import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavigationStyled = styled.nav`
    display: flex;
    flex-flow column wrap;
    justify-content: flex-start;

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: ${props => props.theme.colors.grey};
    }
    
    li {
        float: left;
    }
    
    li a {
        display: block;
        color: ${props => props.theme.colors.white};
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    li a:hover {
        background-color: ${props => props.theme.colors.lightGrey};
    }
`;

export const NavigationBar = () => {
    return (
        <NavigationStyled>
            <ul>
                <li>
                    <NavLink exact to="/">Monika Janas</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
        </NavigationStyled>
    );
};