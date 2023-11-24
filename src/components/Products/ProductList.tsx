import Grid from "@mui/material/Grid"
import { IProduct } from "../../interfaces/ProductInterface"
import ProductCard from "./ProductCard"
import { Skeleton } from "@mui/material"

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
                        {
                            product.image ? 
                            <ProductCard product={product}/>
                            : 
                            <Skeleton variant="rectangular" width={345} height={194} />
                        }
                        
                    </Grid>
                )
            })
        }
    </Grid>
  )
}

export default ProductList