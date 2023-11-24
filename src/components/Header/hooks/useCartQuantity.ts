import { useGetCartProductsQuery } from "../../../features/api/cartApi"



const useCartQuantity = () => {
    
    const cartQuery = useGetCartProductsQuery(null)
    let sumQuantity = 0;

    if(cartQuery.isSuccess) {
        sumQuantity = cartQuery.data.reduce((sum, { quantity }) => sum + quantity, 0)  
    }

    return sumQuantity
}



export default useCartQuantity