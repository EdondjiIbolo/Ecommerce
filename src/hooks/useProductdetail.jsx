import { useEffect , useState } from "react"

export const useProductId=({id})=>{
    const [product , setProduct] =useState(null)
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        
        fetch(`https://api-deploy-9itl-dev.fl0.io/items/${id}`)
        .then(res=>{
            
            if(res.ok){
                return res.json()
            }
            else{
                throw new Error('Error : Ocurrio unn error con la respuesta')
            }
        })
        .then(data=>{
            const newProduct = data[0]
            console.log(newProduct)
            setProduct(newProduct)
            
        })
        .finally( 
            setLoading(false)
            
        )
    },[id])
    return {product , loading}
}