import { router } from "@inertiajs/react";
import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useValuesForOptionMutation } from "@/Entities/Option/model/RTKQuery";

const OptionComponent = ({options}: any) => {

    const [dataRows, setDataRows] = useState(options);
    const [toggleLink, setToggleLink] = useState(true);

    const [ValuesForOption] = useValuesForOptionMutation();

    const [valueTitle, setValueTitle] = useState('');

    const handleChangeTitle = (e: any) => {
        setValueTitle(e.target.value);
    } 
    
    const setOption = () => {
        router.post(route('setOption'), {title: valueTitle}, {
            onSuccess: (result) => {
                setValueTitle('');
                router.reload({only: ['options']});
            },
            onError: (err) => {
                console.log(err);
            }
        });
    }

    const toggleValuesForOption = async (id: number) => {
        if(toggleLink) {
            const {data}: any = await ValuesForOption(id);
            setDataRows(data);
            setToggleLink(false);
        }
    }

    const toggleBackOption = () => {
      setDataRows(options);
      setToggleLink(true);
    }
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Название опции" helperText="Правила добавления" onChange={handleChangeTitle} value={valueTitle}/>
                <Button variant="outlined" onClick={setOption}>Добавить</Button>
            </Grid>
            <Grid item xs={12}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {toggleLink ? 
            ''
        : 
        <TableHead>
            <TableRow>
                <TableCell onClick={toggleBackOption}><ArrowBackIosOutlinedIcon sx={{}}/></TableCell>
            </TableRow>
        </TableHead> 
        }
        <TableHead>
          <TableRow>
            <TableCell>Названине</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataRows.map((row: any) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => {toggleValuesForOption(row.id)}}
            >
              <TableCell component="th" scope="row">{row.title}</TableCell>
              <TableCell align="right"><Button variant='outlined'>Изменить</Button><Button variant='outlined'>Удалить</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </Grid>
        </Grid>
    );
}

export default OptionComponent;