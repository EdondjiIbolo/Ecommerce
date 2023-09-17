import {  HashRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductProvider } from './context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <ProductProvider>
      <App />
    </ProductProvider>
  </HashRouter>,
)
