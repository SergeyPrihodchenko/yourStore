import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import {Tab} from "@mui/material";
import {SyntheticEvent, useState} from "react";
import {AdminTabPanel} from "@/Layouts/MainLayout/ui/AdminTabs/AdminTabPanel";

interface  AdminTabsProps{}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const AdminTabs = (props: AdminTabsProps) =>{
    const [value, setValue] = useState(0);
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%', marginTop: '56px', backgroundColor: 'secondary.main' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                role="navigation"
            >
                <Tab label="Продукты" {...a11yProps(0)} />
                <Tab label="Категории" {...a11yProps(1)} />
            </Tabs>
            <AdminTabPanel value={value} index={0}>
                Продукты
            </AdminTabPanel>
            <AdminTabPanel value={value} index={1}>
                Категории
            </AdminTabPanel>
        </Box>
    );
}
export default AdminTabs;
