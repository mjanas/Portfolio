import React from 'react';
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

export const Footer = () => {
    return (
        <FooterStyled>Copyright © 2020 Monika Janas</FooterStyled>
    );
};
