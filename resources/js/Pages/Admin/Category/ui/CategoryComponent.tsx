import TableComponent from "@/Components/MuiComponents/TableComponent";
import { router, useForm } from "@inertiajs/react";
import { Button, Grid, TextField } from "@mui/material";

interface Category{
  id: number;
  title: string;
}
interface CategoryComponentProps{
  categories: Category[];
}

const CategoryComponent = ({categories}: CategoryComponentProps) => {
  const {data, setData, post, errors} = useForm({
    title: ''
  });
  const handleSubmit = (e) =>{
    e.preventDefault();
    post(route('category.store'))

  }
  const handleDelete = (param: number) => {
    router.delete(route('category.destroy', param), {preserveScroll: true});
  }
 
    return (
        <Grid container sx={{maxWidth: '1400px', padding: '10px', border: 'solid 1px black', margin: '77px auto 0 auto', justifyContent: 'center'}}>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
              <TextField 
                label="Название категории" 
                value={data.title} 
                onChange={e => setData('title', e.target.value)}  
                variant="outlined" 
                helperText='описание действий кнопки'
              />
                <Button 
                  type="submit" 
                  variant="outlined" 
                  onClick={()=>router.post(route('category.store'))}
                >
                  Добавить
                </Button>
              </form>
                
            </Grid>
            <Grid item xs={12}>
                  <TableComponent rows={categories} onDelete={handleDelete} />
            </Grid>
        </Grid>
    );
}

export default CategoryComponent;
