import { Button, Grid, TextField } from "@mui/material";
import AutocompleteComponent from "../../../../Components/MuiComponents/AutocompliteComponent";
import TextAreaComponent from "../../../../Components/MuiComponents/TextAreaComponent";
import { useEffect, useState } from "react";
import {Head} from "@inertiajs/react";

const ProductPanelComponent = ({categories, catalogs}: any) => {

    const [filtredCatalogs, setFiltredCatalog] = useState([]);
    const [categoryId, setCategoryId] = useState(null);
    const [catalogId, setCatalogId] = useState(null);

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

    const handleChangeCategory = (e: any) => {
        setCategoryId(e.target.value);
    }

    const handleChangeCatalog = (e: any) => {
        setCatalogId(e.target.value);
    }

    const filterCatalogs = () => {
        if(categoryId == null || categoryId == undefined) {
            setFiltredCatalog([]);
        } else {
            setFiltredCatalog(catalogs.filter((catalog: Catalog) => catalog.category_id == categoryId));
        }
    }

    useEffect(() => {
        filterCatalogs();
    }, [categoryId]);

    useEffect(() => {
        handleChange(catalogId, 'catalog_id');
    }, [catalogId]);

    return (
        <Grid container gap={1} sx={{maxWidth: '1400px', padding: '10px', border: 'solid 1px black', margin: '77px auto 0 auto', justifyContent: 'center'}}>
            <Head title="Product" />
            <Grid item xs={12} sx={{margin: '0 auto', textAlign: 'center'}}>
                <TextField label="Название" variant="outlined" helperText="Правила к записи" value={productData.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {handleChange(e.target.value, 'title')}}/>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <AutocompleteComponent noOptionsText='Нет категорий' style={{marginRight: '10px'}} options={categories} label="Категория" handleChange={handleChangeCategory}/>
                <AutocompleteComponent noOptionsText='Нет каталогов' style={{}} options={filtredCatalogs} label={categoryId == null ? "Выберите категорию" : "Каталог"} handleChange={handleChangeCatalog}/>
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
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
                <Button variant="outlined">Добавить продукт</Button>
            </Grid>
        </Grid>
    );
}

export default ProductPanelComponent;
