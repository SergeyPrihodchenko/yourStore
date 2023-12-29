import {ReactNode} from "react";
import Box from "@mui/material/Box";


interface  AdminTabPanelProps{
    children?: ReactNode;
    value: number;
    index: number;

}
export const AdminTabPanel = (props: AdminTabPanelProps) =>{
    const {children, value, index, ...other} = props;
    return (<div role="tabpanel"
                 hidden={value !== index}
                 id={`simple-tabpanel-${index}`}
                 aria-labelledby={`simple-tab-${index}`}
                 {...other}>
        <Box sx={{p: 3}}>
            {children}
        </Box>
    </div>)
}

