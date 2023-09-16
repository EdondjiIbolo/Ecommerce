import { useEffect, useState } from "react"
import { useProductContext } from "./useProductContex"

export const useProducts =()=>{
    const {products , setProduct , search , setSearch} = useProductContext()
    const [loading , setLoading] = useState(true)
    useEffect(()=>{

        fetch(`https://api-deploy-9itl-dev.fl0.io/items?q=${search}`)
        .then(data=> data.json()
        )
        .then(file=>{
            const newProducts = file
            setProduct(newProducts)
        })
        .finally(
            setLoading(false)
        )
        
    },[search, setProduct ])
    return {products , search ,loading ,setSearch}
}