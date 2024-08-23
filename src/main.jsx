import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produto from './Produto'
import Oferta from './Oferta'
import './globals.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
           <Route path="/Home" element={<Home/>}/>
           <Route path="/produto" element={<Produto/>}/>
           <Route path="/oferta" element={<Oferta/>}/>
       </Routes>
    </BrowserRouter>

  </React.StrictMode>,
  )