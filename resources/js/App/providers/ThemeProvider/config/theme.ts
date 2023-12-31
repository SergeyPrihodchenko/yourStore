import {createTheme, alpha} from "@mui/material/styles";

// Augment the palette to include a violet color
declare module '@mui/material/styles' {
    interface Palette {
        violet: Palette['primary'];
    }

    interface PaletteOptions {
        violet?: PaletteOptions['primary'];
    }
}
declare module '@mui/material/AppBar' {
    interface AppBarPropsColorOverrides {
        violet: true;
    }
}
const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

export const theme = createTheme({
    palette: {
        // mode: 'light',
        primary: {
            main: "#000",
        },
        secondary: {
            main: '#fff',
            dark: 'rgba(0, 0, 0, 0.60)'
        },
        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
        }
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    "[type='number']::-webkit-outer-spin-button, [type='number']::-webkit-inner-spin-button": {
                        '-webkit-appearance': 'none',
                    },
                    "[type='number'], [type='number']:hover, [type='number']:focus": {
                        appearance: 'none',
                        '-moz-appearance': 'textfield'
                    },
                    "[type='password'], [type='number'], [type='text']:focus": {
                        border: 'none',
                        boxShadow: 'none'
                    },
                }
            }
        }
    }
})