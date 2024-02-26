import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Option, Value } from '@/Entities/Option/model/types';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useState } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


export default function TableComponent({options, values}: any) {
    
    const [rows, setRows] = useState(options)
    const [toggle, setToggle] = useState<boolean>(false);
    const filterValueForOption = (id: number) => {
        const filtredValues = values.filter((value: Value) => {
            return value.option_id == id
        })
        setRows(filtredValues);
        setToggle(true);
    }

    const resetFilter = () => {
      setRows(options);
      setToggle(false);
    }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{!toggle? 'Фильтры' : 'Параметры фильтра'}</TableCell>
            {!toggle ? '' : <TableCell>Количество едениц</TableCell>}
            <TableCell align="right">Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {!toggle ? 
            ''
        : 
          <TableHead>
          <TableRow>
            <TableCell sx={{'&:hover': {background:'#949494', cursor: 'pointer'}}} onClick={resetFilter}><ArrowBackIosOutlinedIcon/><span>назад</span></TableCell>
          </TableRow>
          </TableHead> 
        }
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell component="th" scope="row" sx={{'&:hover': {background:'#949494', cursor: 'pointer'},  display: 'flex', justifyContent: 'space-between'}} onClick={() => {filterValueForOption(row.id)}}>
                {row.title}
                <EditIcon/>
              </TableCell>
              {!toggle ? '' : <TableCell component="th" scope="row">1</TableCell>}
              <TableCell align="right">
                <Button variant='outlined'>Изменить</Button>
                <Button variant='outlined'>Удалить</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}