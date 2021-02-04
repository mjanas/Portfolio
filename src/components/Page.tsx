import React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { NavigationBar } from './NavigationBar';

export const SectionPage = styled.body`
    min-height: 100vh;
    background-color: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.white};
    padding: 20px 20px 20px 20px;

    h1 {
        margin-top: 0;
    }
`;

interface IProps {
    children: React.ReactNode;
}

export const Page = ({ children }: IProps) => {
    return (
        <React.Fragment>
            <NavigationBar />
            <SectionPage>
                {children}
            </SectionPage>
            <Footer/>
        </React.Fragment>
    );

};