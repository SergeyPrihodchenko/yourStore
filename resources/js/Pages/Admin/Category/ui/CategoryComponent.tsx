import { Button, Grid, TextField } from "@mui/material";
import TableComponent from "./TableComponent";
import { useGetCategoryQuery } from "@/Entities/Category/model/RTKQuery";
import { useState } from "react";

const CategoryComponent = () => {

    const {data, isSuccess} = useGetCategoryQuery('');
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField variant="outlined" helperText='текст помощник'/>
                <Button variant="outlined">Создать</Button>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <TableComponent categories={isSuccess ? data : []}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default CategoryComponent;