import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`    
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: white;
    background-color: ${props => props.theme.colors.grey};
    padding: 10px 0 10px 0;
`;

export const Footer: FunctionComponent = () => {
    return (
        <FooterStyled>Copyright © 2021 Monika Janas</FooterStyled>
    );
};
