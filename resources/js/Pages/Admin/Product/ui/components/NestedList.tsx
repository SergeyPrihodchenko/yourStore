import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Option, Value } from '@/Entities/Option/model/types';

export default function NestedList( {options}: any ) {
  
  const [open, setOpen] = React.useState<any>(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 660, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Фильтры
        </ListSubheader>
      }
    >
      {options?.map((option: Option) => {
        return (
          <>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={option.title}/>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {
              option.values?.map((value: Value) => {              
                return (
                  <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={value.title}/>
                    </ListItemButton>
                  </List>
                  </Collapse>
                )
              })
            }

          </>
        )
      })}
    </List>
  );
}