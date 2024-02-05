import { Autocomplete, Box, TextField } from "@mui/material"

type AutocompleteComponent = {
    style?: any,
    options: any,
    label: string,
    handleChange?: any,
    noOptionsText: string,
}

const AutocompleteComponent = ({style, options, label, handleChange, noOptionsText}: AutocompleteComponent) => {


    return (
        <Autocomplete
            disablePortal
            options={options}
            sx={{ ...style, width: 300 }}
            onChange={handleChange}
            getOptionLabel={(option: any) => option.title}
            noOptionsText={noOptionsText}
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
