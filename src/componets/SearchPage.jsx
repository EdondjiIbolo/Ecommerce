import './search.css'
import { IconEcommerce } from "./IconEcomerce.jsx";
import { Link } from 'react-router-dom';
import { useProductContext } from '../hooks/useProductContex.jsx'
import { useId, useState } from 'react';

export function SearchPage(){
    const {search, setSearch} = useProductContext()
    const [inputText , setInputText] = useState('') 
    const handleChange =(e)=>{
        setInputText(e.target.value)
    }
    const LinkId = useId()
    const linkHandleClick =()=>{
        setSearch(inputText)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        document.getElementById(`${LinkId}`).click()
    }
    return(
        <section className='main-container'>
            <IconEcommerce className='picture__img'/>
            <h1 className="text__title">Bazar Online</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input onChange={handleChange} value={inputText} className="input" type="text" placeholder="laptops, smarthphones , ..." />
                </div>
                <Link id={LinkId} onClick={linkHandleClick} className='button' to={`/items?q=${inputText}`}>
                Buscar</Link>
            </form>
        </section>
    )
}