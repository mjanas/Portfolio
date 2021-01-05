import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Page } from '../components/Page';
import { useMarkdown } from '../components/use-markdown';
import home from "../content/Home.md";

export const Home = () => {

    const { markdown } = useMarkdown(home);

    return (
        <Page>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </Page>
    );
};