"use client";

import {
    ChakraProvider,
    createSystem,
    defaultConfig,
    defineConfig,
    defineRecipe,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
    const buttonRecipe = defineRecipe({
        base: {},
        variants: {
            variant: {
                plain: {
                    border: "none",
                    color: {
                        _light: "colorsPalette.contrast",
                        _dark: "colorPalette.contrast",
                    },
                },
                outline: {
                    borderColor: "colorPalette.contrast",
                    color: {
                        _light: "colorPalette.500",
                        _dark: "colorPalette.contrast",
                    },
                    _hover: {
                        borderColor: "colorPalette.500",
                        color: {
                            _light: "colorPalette.500",
                            _dark: "colorPalette.500",
                        },
                    },
                },
            },
        },
    });
    const config = defineConfig({
        cssVarsRoot: ":where(html)",
        strictTokens: true,
        globalCss: {
            html: {
                colorPalette: "green",
            },
        },
        theme: {
            semanticTokens: {
                colors: {
                    bg: {
                        DEFAULT: {
                            value: { _dark: "#202020" },
                        },
                    },
                },
            },
            tokens: {
                fonts: {
                    heading: {
                        DEFAULT: {
                            value: "Roboto sans-serif",
                        },
                    },
                    body: {
                        DEFAULT: {
                            value: "Roboto sans-serif",
                        },
                    },
                },
            },
            recipes: {
                button: buttonRecipe,
            },
        },
    });
    const system = createSystem(defaultConfig, config);

    return (
        <ChakraProvider value={system}>
            <ColorModeProvider {...props} defaultTheme="light" />
        </ChakraProvider>
    );
}
