import { useLazyGetCartProductsQuery } from "../../../features/api/cartApi"
import useSessionId from "../../../hooks/useSessionId";
import { useEffect } from 'react';



const useCartQuantity = () => {
     
    const sessionId = useSessionId()
    const [cartQuery,result] = useLazyGetCartProductsQuery()
    
    let sumQuantity = 0;

    /* MAKE SURE THERE IS ACTIVE SESSION */
    useEffect(() => {
        if(sessionId !== null) {
            cartQuery(null)
        }
    },[sessionId])
    

    if(result.isSuccess) {
        sumQuantity = result.data.reduce((sum, { quantity }) => sum + quantity, 0)  
    }

    return sumQuantity
}



export default useCartQuantity