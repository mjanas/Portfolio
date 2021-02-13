import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavigationStyled = styled.nav`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: baseline;
    background-color: ${props => props.theme.colors.grey};

    a {
        display: block;
        color: ${props => props.theme.colors.white};
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;

        &.serif {
            font-family: serif;
            font-weight: bold;
        }
    }

    a:hover {
        background-color: ${props => props.theme.colors.lightGrey};
    }
`;

export const NavigationBar = (): JSX.Element => {
    return (
        <NavigationStyled>
            <NavLink className="serif" exact to="/">MJ</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/blog">Blog</NavLink>
        </NavigationStyled>
    );
};