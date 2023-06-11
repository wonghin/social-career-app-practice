import React from 'react';
import { NativeBaseProvider, extendTheme, Radio, Checkbox } from 'native-base';



export const customeTheme = extendTheme({
    colors: {
        main: {
            50: "#ff111114",
            100: "#ffefed",
            200: "#ffcec5",
            300: "#ffac9d",
            400: "#ff8c77",
            500: "#fa7963",
            600: "#f46a51",
            700: "#ec5b41",
            800: "#e34d33",
            900: "#d84126",
            1000: "#2e3339"
        },
        Primary: {
            50: "#FFFEEF",
            100: "#FEFCCC",
            200: "#FDF899",
            300: "#FBF266",
            400: "#F8EB40",
            500: "#FFFF29",
            600: "#EDD308",
            700: "#CBB205",
            800: "#8D7E00",
            900: "#756800",
        },
        Secondary: {
            50: "#FDFEFF",
            100: "#EBFOF5",
            200: "#D7E2EB",
            300: "#ABB7C3",
            400: "#737D88",
            500: "#2E333A",
            600: "#212731",
            700: "#171D29",
            800: "#0E1421",
            900: "#080D1B",
        }
    },
    config: {
        initialColorMode: 'light',
    },
    components: {
        Button: {
            baseStyle: {
                rounded: 'md',
            },
            defaultProps: {
                colorScheme: "main",
                variant: 'solid',
            },
        },
        Checkbox: {
            defaultProps: {
                colorScheme: "main",
                variant: 'solid',
            },
        },
        Heading: {
            baseStyle: ({ colorMode }: any) => {
                return {
                    // color: colorMode === 'dark' ? 'red.300' : 'blue.300',
                    fontWeight: 'normal',
                };
            },
        },
    },
});


export const lightDarkMode = {
    bg: {
        light: "#F2F2F7",
        dark: 'muted.800'
    },
    scrollBar: {
        light: 'gray.400',
        dark: 'white'
    },
    cardBg: {
        light: "white",
        // dark: theme.colors.main[1000]
        dark: 'dark.200'
    },

    subTitle: {
        light: 'gray.500',
        dark: 'gray.200'
    },
    bottomBarIcon: {
        light: 'black',
        dark: 'white'
    },

    BottomBar: {
        bg: {
            light: 'white',
            dark: 'black'
        },
        label: {
            light: 'black',
            dark: 'white'
        }
    },

    TopBar: {
        bg: {
            light: 'white',
            dark: 'black'
        },
        text: {
            light: 'black',
            dark: 'white'
        },
        indicator: {

        }
    },
    input: {
        title: {
            light: 'black',
            dark: 'white'
        },
        disableTitle: {
            light: 'gray.500',
            dark: 'gray.200'
        }
    },

    errorMessage: {
        light: 'error.600',
        dark: 'error.500'
    }
}

