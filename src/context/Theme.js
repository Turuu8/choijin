import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Theme = createTheme({
    palette: {
        primary: {
            main: "#841b23",
            light: '#fff',
            second: "#000",
            secondary: '#650308',
        },
        background: {
            default: '#3e0000',
        },
    },
    multilineColor:{
        color:'red'
    }
})

export const ThemeContext = ({ children }) => {
    return <ThemeProvider theme={Theme} >{children}</ThemeProvider>
}