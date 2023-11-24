import Grid from "@mui/material/Grid"
import { IProduct } from "../../interfaces/ProductInterface"
import ProductCard from "./ProductCard"

type Props = {
    productList: IProduct[]
}

const ProductList:React.FC<Props> = (props) => {

  return (
    <Grid container spacing={2}>
        {
            props.productList.map((product:IProduct) => {
                return (
                    <Grid key={product.id} item xs={12} md={6} lg={4}>
                        <ProductCard product={product}/>
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default ProductList