import  DialogTitle  from "@mui/material/DialogTitle";
import Dialog, { DialogProps }  from "@mui/material/Dialog";
import DialogActions, {DialogActionsProps}  from "@mui/material/DialogActions";
import Button  from "@mui/material/Button";
import DialogContent  from "@mui/material/DialogContent";


interface DialogComponentProps extends DialogProps{
  hasTitle?: boolean;
  hasActions?: boolean;
  hasContent?:boolean;
  titleText?: string;
  content?: string;
  handleAgree: (param: number)=>void;
  handleCloseBtn?: ()=>void;
}

const DialogComponent = (props: DialogComponentProps) => {
  const {
    open, 
    onClose, 
    hasTitle=false, 
    hasActions=false, 
    hasContent=false,
    titleText, 
    content,
    handleAgree, 
    children
  } = props;

  return(
    <Dialog 
      open={open}
      onClose={onClose}
    >
      {hasTitle && <DialogTitle id="alert-dialog-title">{titleText}</DialogTitle>}
      {hasContent && <DialogContent>{content}</DialogContent>}
      {hasActions && <DialogActions>
        <Button onClick={onClose}>Нет</Button>
        <Button onClick={handleAgree}>Да</Button>
      </DialogActions> }
      {children}
    </Dialog>
  )
}

export default DialogComponent;