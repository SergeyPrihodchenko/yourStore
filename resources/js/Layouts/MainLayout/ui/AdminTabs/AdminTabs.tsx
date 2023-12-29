import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {Tab} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {router} from "@inertiajs/react";
interface  AdminTabsProps{

}

console.log(route().current('dashboard'))

interface LinkTabProps {
    label?: string;
    href?: string;
    selected?: boolean;

    onClick?: (routeStr: string) => void
    path?: string;
}
function LinkTab(props: LinkTabProps) {
    const {onClick} = props;
    console.log('selected',props.path);
    return (
        <Tab
            component="a"
            onClick={onClick}
            aria-current={props.selected && 'page'}
            {...props}
        />
    );
}
const paths = [
    {
        name: 'Dashboard',
        path: "dashboard"
    },
    {
        name: 'Product',
        path: "admin.product"
    },

];
export const AdminTabs = (props: AdminTabsProps) =>{
    const [value, setValue] = useState(0);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        console.log(event.target)
        setValue(newValue);
    };
    const handleTabClick = (routeStr: string) => {
        router.get(route(routeStr));
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >

                {/*<Tab label={"Dashboard"} onClick={()=> handleTabClick('dashboard')} value={0} />*/}
                {/*<Tab label={"Product"} onClick={()=> handleTabClick('admin.product')} value={1} />*/}
                {/*<Tab label={"Edit"} onClick={()=> router.get(route('profile.edit'))} value={2} />*/}
                {paths.map(path => <LinkTab label={path.name} path={path.path}  onClick={()=>handleTabClick(path.path)}  /> )}

            </Tabs>
        </Box>
    );
}
