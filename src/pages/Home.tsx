import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Page } from '../components/Page';
import { useMarkdown } from '../components/use-markdown';
import about from "../content/About.md";
import { SkillCard } from '../components/SkillCard';
import styled from 'styled-components';

const Skills = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

export const Home = (): JSX.Element => {
    const { markdown: aboutMarkdown } = useMarkdown(about);

    return (
        <Page>
            <ReactMarkdown>{aboutMarkdown}</ReactMarkdown>
            <Skills>
                <SkillCard title={"React.js"} imageUrl={"/static/react_logo.png"}/>
                <SkillCard title={"C#"} imageUrl={"/static/csharp_logo.png"} />
                <SkillCard title={"C++"} imageUrl={"/static/cpp_logo.png"} />
            </Skills>
        </Page>
    );
};