import { Alert, Skeleton, Typography } from "@mui/material"
import { useGetProductsQuery } from "../../features/api/productsApi"
import ProductList from "../../components/Products/ProductList"
import useSearchedData from "../../hooks/useSearchedData"


const HomePage = () => {

  const productQuery = useGetProductsQuery(null)
  const searchedData = useSearchedData()

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ color: 'black'}}>
        Pears, apples, quinces
      </Typography>

      {
        productQuery.isSuccess && (
          <ProductList
            productList={Array.isArray(searchedData) ? searchedData.length > 0 ? searchedData : productQuery.data : productQuery.data} 
          />
        )
      }
      {
        productQuery.isLoading && (
          <Skeleton variant="rectangular" width={210} height={118} />
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