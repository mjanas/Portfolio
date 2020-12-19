import React from 'react';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';

export const About = () => {
    return (
        <React.Fragment>
            <NavigationBar />
            <div>
                <h1> About page </h1>
            </div>
            <Footer />
        </React.Fragment>
    );
};