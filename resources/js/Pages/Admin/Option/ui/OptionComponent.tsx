import { router } from "@inertiajs/react";
import { Button, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useDeleteOptionMutation, useUpdateOptionMutation, useValuesForOptionMutation } from "@/Entities/Option/model/RTKQuery";
import { useValueUpdateMutation, useValueDeleteMutation } from "@/Entities/ValuesForOption/model/RTKQuery";

const OptionComponent = ({options}: any) => {

    const [dataRows, setDataRows] = useState(options);
    const [toggleLink, setToggleLink] = useState(true);
    const [valueTitle, setValueTitle] = useState('');
    const [idOption, setIdOption] = useState(0);
    const [background, setBackground] = useState('#949494');
    const [cursor, setCoursor] = useState('pointer');

    const [ValuesForOption] = useValuesForOptionMutation();

    const handleChangeTitle = (e: any) => {
        setValueTitle(e.target.value);
    } 
    
    const setOptionOrValue = () => {
        if(toggleLink) {
          if(valueTitle.length != 0) {
            router.post(route('setOption'), {title: valueTitle}, {
              onSuccess: (result) => {
                  setValueTitle('');
                  setDataRows(result.props.options);
              },
              onError: (err) => {
                  console.log(err);
              }
          });
          }
        } else {
          if(valueTitle.length != 0) {
            router.post(route('setValueOption'), {option_id: idOption, title: valueTitle}, {
              onSuccess: async () => {
                const {data}: any = await ValuesForOption(idOption);
                setValueTitle('');
                setDataRows(data);
              },
              onError: (err) => {
                console.log(err);    
              }
          })
        }
          }
    }

    const toggleValuesForOption = async (e: any, id: number) => {
        if(toggleLink && e.target.classList.contains('toggleLink')) {
            const {data}: any = await ValuesForOption(id);
            setDataRows(data);
            setToggleLink(false);
            setIdOption(id);
        }
    }

    const toggleBackOption = () => {
      setDataRows(options);
      setToggleLink(true);
    }

    const deleteOptionOrValue = (id: number) => {
      if(toggleLink) {
        router.post(route('deleteOption'), {id: id}, {
          onSuccess: (res) => {
            setDataRows(res.props.options);
          }
        });
      } else {
        router.post(route('deleteValueOption'), {id: id}, {
          onSuccess: async (res) => {
              const {data}: any = await ValuesForOption(idOption);
              setDataRows(data);
          },
          onError: (err) => {
            console.log(err);
          }
        });
      }
    }

    const updateOptionOrValue = (id: number) => {
      if(toggleLink) {
        if(valueTitle.length != 0) {
          router.post(route('updateOption'), {id: id, title: valueTitle}, {
            onSuccess: (res) => {
              setDataRows(res.props.options);
              setValueTitle('');
            },
            onError: (err) => {
              console.log(err);
            }
          })
        }
      } else {
        router.post(route('updateValueOption'), {id: id, title: valueTitle}, {
          onSuccess: async () => {
            const {data}: any = await ValuesForOption(idOption);
            setDataRows(data);
            setValueTitle('');
          },
          onError: (err) => {
            console.log(err);
          }
        })
      }
    }

    useEffect(() => {
      if(toggleLink) {
        setCoursor('pointer');
        setBackground('#949494');
      } else {
        setCoursor('');
        setBackground('');
      }
    }, [toggleLink])
    
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Название опции" helperText="Правила добавления" onChange={handleChangeTitle} value={valueTitle}/>
                <Button variant="outlined" onClick={setOptionOrValue}>Добавить</Button>
            </Grid>
            <Grid item xs={12}>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {toggleLink ? 
            ''
        : 
        <TableHead>
            <TableRow>
                <TableCell sx={{'&:hover': {background:'#949494', cursor: 'pointer'}}} onClick={toggleBackOption}><ArrowBackIosOutlinedIcon/><span>назад</span></TableCell>
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
              onClick={(e) => {toggleValuesForOption(e, row.id)}}
            >
              <TableCell component="th" className="toggleLink" scope="row" sx={{'&:hover': {background: background, cursor:cursor}}}>{row.title}</TableCell>
              <TableCell align="right"><Button variant='outlined' onClick={() => updateOptionOrValue(row.id)}>Изменить</Button><Button variant='outlined' onClick={() => {deleteOptionOrValue(row.id)}}>Удалить</Button></TableCell>
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