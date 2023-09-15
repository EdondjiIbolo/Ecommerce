import {  Route, Routes } from "react-router-dom"
import {SearchPage} from './SearchPage'
import { ProductSearch } from "./ProductSearch"
import {Deatail} from './Detail'
import { Cart } from "./Cart"

export function Rutas(){
    return(         
        <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path='/cart' element={ <Cart/>} />
            <Route path='/items' element={<ProductSearch />} />
            <Route path='/items/:id' element={<Deatail />} />
        </Routes>
    )
}