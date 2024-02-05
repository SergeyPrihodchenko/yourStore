import SnackbarComponent from "@/Components/MuiComponents/SnackbarComponent";
import TableComponent from "@/Components/MuiComponents/TableComponent";
import { router, useForm } from "@inertiajs/react";
import {Button, Grid, Slide, SlideProps, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Category } from "@/Entities/Category/model/types";
import DialogComponent from "@/Components/MuiComponents/DialogComponent";

interface CategoryComponentProps{
  categories: Category[];
}
function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const CategoryComponent = ({categories}: CategoryComponentProps) => {
  const {data, setData, post, errors, reset, recentlySuccessful } = useForm({
    title: '', category_id: 0
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [snackbarDelState, setSnackbarDelState] = useState({open: false, transition: Slide });
  
  const handleSubmit = () =>{
    post(route('category.store'), 
    {
      onSuccess: ()=> {
          reset('title');
      },
      onError: (e) => {console.log(e);
      }
    }
  )

  }
  const handleClose = () =>{
    setSnackbarDelState({...snackbarDelState,open: false});
  }

  const handleOpenDialog = (id: number) =>{
    setOpenDialog(true);
    setData('category_id', id);
  }

  const handleDelete = (param: number) => {
    router.delete(route('category.destroy', data.category_id), 
    {
      preserveScroll: true, 
      onSuccess: () => {
        setOpenDialog(false);
        setSnackbarDelState({open: true, transition: SlideTransition});
      },
      onError: (e) => {console.log(e);
      }
    });
  }
 
    return (
        <Grid container sx={{maxWidth: '1400px', padding: '10px' }}>
          <Typography variant="h4" sx={{marginBottom: '20px'}}>Добавление категории</Typography>
          <DialogComponent 
            open={openDialog} 
            hasTitle 
            hasActions 
            hasContent
            titleText="Удалить категорию?" 
            content="Удаление повлечет за собой удаление вложенных подкатегорий"
            onClose={()=>setOpenDialog(false)} 
            handleAgree={handleDelete}
          />
            <Grid item xs={12} sx={{position:'relative',display: "flex", gap:'10px', alignItems:'baseline', marginBottom: '15px'}}>           
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
                  <TableComponent stickyHeader rows={categories} onDelete={handleOpenDialog} columnTitle="Категории" />
            </Grid>
            <SnackbarComponent 
                open={recentlySuccessful}
                severity="success"
                onSnackClose={handleClose}
                TransitionComponent={snackbarDelState.transition}
                autoHideDuration={1200}
              >
                <span>Категория добавлена</span>
              </SnackbarComponent>
              <SnackbarComponent 
                open={snackbarDelState.open}
                severity="error"
                onSnackClose={handleClose}
                TransitionComponent={snackbarDelState.transition}
                autoHideDuration={1200}
              >
                <span>Категория удалена</span>
              </SnackbarComponent>
        </Grid>
    );
}

export default CategoryComponent;
