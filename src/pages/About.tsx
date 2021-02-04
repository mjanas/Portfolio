import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Page } from '../components/Page';
import { useMarkdown } from '../components/use-markdown';
import about from "../content/About.md";

export const About = () => {
    const { markdown } = useMarkdown(about);

    return (
        <Page>
            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
            <div>
            </div>
        </Page>
    );
};