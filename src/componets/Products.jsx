

import { Link } from "react-router-dom"
import { useProducts } from "../hooks/useProducts"

export function Products(){
    const {products} = useProducts()

            return(
                <ul className="pd">{ 
                    products.map(product => {
                          return(
                            <Link className="link-det" to={`/items/${product.id}`} key={product.id}>
                                <article  className='pd-section'>
                                    <picture>
                                        <img src={`${product.thumbnail}`} alt={`${product.title}`} />
                                    </picture>
                                    <article>
                                        <h2>{product.title}</h2>
                                        <p className="text">{product.description}</p>
                                        <footer>
                                        <span className="prices">{product.price}</span> 
                                        <span className="range">{product.rating}</span>
                                        </footer>
                                    </article>
                               </article>
                            </Link>
                               )
                               }
                           )
                       }
                   </ul>
            )
}