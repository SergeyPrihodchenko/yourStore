import { Category } from "@/Entities/Category/model/types.model"
import { Autocomplete, Box, TextField } from "@mui/material"

type AutocompleteComponent = {
    style?: any,
    options?: any,
    label?: string,
    handleChanche?: Function; hendleChange(e: any):any
}

const AutocompleteComponent = ({style, options, label, hendleChange}: AutocompleteComponent) => {

    return (
        <Autocomplete
            disablePortal
            options={options}

            sx={{ ...style, width: 300 }}
            onChange={hendleChange}
            getOptionLabel={(option: any) => option.title}
            noOptionsText='нет категорий'
            renderOption={(props, option) => (
                <Box component="li" {...props} value={option.id} key={option.id}>
                    {option.title}
                </Box>
              )}
            renderInput={(params) => <TextField {...params} label={label}/>}
        />
    );
}

export default AutocompleteComponent;
