import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { AdminProductPanelInterface } from "../model/types";
import { Option, Value } from "@/Entities/Option/model/types";
import DialogsForInput from "./components/DialogsForInput";
import EditIcon from '@mui/icons-material/Edit';
import DialogsForAutocomplite from "./components/DialogsForAutocomplite";
import { Catalog } from "@/Entities/Catalog/model/types";
import { useEffect, useState } from "react";

const ProductShowOptionComponent = ({catalog, category, product, values, images, options, categories, catalogs}: AdminProductPanelInterface) => {
  console.log(catalogs);
  
    const mergeValues = (options: Option[], values: Value[]) => {

      options.forEach(option => {

        option.values = []

          values.forEach(value => {
            if(option.id == value.option_id) {
              option.values?.push(value);
            }
          })
      });
    }

    mergeValues(options, values);

    const [category_id, setCategory_id] = useState(null);
    const [catalogsList, setCatalogsList] = useState<Catalog[]>([]);

    const handleChangeCategory = (e: any) => {
      setCategory_id(e.target.value);
    }

    const optionsDate: any = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };

    const date = new Date(product.updated_at);

    const dateUpdate = date.toLocaleString("ru", optionsDate);

    const filterCatalogs  = () => {
      let filtredData = [];
      if(category_id === null || category_id === undefined) {
        setCatalogsList([]);
      } else {
        filtredData = catalogs.filter((catalog: Catalog) => catalog.category_id == category_id);
        setCatalogsList(filtredData)
      }
    }

    useEffect(() => {
      filterCatalogs()
    }, [category_id])
        
    return (
        <Grid container sx={{padding: '20px 0'}}>
        <Grid item xs={12}>
      <Typography variant="h2" gutterBottom>
        {product.title} <DialogsForInput title='Название' value={product.title}><EditIcon sx={{color: '#363636'}}/></DialogsForInput>
      </Typography>
      <Box sx={{boxShadow: '0 5px 20px', borderRadius: '16px', padding: '5px', margin: '10px 0', position: 'relative'}}>
        <DialogsForAutocomplite handleChangeCategory={handleChangeCategory} optionsCategory={categories} optionsCatalog={catalogsList}><EditIcon sx={{color: '#363636'}}/></DialogsForAutocomplite>
      <Typography variant="h3" gutterBottom>
        Категория:<br/> {category.title}
      </Typography>
      <Typography variant="h4" gutterBottom>
        Подкатегория:<br/> {catalog.title} 
      </Typography>
      </Box>
      <ImageList sx={{ width: '100%', height: 250 }} cols={4} rowHeight={200}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={item.img_path}
            src={item.img_path}
            alt={item.img_path}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      <Typography variant="body1" gutterBottom>
        Цена: {product.price} <DialogsForInput title='Цена' value={product.price}><EditIcon sx={{color: '#363636'}}/></DialogsForInput>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Количество: {product.quantity} <DialogsForInput title='Количество' value={product.quantity}><EditIcon sx={{color: '#363636'}}/></DialogsForInput>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Описание:<br/> {product.description}
      </Typography>
      <br/>
      <Typography variant="body1" gutterBottom>
        Дата создания: {dateUpdate}
      </Typography>
      <br/>
       <Box sx={{border: 'solid 1px black', position: 'relative'}}>
       {options?.map((option: Option) => (
        <>
          <Typography key={option.id} variant="body1" gutterBottom>{option.title} :</Typography>
          {option.values?.map(value => (<p key={value.id}>{value.title}</p>))}
          <br/>
        </>
       ))}
       </Box>
            </Grid>
        </Grid>
    );
}

export default ProductShowOptionComponent;