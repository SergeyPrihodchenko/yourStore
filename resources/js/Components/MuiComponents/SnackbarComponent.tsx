import { Alert, Portal } from "@mui/material";
import  Snackbar, { SnackbarCloseReason, SnackbarProps }  from "@mui/material/Snackbar";
import { JSXElementConstructor, ReactElement, ReactNode } from "react";

type severityVariant = "error" | "success" | "info" | "warning";

interface SnackbarComponentProps extends SnackbarProps{
  open?: boolean;
  message?: string | ReactNode;
  autoHideDuration?: number | null;
  action?: ReactNode;
  children?: ReactElement<any, any>;
  onAlClose?: (event: React.SyntheticEvent) => void;
  onSnackClose?: (event: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => void;
  alertVariant?: "filled" | "outlined" | "standard"; 
  severity?: severityVariant;
}

const SnackbarComponent = (props: SnackbarComponentProps) => {
  const {open, message, onAlClose, onSnackClose, autoHideDuration, action, alertVariant, children, severity} = props;
  return (
    <Portal>
      <Snackbar
          open={open}
          message={message}
          action={action}
          TransitionComponent={props.TransitionComponent}
          autoHideDuration={autoHideDuration}
          onClose={onSnackClose}
        >
          <Alert variant={alertVariant} severity={severity} onClose={onAlClose} sx={{width:'300px'}} >
            {children}
          </Alert>
        </Snackbar>
        </Portal>
  )
}

export default SnackbarComponent;