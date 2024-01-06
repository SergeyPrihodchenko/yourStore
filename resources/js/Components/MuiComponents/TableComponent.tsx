import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

type TTableComponent = {
  rows?: any,
  style?: any
}

export default function TableComponent({rows, style}: TTableComponent) {


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Названине</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{style}}>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.title}</TableCell>
              <TableCell align="right"><Button variant='outlined'>Изменить</Button><Button variant='outlined'>Удалить</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
