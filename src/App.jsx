import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Contato from './pages/Contato.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/sobre.jsx'
import Cadastro from './pages/cadastro.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        

      <nav>
        <ul>
          <li>
            <Link to='/cadastro'>Cadastro</Link>
          </li>

          <li>
          <Link to='/sobre'>Sobre</Link>
          </li>

          <li>
          <Link to='/contato'>Contato</Link>
          </li>

        </ul>
      </nav>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
