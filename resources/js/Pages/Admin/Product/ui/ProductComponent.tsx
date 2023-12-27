import { Grid, TextField } from "@mui/material";
import AutocompleteComponent from "../../../../Components/MuiComponents/AutocompliteComponent";
import TextAreaComponent from "../../../../Components/MuiComponents/TextAreaComponent";
import { useState } from "react";

const ProductComponent = () => {

    const [productData, setProductData] = useState({
        title: '',
        catalog_id: '',
        price: '',
        quantity: '',
        description: ''
    });

    const handleChange = (value: any, name: string) => {
        setProductData({...productData, [name]: value});
    }

    return (
        <Grid container gap={1} sx={{maxWidth: '1400px', padding: '10px', border: 'solid 1px black', margin: '77px auto 0 auto', justifyContent: 'center'}}>
            <Grid item xs={12} sx={{margin: '0 auto', textAlign: 'center'}}>
                <TextField label="Название" variant="outlined" helperText="Правила к записи" value={productData.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleChange(e.target.value, 'title')}}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <AutocompleteComponent style={{marginRight: '10px'}} options={[]} label="Категория"/>
                <AutocompleteComponent style={{}} options={[]} label="Каталог"/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <TextField label="Цена" variant="outlined" type="number" helperText="Правила к записи" value={productData.price} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleChange(e.target.value, 'price')}}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <TextField label="Количество" variant="outlined" type="number" helperText="Правила к записи" value={productData.quantity} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleChange(e.target.value, 'quantity')}}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <TextAreaComponent style={{width: {xs: '360px', ml: '900px'}}} value={productData.description} handleChange={handleChange}/>
            </Grid>
        </Grid>
    );
}

export default ProductComponent;