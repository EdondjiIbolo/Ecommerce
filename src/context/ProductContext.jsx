import { createContext,  useState } from "react";

export const ProductContext  = createContext()

export function ProductProvider({children}){
    const [search , setSearch] = useState('')
    const [idProduct , setIdProduct] = useState(null)
    const [products , setProduct] = useState([])
  
    return(
        <ProductContext.Provider value={{
            search ,
            idProduct , 
            setIdProduct,
            setSearch,
            products , 
            setProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
 }