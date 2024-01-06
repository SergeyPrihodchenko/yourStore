import { Autocomplete, TextField } from "@mui/material"

type AutocompleteComponent = {
    style?: any,
    options?: any,
    label?: string
}

const AutocompleteComponent = ({style, options, label}: AutocompleteComponent) => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ ...style, width: 300 }}
            renderInput={(params) => <TextField {...params} label={label}/>}
        />
    );
}

export default AutocompleteComponent;