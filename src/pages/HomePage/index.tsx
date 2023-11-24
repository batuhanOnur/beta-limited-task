import { Alert, Typography } from "@mui/material"
import { useGetProductsQuery } from "../../features/api/productsApi"
import ProductList from "../../components/Products/ProductList"


const HomePage = () => {

  const productQuery = useGetProductsQuery(null)

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ color: 'black'}}>
        Pears, apples, quinces
      </Typography>

      {
        productQuery.isSuccess && (
          <ProductList
            productList={productQuery.data} 
          />
        )
      }

      {
        productQuery.isError && (
          <Alert severity="error">Failed to fetch Products!</Alert>
        )
      }
    </>
  )
}

export default HomePage