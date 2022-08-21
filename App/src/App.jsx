import { useState } from 'react'
import './App.css'

import Login from './components/Login/Login'

function App() {
  return (
    <main>
      <div className='App_div'>
        <h1>Sistema de usuário</h1>
        <div className='App_responsive'>
          <div className='App_img'><img src="../img/undraw_futuristic_interface_re_0cm6.svg" alt="" /></div>
          <div className='App_Login'><Login /></div>
        </div>
      </div>
    </main>
  )
}

export default App
