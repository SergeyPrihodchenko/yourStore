import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Category } from "@/Entities/Category/model/types";

export default function TableComponent({ categories }: any) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(categories);
    }, [categories]);

    const handleCanche = (value: any) => {};

    const handleDeleteCat = () => {
        console.log(1);
    };

    return (
      <>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontSize: "26px" }}>
                            Названиe
                        </TableCell>
                        <TableCell>
                            <TextField variant="outlined" label="Поиск" />
                            <Button variant="outlined">Найти</Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((category: Category) => (
                        <TableRow
                            key={category.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {category.title}
                            </TableCell>
                            <TableCell align="right">
                                <Button variant="outlined">Изменить</Button>
                                <Button variant="outlined" onClick={()=> console.log(category.id)}
                                >
                                    Удалить
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </>
        
    );
}
