import { Link } from 'react-router-dom'
import { useProductContext } from '../hooks/useProductContex.jsx'
import './header.css'
import {  useId, useState } from 'react'
import { useCartContext } from '../hooks/useCartContext.jsx'

export function Header(){
    const {search , setSearch} = useProductContext()
    const [inputWrd , setInputWrd] = useState('')
    const LinkId = useId()
    const handleSubmit =(e)=>{
        e.preventDefault()
        document.getElementById(`${LinkId}`).click()
        setSearch(inputWrd)
    }
    const handleChange = (e) =>{
        setInputWrd(e.target.value)
    }
    const {cart} = useCartContext()



    return(
    <header className="pd-header">
        <div className="input-box">
        <Link to='/cart' className='cart-icon'>
            <p className='cart-num'>{cart.length == 0 ? '': cart.length}</p>
            <img width="96" height="96"
            src="https://img.icons8.com/fluency/96/fast-cart.png"
            alt="fast-cart"/>
        </Link>
       
            <form onSubmit={handleSubmit}>
            <input onChange={handleChange} className="input" type="text" placeholder={search ? search : 'Todos'}/>
            <Link id={LinkId} to={`/items`} className='link-button' >
                <div className='icon'>
                    <img  src="https://img.icons8.com/fluency/96/search.png" alt="search"/>
                </div>
            </Link>
            
            </form>
            
        </div>
        
    </header>
    )
}