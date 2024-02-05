import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

type TTableComponent = {
  columnTitle?: string,
  rows?: any,
  style?: any,
  stickyHeader?: boolean,
  onDelete: (param:number)=> void
}
export default function TableComponent({rows, style, onDelete, stickyHeader=false, columnTitle="Название" }: TTableComponent) {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '400px', overflowY:'scroll'}}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table" stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow>
            <TableCell align='center' style={{width: '60%'}}>{columnTitle}</TableCell>
            <TableCell align='center'  style={{width: '40%'}}>Действия</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{style}}>
          {rows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
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
