import { Link } from 'react-router-dom'
import { useCartContext } from '../hooks/useCartContext.jsx'
import './cart.css'

function CartProduct({cartProduct}){
   const {addToCart , removeFromCart} = useCartContext()
    return(
        <main className="ct">
        
        <li className="ct-products">
            <article className="ct-product">
                <img src={cartProduct.thumbnail}
                 alt="CARRITO" />
                 <p>{cartProduct?.title} / {cartProduct?.category}</p>
                 <span>
                    <div className='btn-span'>
                        <button onClick={()=>addToCart(cartProduct)}>cantidad: {cartProduct.qty}</button>
                        <button className='btn-del' onClick={()=>removeFromCart(cartProduct)}>
                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/delete-trash.png" alt="delete-trash"/>
                        </button>
                    </div>
                    
                    <p style={{fontWeight:'bold'}}>Precio : {cartProduct?.price * cartProduct.qty} $</p>
                 </span>
            </article>
            


            
        </li>
    </main>
    )
}
export function Cart(){
    const {cart , clearCart} = useCartContext()
    console.log(cart)
    return(
        <main className='ct'>
        <Link to='/items'  className='ct-back'>
            <img width="96" height="96" 
            src="https://img.icons8.com/fluency/96/back.png"
             alt="back"/>
        </Link>
        <header className="ct-header">
            <h1 className="ct-header-title">Carrito de Compras</h1>
            <picture className="ct-header-picture">
                <img width="96" height="96" 
                src="https://img.icons8.com/fluency/96/shopping-cart-loaded.png" 
                alt="shopping-cart-loaded"/>
            </picture>
        </header>

        {
            cart.length > 0 ? 
            cart.map(cartProduct =><CartProduct key={cartProduct.id} cartProduct={cartProduct}/>
                
             )
            : 
            <main style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h2>Carrito Vacio !!</h2>
                <p>Haga un Pedido</p>
            </main>
        }
        {
           cart.length > 0 &&
           <button onClick={()=>clearCart()}>
           Limpiar Carrito
            </button>
        }
       
        </main>
    )
}