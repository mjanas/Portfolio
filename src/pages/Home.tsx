import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Page } from '../components/Page';
import { useMarkdown } from '../components/use-markdown';
import home from "../content/Home.md";
import about from "../content/About.md";
import { SkillCard } from '../components/SkillCard';

export const Home = () => {

    const { markdown: homeMarkdown } = useMarkdown(home);
    const { markdown: aboutMarkdown } = useMarkdown(about);

    return (
        <Page>
            {/* <ReactMarkdown>{homeMarkdown}</ReactMarkdown> */}
            <ReactMarkdown>{aboutMarkdown}</ReactMarkdown>
            <SkillCard title={"Hello"}/>
        </Page>
    );
};