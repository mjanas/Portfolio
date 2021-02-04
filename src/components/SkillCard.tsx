import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div<ISkillCardProps>`
    padding: 10px 10px 10px 10px;
    border: 1px solid black;
    width: 4rem;
    height: 4rem;
    justify-content: center;
    align-items: center;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("${(props) => props.imageUrl}");
    background-position: center;
`;

interface ISkillCardProps {
    title: string;
    imageUrl: string;
}

export const SkillCard = (props: ISkillCardProps) => {

    return (
        <>
            <CardStyled
                title={props.title}
                imageUrl={props.imageUrl}
            />
        </>
    );
};