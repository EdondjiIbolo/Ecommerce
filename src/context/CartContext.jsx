import { createContext , useState } from "react";
//Creamos el contexto
export const CartContext = createContext()

export function CartProvider({children}){
    const [cart , setCart] = useState( [])
    const addToCart =(product)=>{
        const isProductInCart = cart.findIndex(item=>item.id == product.id)
        if(isProductInCart>=0){
            const newCart = structuredClone(cart)
            newCart[isProductInCart].qty +=1
             setCart(newCart)
             return cart
       }
    
    setCart(prevState=>([
        ...prevState , {...product , qty:1}
    ]))   
   
    }
    const removeFromCart =(product)=>{
     
        setCart(prevState=>prevState.filter(prod => prod.id !=product.id))
        
    }
    const clearCart = ()=>{
        setCart([])
       
    }
    
    return(
        <CartContext.Provider value={{
            cart,
            setCart,
            removeFromCart,
            clearCart,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}