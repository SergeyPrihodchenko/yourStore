import AutocompleteComponent from "@/Components/MuiComponents/AutocompliteComponent";
import TableComponent from "@/Components/MuiComponents/TableComponent";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const CatalogComponent = ({data}: any) => {

    const {categories} = data;

    const [catalogs, setCatalogs] = useState(data.catalogs);
    const [category_id, setCategory_id] = useState(null);


    const handleChange = (e: any) => {
        setCategory_id(e.target.value);
    }


    const filterCatalogs  = () => {

        let filtredData = [];

        if(category_id === null || category_id === undefined) {
            return catalogs;
        } else {
            filtredData = catalogs.filter((catalog: Catalog) => catalog.category_id == category_id);
            return filtredData;
        }
    }

    return (
        <Grid container sx={{padding: '50px'}}>
            <Grid item xs={12}>
                <AutocompleteComponent label="Категория" noOptionsText="Нет категорий" options={categories} handleChange={handleChange}/>
                <Box>
                    <TextField variant="outlined" label="Название каталога"/>
                    <Button variant="outlined">Добавить</Button>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{padding: '10px'}}>
                <TableComponent rows={filterCatalogs()} style={{}}/>
            </Grid>
        </Grid>
    );
}

export default CatalogComponent;
