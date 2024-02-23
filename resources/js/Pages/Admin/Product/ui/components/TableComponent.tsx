import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Option, Value } from '@/Entities/Option/model/types';
import { useState } from 'react';


export default function TableComponent({options, values}: any) {
    
    const [rows, setRows] = useState(options)

    const filterValueForOption = (id: number) => {
        const filtredValues = values.filter((value: Value) => {
            return value.option_id == id
        })

        setRows(filtredValues);
    }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Фильтры</TableCell>
            <TableCell align="right">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row" sx={{'&:hover': {background: 'blue', cursor: 'pointer'}}} onClick={() => {filterValueForOption(row.id)}}>
                {row.title}
              </TableCell>
              <TableCell align="right">test</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}