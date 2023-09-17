import { useEffect, useState } from "react";
import { Header } from "./Header.jsx";
import './detail.css'
import { useParams } from "react-router-dom";
import { useCartContext} from '../hooks/useCartContext.jsx'
import { useProductId } from "../hooks/useProductdetail.jsx";
export function Deatail(){
    const {id} = useParams()

    const  {product , loading } = useProductId({id})
    const {addToCart , cart} = useCartContext()
    const isInCart = cart.some(item => item.id == product?.id)
       
    const handleClick = ()=>{
        console.log(product)
        addToCart(product)
        setTimeout(()=>{
            console.log(product)
        }, 2000)
    }

    return(
        <main className="dt-container">
            {
              loading ==true  ?  
              <span className="loader"></span> :
              <main className="dt-container">
              <Header />
              <section className="dt">
                <section className="dt-img">
                    <picture className="dt-img-big">
                        <img src={product?.thumbnail} alt={product?.title} />
                    </picture>
                    <picture className="dt-img-flex">
                        {
                            product?.images?.splice(0 , 3).map((image,index)=>{
                                return(
                                    <img src={image} alt={product?.title} key={index}/>
                                )
                            })
                        }
                    </picture>
                </section>
                <section className="dt-detail">
                    <h1>Iphone pro max</h1>
                    <div className="data">
                            <div>
                                <span className="price">{product?.price}$</span>
                                <span className="available">{product?.stock} Disponibles</span>
                            </div>
                            <div>
                            <span className="range">{product?.rating}</span>
                        </div>
                    </div>
                    <p className="text__description">
                        SIM-Free, Model A19211 6.5-inch 
                        Super Retina HD display with OLED 
                        technology A12 Bionic chip with ...
                    </p>
                </section>
              </section>
            <footer className="dt-footer">
                <button className={isInCart ? 'btn btn--green': 'btn'}  onClick={handleClick} disabled={isInCart ? true :false}>{isInCart?'Comprado':'Comprar'}</button>
            </footer>
              </main>
            }
            
           
        
        </main>
        
    )


}