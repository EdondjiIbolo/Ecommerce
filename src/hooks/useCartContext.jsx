import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
export const useCartContext =()=>{
    const context = useContext(CartContext)
    if(context == undefined){
        throw new Error ('Error : usecontext must have a provider')
    }
    return context
}
