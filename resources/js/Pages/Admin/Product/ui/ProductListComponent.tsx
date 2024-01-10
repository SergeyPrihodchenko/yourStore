import AutocompleteComponent from "@/Components/MuiComponents/AutocompliteComponent";
import TableComponent from "@/Components/MuiComponents/TableComponent";
import { router, usePage } from "@inertiajs/react";
import { Grid, TextField } from "@mui/material";
import { useState } from "react";

const ProductListComponent = ({categories, catalogs, products}: any) => {

    const [serchStr, setSerchStr] = useState('');

    const serchFetch = async () => {

       router.post(route('serch'), {value: serchStr}, {
        onSuccess: () => {

            
        }
       });
    }

    const handleChange = (e: any) => {
        setSerchStr(e.target.value);
        if(serchStr.length > 2) {
            serchFetch()
        }
    }

    
    return (
        <Grid container sx={{padding: '50px 0px'}}>
            <Grid item xs={12}>
                <TextField variant="outlined" value={serchStr} label='Поиск' onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
                <AutocompleteComponent label="Категории" noOptionsText="Нет категорий" options={categories} style={{}}/>
                <AutocompleteComponent label="Каталоги" noOptionsText="Нет каталогов" options={catalogs} style={{}}/>
            </Grid>
            <Grid item xs={12}>
                <TableComponent rows={products}/>
            </Grid>
        </Grid>
    );
}

export default ProductListComponent;