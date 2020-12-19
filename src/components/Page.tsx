import React from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { NavigationBar } from './NavigationBar';

export const SectionPage = styled.body`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.darkGrey};
    color: ${props => props.theme.colors.white};
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