import { createContext , useState } from "react";
//Creamos el contexto
export const CartContext = createContext()

export function CartProvider({children}){
    const initialCart = []

    
    const [cart , setCart] = useState(initialCart)

    const addToCart =(product)=>{
        const isProductInCart = cart.findIndex(item=>item.id == product.id)
        if(isProductInCart>=0){
            const newCart = structuredClone(cart)
            newCart[isProductInCart].qty +=1
             setCart(newCart)
             return
       }
    
    setCart(prevState=>([
        ...prevState , {...product , qty:1}
    ]))   
    localStorage.setItem('cart',cart)
    console.log(initialCart)
   
    }
    const removeFromCart =(product)=>{
     
        setCart(prevState=>prevState.filter(prod => prod.id !=product.id))
        localStorage.setItem('cart',cart)
    }
    const clearCart = ()=>{
        setCart([])
        localStorage.setItem('cart',cart)
       
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