/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        turquoise: "#48e5c2",
        white: "#fcfaf9",
        silk: "#f3d3bd",
        grey: "#5e5e5e",
        darkGrey: "#333333",
        lightGrey: "#858585",
        veryLightGrey: "#e5e5e5",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        normal: "2em",
        large: "3em"
    }
}
interface IProps {
    children: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
const Theme = ({ children }: IProps) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;