import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import AutocompleteComponent from '@/Components/MuiComponents/AutocompliteComponent';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
    width: '100%',
    height: '300px',
  }
}));

export default function DialogsForAutocomplite({children, optionsCategory, optionsCatalog, handleChangeCategory}: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{padding: '3px', position: 'absolute', right: '15px', top: '15px'}}>
            {children}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Категории
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <Box>
              <AutocompleteComponent style={{margin: '0 0 15px 0'}} label='Категории' noOptionsText='Нет категорий' options={optionsCategory} handleChange={handleChangeCategory} />
              <AutocompleteComponent label='Каталоги' noOptionsText='Нет каталогов' options={optionsCatalog} handleChange={() => {}}/>
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Сохранить изменения
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}