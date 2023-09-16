import { useEffect, useState } from 'react'
import { useProductContext } from '../hooks/useProductContex.jsx'
import { Header } from './Header.jsx'
import './products.css'
import { Products } from './Products.jsx'
import { useProducts } from "../hooks/useProducts.jsx"

export function ProductSearch(){
    const  {search} = useProductContext()
    const {products  , loading} = useProducts()
    const [searchCategory , setSearchCategory] = useState([])

    useEffect(()=>{
      
        products.map(product =>{
          
            if(searchCategory.indexOf(product.category) < 0 ){
                setSearchCategory([ ...searchCategory , product.category ])
                
            }

            
        })
      

    } , [search , products , searchCategory])
    

    return(
        <main className='pd-container'>
             <Header />
             
            {
            loading ? <h3>Cargando...</h3> :  
            <>
            
            <section>
                    <p>
                        Resultados de busqueda de {search} : {products.length}
                    </p>
                    <section className='pd-container-header'>
                        {
                            searchCategory.map((categoria , index)=>{
                                return(
                                    <li key={index} style={{padding:'0px', margin:'0px',listStyle:'none',fontSize:'.80rem'}}>
                                        <span>
                                        {categoria} -
                                        </span>
                                        <span>
                                        {products.filter(product=> product.category==categoria).length}
                                        </span> 
                                        
                                    </li>
                                )
                            })
                        }
                        
                    </section>
            </section>
            <Products /> 
            </>    
            }
          
           
 
        </main>
    )
}