import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
    padding: 25px 12px 18px;
    border: 1px solid black;
`;

interface ISkillCardProps {
    title: string;
}

export const SkillCard = (props: ISkillCardProps) => {

    return (
        <CardStyled>
            <h4>{props.title}</h4>
        </CardStyled>
    );
};