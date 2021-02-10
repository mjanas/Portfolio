import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div<ISkillCardProps>`
    padding: 10px 10px 10px 10px;
    width: 4rem;
    height: 4rem;
    justify-content: center;
    align-items: center;

    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("${(props) => props.imageUrl}");
    background-position: center;
    transition: transform ease 200ms;

    :hover {
        transform: scale(1.05);
    }
`;

interface ISkillCardProps {
    title: string;
    imageUrl: string;
}

export const SkillCard = (props: ISkillCardProps): JSX.Element => {

    return (
        <>
            <CardStyled
                title={props.title}
                imageUrl={props.imageUrl}
            />
        </>
    );
};