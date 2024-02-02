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
  style?: any,
  onClickF?: any, 
  onDelete: (param:number)=> void, 
  activeRow?: boolean
}
export default function TableComponent({style, rows, onDelete, onClickF = null, activeRow = false }: TTableComponent) {

  const activeStyle = {
    hover: {background:'#949494', cursor: 'pointer'}
  }
  return (
    <TableContainer component={Paper} sx={{maxHeight: '400px', overflowY:'scroll'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{'&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell sx={{'&:hover': activeRow ? activeStyle.hover : {}}} component="th" scope="row" onClick={() => {onClickF(row.id)}}>{row.title}</TableCell>
              <TableCell align="right">
                <Button variant='outlined' >Изменить</Button>
                <Button 
                  variant='outlined' 
                  onClick={() => onDelete(row.id) }
                  >
                    Удалить
                  </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
