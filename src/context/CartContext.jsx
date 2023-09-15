import { createContext , useState } from "react";
//Creamos el contexto
export const CartContext = createContext()

export function CartProvider({children}){
    const [cart , setCart] = useState(
    localStorage.getItem('cart') !==null ? JSON.parse(localStorage.getItem('cart')):
    [])
    const addToCart =(product)=>{
        const isProductInCart = cart.findIndex(item=>item.id == product.id)
        if(isProductInCart>=0){
            const newCart = structuredClone(cart)
            newCart[isProductInCart].qty +=1
             setCart(newCart)
             localStorage.setItem('cart',JSON.stringify(cart))
             return
       }
    
    setCart(prevState=>([
        ...prevState , {...product , qty:1}
    ]))   
    localStorage.setItem('cart',JSON.stringify(cart))
    }
    const removeFromCart =(product)=>{
     
        setCart(prevState=>prevState.filter(prod => prod.id !=product.id))
        localStorage.setItem('cart',JSON.stringify(cart))
    }
    const clearCart = ()=>{
        setCart([])
        localStorage.setItem('cart',JSON.stringify(cart))
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