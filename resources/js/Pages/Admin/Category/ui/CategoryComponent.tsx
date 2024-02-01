import AlertComponent from "@/Components/MuiComponents/AlertComponent";
import SnackbarComponent from "@/Components/MuiComponents/SnackbarComponent";
import TableComponent from "@/Components/MuiComponents/TableComponent";
import CloseIcon from "@mui/icons-material/Close";
import { router, useForm } from "@inertiajs/react";
import { Alert, Button, Grid, IconButton, Slide, SlideProps, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";

interface Category{
  id: number;
  title: string;
}
interface CategoryComponentProps{
  categories: Category[];
}
function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const CategoryComponent = ({categories}: CategoryComponentProps) => {
  const {data, setData, post, errors, reset, recentlySuccessful } = useForm({
    title: ''
  });
  const [snackbarDelState, setSnackbarDelState] = useState({open: false, transition: Slide });
  
  const handleSubmit = () =>{
    post(route('category.store'), 
    {onSuccess: ()=> {if(!recentlySuccessful) reset('title')}})

  }
  const handleClose = () =>{
    setSnackbarDelState({...snackbarDelState,open: false});
  }
  const handleDelete = (param: number) => {
    router.delete(route('category.destroy', param), 
    {
      preserveScroll: true, 
      onSuccess: () => {
        setSnackbarDelState({open: true, transition: SlideTransition});
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
              {/* {isDelete && <AlertComponent 
                alertText="Категория удалена" 
                severity="error" 
                variant="standard"
                styleAlert={{width: '100%', position: 'absolute', top: '78px', left: 0, zIndex: 1000}} 
              />} */}
              <SnackbarComponent 
                open={snackbarDelState.open}
                severity="error"
                onSnackClose={handleClose}
                TransitionComponent={snackbarDelState.transition}
                autoHideDuration={1200}
              >
                <span>Категория удалена</span>
              </SnackbarComponent>
                
            
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
