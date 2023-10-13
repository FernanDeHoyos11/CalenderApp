import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { CyanTheme } from "./CyanTheme"



export const AppTheme = ({children}) => {

    return(
        <ThemeProvider theme={CyanTheme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}