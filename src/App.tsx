import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'
import { useState } from 'react'

import './App.css'
import Equipo from './Equipo'
import Favoritos from './Favoritos'
import Home from './Home'
import Informartiva from './Informativa'
import Original from './Original'
import Usuario from './Usuario'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
      <nav className='c-menu'>
        <Link to="./Informativa">Inform</Link>
        <Link to="./Favoritos">Fav</Link>
        <Link to="./Home">Hom</Link>
        <Link to="./Original">Oring</Link>
        <Link to="./Usuario">Usua</Link>
      </nav>
      <Routes>
      <Route path="/Informativa" element={<Informartiva/>} />
      <Route path="/Favoritos" element={<Favoritos/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Original" element={<Original/>} />
      <Route path="/Usuario" element={<Usuario/>} />
      <Route path="/Equipo/:equipo" element={<Equipo/> } />
    </Routes>
    </Router>
  
    </>
  )
}

export default App
