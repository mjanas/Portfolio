import React from 'react';
import { NavigationBar } from '../components/NavigationBar';

export const Home = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            <div>
                <h1> Home page </h1>
            </div>
        </React.Fragment>
    );
};