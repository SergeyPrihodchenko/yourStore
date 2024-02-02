import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import { AdminProductPanelInterface } from "../model/types";

const ProductShowOptionComponent = ({catalog, category, product, values, images, options}: AdminProductPanelInterface) => {
    console.log(images);
    
    return (
        <Grid container>
            <Grid item xs={12}>
      <Typography variant="h2" gutterBottom>
        {product.title}
      </Typography>
      <ImageList sx={{ width: 300, height: 250 }} cols={4} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={item.img_path}
            src={item.img_path}
            alt={item.img_path}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      <Typography variant="body1" gutterBottom>
        {product.price}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.quantity}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.description}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {product.updated_at}
      </Typography>
      {/* <Typography variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography> */}
            </Grid>
        </Grid>
    );
}

export default ProductShowOptionComponent;