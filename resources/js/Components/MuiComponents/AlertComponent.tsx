import { SxProps, Theme } from "@mui/material";
import Alert  from "@mui/material/Alert";
import { style } from "@mui/system";

type severityVariant = "error" | "success" | "info" | "warning";
type variantValue = "filled" | "outlined" | "standard";

interface AlertComponentProps {
  severity?: severityVariant;
  alertText: string;
  variant?: variantValue;
  styleAlert?: SxProps<Theme>
}


const AlertComponent = (props: AlertComponentProps) =>{
  const {severity = 'info', alertText, variant="standard", styleAlert} = props;
  return(
    <Alert 
      variant={variant}
      severity={severity} 
      sx={styleAlert}
    >
      {alertText}
    </Alert>
  );

}

export default AlertComponent;