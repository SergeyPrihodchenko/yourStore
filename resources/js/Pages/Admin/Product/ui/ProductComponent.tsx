import { ThemeProvider } from "@emotion/react";
import { Grid, TextField } from "@mui/material";

const ProductComponent = () => {

    
    return (
        <Grid container sx={{maxWidth: '1400px', padding: '10px', border: 'solid 1px black', margin: '77px auto 0 auto'}}>
            <Grid item xs={12}>
                <TextField sx={{'&': {'*': {'*:focus': {outline: 'none', outlineOffset: 'none', border: '3px solid red'}}}, border: 'none'}} label='test'/>
            </Grid>
        </Grid>
    );
}

export default ProductComponent;