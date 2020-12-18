import { NavLink } from 'react-router-dom';
import React from 'react';

export const NavigationBar = () => {
    return (
        <nav className="navigationMenu">
            <ul>
                <li>
                    <NavLink exact to="/">Monika Janas</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>
        </nav>
    );
};