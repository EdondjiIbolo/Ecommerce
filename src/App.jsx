
import './App.css'
import { Rutas } from './componets/Rutas.jsx'
import { CartProvider } from './context/Cartcontext.jsx'

function App() {

  return (
     <CartProvider>
        <Rutas/>
     </CartProvider>

  )
}

export default App
