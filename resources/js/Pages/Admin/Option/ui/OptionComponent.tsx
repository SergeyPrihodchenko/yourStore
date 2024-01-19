import TableComponent from "@/Components/MuiComponents/TableComponent";
import { router } from "@inertiajs/react";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const OptionComponent = ({options}: any) => {

    const [valueTitle, setValueTitle] = useState('');

    const handleChangeTitle = (e: any) => {
        setValueTitle(e.target.value);
    } 
    
    const setOption = () => {
        router.post(route('setOption'), {title: valueTitle}, {
            onSuccess: (result) => {
                setValueTitle('');
                router.reload({only: ['options']});
            },
            onError: (err) => {
                console.log(err);
            }
        });
    }
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Название опции" helperText="Правила добавления" onChange={handleChangeTitle} value={valueTitle}/>
                <Button variant="outlined" onClick={setOption}>Добавить</Button>
            </Grid>
            <Grid item xs={6}>
                <TableComponent rows={options}/>
            </Grid>
            <Grid item xs={6}>
                <TableComponent rows={options}/>
            </Grid>
        </Grid>
    );
}

export default OptionComponent;