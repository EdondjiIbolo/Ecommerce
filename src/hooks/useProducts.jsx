import { useEffect } from "react"
import { useProductContext } from "./useProductContex"

export const useProducts =()=>{
    const {products , setProduct , search , setSearch} = useProductContext()

    useEffect(()=>{

        fetch(`http://localhost:1234/items?search=${search}`)
        .then(data=> data.json()
        ).then(file=>{
            const newProducts = file
            setProduct(newProducts)
        })
        
    },[search, setProduct])
    return {products , search , setSearch}
}