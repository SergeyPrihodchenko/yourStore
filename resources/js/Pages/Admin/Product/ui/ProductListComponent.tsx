import AutocompleteComponent from "@/Components/MuiComponents/AutocompliteComponent";
import TableComponent from "@/Components/MuiComponents/TableComponent";
import { useGetCatalogsByIdQuery } from "@/Entities/Catalog/model/RTKQuery";
import { useFindProductsByTitleMutation, useGetProductsByCatalogQuery } from "@/Entities/Product/modul/RTLQuery";
import { Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const ProductListComponent = ({categories, products}: any) => {

    const [serchStr, setSerchStr] = useState('');

    const [listProducts, setListProducts] = useState(products);

    const [categoryId, setCategoryId] = useState(0);
    const [catalogId, setCatalogId] = useState(0);

    const [findByTitle, {}] = useFindProductsByTitleMutation();
    const {isSuccess: isSuccessCategory, data: catalogs} = useGetCatalogsByIdQuery(categoryId);
    const {isSuccess: isSuccessCatalog, data: productsByCatalog} = useGetProductsByCatalogQuery(catalogId);

    const fetchFindByTitle = async () => {
        const data: any = await findByTitle(serchStr);        
        setListProducts(data.data.products);
    }

    const handleChange = (e: any) => {
        setSerchStr(e.target.value);
    }

    const handleChangeCategory = (e: any) => {
        setCategoryId(e.target.value);
    }

    const handleChangeCatalogs = (e: any) => {
        setCatalogId(e.target.value);
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
                <AutocompleteComponent label="Категории" noOptionsText="Нет категорий" options={categories} style={{}} handleChange={handleChangeCategory}/>
                <AutocompleteComponent label="Каталоги" noOptionsText="Нет каталогов" options={isSuccessCategory ? catalogs.catalogs : []} style={{}} handleChange={handleChangeCatalogs}/>
            </Grid>
            <Grid item xs={12}>
                <TableComponent rows={isSuccessCatalog ? productsByCatalog.products : listProducts}/>
            </Grid>
        </Grid>
    );
}

export default ProductListComponent;