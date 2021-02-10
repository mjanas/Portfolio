import React from 'react';
import { Page } from '../components/Page';
import styled from "styled-components";

export const Blog = (): JSX.Element => {
    const testData: IProps[] = [
        {
            id: "c4922a25-a22a-4748-845f-d3ef9665ba17",
            title: "Hello world 1",
            subtitle: "This is Hello world 1",
            publishDate: "January 1, 2021",
        },
        {
            id: "87cef1f3-2b64-4bd0-8c70-33cc4cf58958",
            title: "Hello world 2",
            subtitle: "This is Hello world 2",
            publishDate: "February 1, 2021",
        },
        {
            id: "2fe9fb16-a113-4933-8954-8a1862ae745d",
            title: "Hello world 3",
            subtitle: "Hello world 3",
            publishDate: "March 1, 2021",
        },
    ];

    return (
        <Page>
            <StyledSection>
                {testData.map((item) => (
                    <li key={item.id}>
                        <Post
                            id={item.id}
                            title={item.title}
                            subtitle={item.subtitle}
                            publishDate={item.publishDate}
                        />
                    </li>
                ))}
            </StyledSection>
        </Page>
    );
};

const StyledSection = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 10px 50px 0px 0px;
    overflow: hidden;

    li {
        padding: 0px 0px 30px 0px;
    }
`;

const StyledDiv = styled.div`
    border: 1px solid ${props => props.theme.colors.silk};
    padding: 0px 10px 0px 10px;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: baseline;
`;

interface IProps {
    id: string;
    title: string;
    subtitle: string;
    publishDate: string;
}

const Post = (props: IProps): JSX.Element => {
    return (
        <StyledDiv>
            <div>
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
                <TagList>
                    <Tag itemName={"C#"}/>
                    <Tag itemName={"React.js"} />
                </TagList>
            </div>
            <h5>{props.publishDate}</h5>
        </StyledDiv>
    );
};

const TagStyled = styled.div`
    background-color: ${props => props.theme.colors.turquoise};
    color: ${props => props.theme.colors.darkGrey};
    border-radius: 10px 5px;
    padding: 5px;
    margin-left: 5px;
    margin-right: 5px;
`;

const TagList = styled.div`
    display: inline-flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 0px 0px 10px 0px;
`;

interface ITagProps {
    itemName: string;
}

const Tag = (props: ITagProps): JSX.Element => {
    return (
        <>
            <TagStyled>{props.itemName}</TagStyled>
        </>
    );
};