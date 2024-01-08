import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {Tab} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {router} from "@inertiajs/react";
interface  AdminTabsProps{

}

console.log('log',route().current('admin.product'))

interface LinkTabProps {
    label?: string;
    href?: string;
    selected?: boolean;

}
function LinkTab(props: LinkTabProps) {
    console.log('selected',props.selected);
    return (
        <Tab
            component="a"
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

                <Tab component={'a'} aria-current={route().current('dashboard') && 'page'} label={"Dashboard"} onClick={()=> router.get(route("dashboard"))} />
                {/*<Tab label={"Product"} onClick={()=> handleTabClick('admin.product')} value={1} />*/}
                <Tab component={'a'} aria-current={route().current('admin.product') && 'page'} label={"product"} onClick={()=> router.get(route("admin.product"))} />
                {/*{paths.map(path => <LinkTab key={path.name} label={path.name}  onClick={()=>handleTabClick(path.path)}  /> )}*/}

            </Tabs>
        </Box>
    );
}
