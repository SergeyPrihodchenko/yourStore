import AutocompleteComponent from "@/Components/MuiComponents/AutocompliteComponent";
import TableComponent from "@/Components/MuiComponents/TableComponent";
import { useFindProductsByTitleMutation } from "@/Entities/Product/modul/RTLQuery";
import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const ProductListComponent = ({categories, catalogs, products}: any) => {

    const [serchStr, setSerchStr] = useState('');

    const [listProducts, setListProducts] = useState(products);

    const [findByTitle, {}] = useFindProductsByTitleMutation();

    const fetchFindByTitle = async () => {
        const data: any = await findByTitle(serchStr);        
        setListProducts(data.data.products);
    }

    const handleChange = (e: any) => {
        setSerchStr(e.target.value);
    }

    useEffect(() => {
        if(serchStr.length > 2) {
            fetchFindByTitle();
        } else {
            setListProducts(products);
        }
    }, [serchStr]);
    
    return (
        <Grid container sx={{padding: '50px 0px'}}>
            <Grid item xs={12}>
                <TextField variant="outlined" value={serchStr} label='Поиск' onChange={handleChange}/>
            </Grid>
            <Grid item xs={12}>
                <AutocompleteComponent label="Категории" noOptionsText="Нет категорий" options={categories} style={{}}/>
                <AutocompleteComponent label="Каталоги" noOptionsText="Нет каталогов" options={catalogs} style={{}}/>
            </Grid>
            <Grid item xs={12}>
                <TableComponent rows={listProducts}/>
            </Grid>
        </Grid>
    );
}

export default ProductListComponent;