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
        primary: {
            darker: "#074541",
            dark: "#095d59",
            darkAlt: "#0b6e69",
            primary: "#0c7a75",
            secondary: "#1d8a85",
            tertiary: "#51afab",
            light: "#9dd7d4",
            lighter: "#c8eae8",
            lighterAlt: "f1faf9"
        },
        foreground: {
            black: "#000000",
            neutralDark: "#201f1e",
            neutralPrimary: "#323130",
            neutralPrimaryAlt: "#3b3a39",
            neutralSecondary: "#605e5c",
            neutralTertiary: "#a19f9d",
            white: "#fcfaf9"
        },
        background: {
            neutralTertiaryAlt: "#c6c5c4",
            neutralDark: "#201f1e",
            neutralQuaternaryAlt: "#d8d6d6",
            neutralLight: "#e8e6e5",
            neutralLighter: "#f2f0ef",
            neutralLighterAlt: "#f6f4f3",
        }
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