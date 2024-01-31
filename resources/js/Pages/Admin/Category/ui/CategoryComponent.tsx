import AlertComponent from "@/Components/MuiComponents/AlertComponent";
import TableComponent from "@/Components/MuiComponents/TableComponent";
import { router, useForm } from "@inertiajs/react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Category{
  id: number;
  title: string;
}
interface CategoryComponentProps{
  categories: Category[];
}

const CategoryComponent = ({categories}: CategoryComponentProps) => {
  const {data, setData, post, errors, reset, recentlySuccessful } = useForm({
    title: ''
  });
  const [isDelete, setIsDelete] = useState(false);
  const handleSubmit = () =>{
    post(route('category.store'), 
    {onSuccess: ()=> {if(!recentlySuccessful) reset('title')}})

  }
  const handleDelete = (param: number) => {
    router.delete(route('category.destroy', param), 
    {
      preserveScroll: true, 
      onSuccess: () => {
        setIsDelete(true);
        setTimeout(()=>{
          setIsDelete(false);
        }, 1000)
      }
    });
  }
 
    return (
        <Grid container sx={{maxWidth: '1400px', padding: '10px' }}>
          
          <Typography variant="h4" sx={{marginBottom: '20px'}}>Добавление категории</Typography>
            <Grid item xs={12} sx={{position:'relative',display: "flex", gap:'10px', alignItems:'baseline', marginBottom: '50px'}}>
            {recentlySuccessful &&  <AlertComponent 
              alertText="Категория добавлена" 
              severity="success"
              styleAlert={{width: '100%', position: 'absolute', top: '78px', left: 0, zIndex: 1000}}
              />
            }
              
              {isDelete && <AlertComponent 
                alertText="Категория удалена" 
                severity="error" 
                variant="standard"
                styleAlert={{width: '100%', position: 'absolute', top: '78px', left: 0, zIndex: 1000}} 
              />}
            
              <TextField 
                label="Название категории" 
                value={data.title} 
                onChange={e => setData('title', e.target.value)}  
                variant="outlined" 
                helperText='Добавьте категорию'
              />
                <Button 
                  type="submit" 
                  variant="outlined" 
                  color="success"
                  onClick={()=>handleSubmit()}
                >
                  Добавить
                </Button>
                
            </Grid>
            <Grid item xs={12}>
                  <TableComponent stickyHeader rows={categories} onDelete={handleDelete} />
            </Grid>
        </Grid>
    );
}

export default CategoryComponent;
