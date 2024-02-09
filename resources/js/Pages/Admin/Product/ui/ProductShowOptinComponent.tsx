import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { AdminProductPanelInterface } from "../model/types";
import { Option } from "@/Entities/Option/model/types";
import CustomizedDialogsForInput from "./components/CustomizedDialogsForInput";
import EditIcon from '@mui/icons-material/Edit';

const ProductShowOptionComponent = ({catalog, category, product, values, images, options}: AdminProductPanelInterface) => {
    console.log(values);

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
    
    
    return (
        <Grid container sx={{padding: '50px'}}>
            <Grid item xs={12}>
      <Typography variant="h2" gutterBottom>
        {product.title} <CustomizedDialogsForInput><EditIcon sx={{color: '#363636'}}/></CustomizedDialogsForInput>
      </Typography>
      <Typography variant="h3" gutterBottom>
        Категория: {category.title}
      </Typography>
      <Typography variant="h4" gutterBottom>
        Подкатегория: {catalog.title} 
      </Typography>
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
        Цена: {product.price} <CustomizedDialogsForInput title='Цена' value={product.price}><EditIcon sx={{color: '#363636'}}/></CustomizedDialogsForInput>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Количество: {product.quantity} <CustomizedDialogsForInput><EditIcon sx={{color: '#363636'}}/></CustomizedDialogsForInput>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Описание:<br/> {product.description}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Дата создания: {dateUpdate}
      </Typography>
       {options && options.map((option: Option) => {return (
          <Typography variant="body1" gutterBottom>{option.title}</Typography>
       )})}
       {values && values.map((option: Option) => {return (
          <Typography variant="body1" gutterBottom>{option.title}</Typography>
       )})}
            </Grid>
        </Grid>
    );
}

export default ProductShowOptionComponent;