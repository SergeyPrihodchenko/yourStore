import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { router } from '@inertiajs/react';

type TTableComponent = {
  rows?: any,
  style?: any,
  stickyHeader?: boolean,
  onDelete: (param:number)=> void
}
export default function TableComponent({rows, style, onDelete, stickyHeader=false }: TTableComponent) {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '400px', overflowY:'scroll'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow>
            <TableCell align='center' style={{width: '60%'}}>Название</TableCell>
            <TableCell align='center'  style={{width: '40%'}}>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{style}}>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">{row.title}</TableCell> */}
              <TableCell>{row.title}</TableCell>
              <TableCell align="right" sx={{display: 'flex', gap:'10px'}}>
                <Button 
                  variant='outlined' 
                  color='error'
                  onClick={() => onDelete(row.id) }
                  >
                    Удалить
                  </Button>
                  <Button variant='outlined' color='info' >Изменить</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
