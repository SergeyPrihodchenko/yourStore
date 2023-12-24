import {ReactNode} from "react";
import {ThemeProvider} from "@mui/material";
import {theme} from "@/App/providers/ThemeProvider/config/theme";


interface AppThemeProviderProps {
    children: ReactNode
}
const AppThemeProvider = (props: AppThemeProviderProps) =>{
    const {children} = props;
return (
    <ThemeProvider theme={theme} >
        {children}
    </ThemeProvider>
)
}

export default AppThemeProvider;
