import { useEffect, useState } from "react";

interface IMarkdownResult {
    markdown: string;
}

export function useMarkdown(filePath: string): IMarkdownResult {
    const [markdown, setMarkdown] = useState<string>("");

    useEffect(() => {
        fetch(filePath)
        .then((response) => response.text())
        .then((text) => {
            setMarkdown(text);
        })
    }, []);

    return {
        markdown,
    };
}
