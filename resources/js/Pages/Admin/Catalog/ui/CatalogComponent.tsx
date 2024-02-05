import AutocompleteComponent from "@/Components/MuiComponents/AutocompliteComponent";
import TableComponent from "@/Components/MuiComponents/TableComponent";
import { Catalog } from "@/Entities/Catalog/model/types";

import { router, useForm } from "@inertiajs/react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { listData } from "../CatalogPage";
import DialogComponent from "@/Components/MuiComponents/DialogComponent";


interface CatalogComponentProps{
  list: listData;
}

const CatalogComponent = ({list}: CatalogComponentProps) => {
  const {data, setData, post, reset} = useForm({title: '', category_id: '', catalog_id: 0});
    
  const {categories} = list;
  const [openDialog, setOpenDialog] = useState(false);
  const [catalogs, setCatalogs] = useState(list.catalogs);
  const [category_id, setCategory_id] = useState(null);

  const handleOpenDialog = (id: number) =>{
    setOpenDialog(true);
    setData('catalog_id', id);
  }

  console.log(data.catalog_id);
  

  const handleChange = (e: any) => {
    setCategory_id(e.target.value);
    setData('category_id', e.target.value);      
  }
      
  const filterCatalogs  = (): Catalog[] => {
    let filtredData = [];
    if(category_id === null || category_id === undefined) {
      return catalogs;
    } else {
      filtredData = catalogs.filter((catalog: Catalog) => catalog.category_id == category_id);
      return filtredData;
    }
  }
    const handleDelete = (id: number) =>{
      router.delete(route('catalog.destroy', data.catalog_id), 
      {
        preserveScroll: true,
        onSuccess: (res) => {     
          setOpenDialog(false);     
          setCatalogs(res.props.list?.catalogs)
        }
        
      });
    }

    const handleAddCatalog = () =>{
      post(route('catalog.store'), 
      {
        onSuccess: (res) => {
          reset('title');
          setCatalogs(res.props.list?.catalogs);
        }
        
      } )
      
    }

    return (
        <Grid container>
          <DialogComponent 
            maxWidth={'sm'}
            open={openDialog} 
            hasTitle 
            hasActions 
            titleText="Удалить подкатегорию?" 
            onClose={()=>setOpenDialog(false)} 
            handleAgree={handleDelete}
          />
            <Grid item xs={12}>
                <AutocompleteComponent 
                  label="Категория" 
                  noOptionsText="Нет категорий" 
                  options={categories} 
                  handleChange={handleChange}
                />
                <Box>
                    <TextField 
                      variant="outlined" 
                      label="Название каталога" 
                      name="title" 
                      value={data.title}
                      onChange={e => setData('title', e.target.value)}
                    />
                    <Button variant="outlined" onClick={handleAddCatalog}>Добавить</Button>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <TableComponent 
                  columnTitle="Каталоги"
                  rows={filterCatalogs()} 
                  style={{}} 
                  onDelete={handleOpenDialog}
                />
            </Grid>
            
        </Grid>
    );
}

export default CatalogComponent;
