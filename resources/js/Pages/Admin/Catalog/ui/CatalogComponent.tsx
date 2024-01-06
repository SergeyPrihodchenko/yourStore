import AutocompleteComponent from "@/Components/MuiComponents/AutocompliteComponent";
import { useGetCategoryQuery } from "@/Entities/Category/model/RTKQuery";
import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const CatalogComponent = () => {

 
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <AutocompleteComponent label="Категория" options={} />
                <TextField variant="outlined" label="Название каталога"/>
            </Grid>
        </Grid>
    );
}

export default CatalogComponent;