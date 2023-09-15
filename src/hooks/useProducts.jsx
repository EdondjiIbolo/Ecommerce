import { useEffect } from "react"
import { useProductContext } from "./useProductContex"

export const useProducts =()=>{
    const {products , setProduct , search , setSearch} = useProductContext()

    useEffect(()=>{

        fetch(`https://api-deploy-9itl-dev.fl0.io/items?search=${search}`)
        .then(data=> data.json()
        ).then(file=>{
            const newProducts = file
            setProduct(newProducts)
        })
        
    },[search, setProduct])
    return {products , search , setSearch}
}