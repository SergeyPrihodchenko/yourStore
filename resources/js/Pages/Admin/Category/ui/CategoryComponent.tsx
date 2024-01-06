import TableComponent from "@/Components/MuiComponents/TableComponent";
import { Button, Grid, TextField } from "@mui/material";

const CategoryComponent = () => {
    return (
        <Grid container sx={{maxWidth: '1400px', padding: '10px', border: 'solid 1px black', margin: '77px auto 0 auto', justifyContent: 'center'}}>
            <Grid item xs={12}>
                <TextField label="Название категории" variant="outlined" helperText='описание действий кнопки'/>
                <Button variant="outlined">Добавить</Button>
            </Grid>
            <Grid item xs={12}>
                <TableComponent/>
            </Grid>
        </Grid>
    );
}

export default CategoryComponent;
