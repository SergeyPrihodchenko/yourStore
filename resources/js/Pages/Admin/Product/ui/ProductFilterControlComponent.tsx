import { Option, Value } from "@/Entities/Option/model/types";
import { Product } from "@/Entities/Product/model/types";
import { Grid, Typography } from "@mui/material";
import { mergeValues } from "./functions/functions";
import TableComponent from "./components/TableComponent";

interface IProductFilterControlComponent {
    product: Product,
    options: Option[],
    values: Value[]
}

const ProductFilterControlComponent = ({options, values, product}: IProductFilterControlComponent) => {
    
    return (
        <Grid container sx={{border: 'solid 1px black'}}>
            <Grid item xs={12}>
                <Typography variant="h1">
                    {product.title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TableComponent options={options} values={values}/>
            </Grid>
        </Grid>
    );
}

export default ProductFilterControlComponent;