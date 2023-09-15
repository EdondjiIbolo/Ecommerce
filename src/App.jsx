
import './App.css'
import { Rutas } from './componets/Rutas.jsx'
// import { Route , Routes } from 'react-router-dom'
// import {SearchPage} from './componets/SearchPage'
// import { ProductSearch } from "./componets/ProductSearch"
// import {Deatail} from './componets/Detail'
// import { Cart } from './componets/Cart'
import { CartProvider } from './context/Cartcontext'

function App() {

  return (
     <CartProvider>
        <Rutas/>
     </CartProvider>

  )
}

export default App
