import Grid from "@mui/material/Grid"
import { IProduct } from "../../interfaces/ProductInterface"
import ProductCard from "./ProductCard"
import { Box, Skeleton } from "@mui/material"

type Props = {
    productList: IProduct[]
}

const ProductList:React.FC<Props> = (props) => {

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
        <Grid container spacing={12}>
        {
            props.productList.map((product:IProduct) => {
                return (
                    product.image ? 
                    <Grid item xs={6} md={8} lg={props.productList.length > 2 ? 4 : 6}>
                        <ProductCard product={product}/>
                    </Grid>
                    : 
                    <Skeleton variant="rectangular" width={345} height={194} />
                )
            })
        }                      
        </Grid>
    </Box>
  )
}

export default ProductList