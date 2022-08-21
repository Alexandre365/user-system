import {} from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';

import Registrer from '../components/registrer/Registrer';

export default () => {
    return <main>
                <div className='App_div'>
                    <h1>Sistema de usuário</h1>
                    <div className='App_responsive'>
                        <div className='App_img'><img src="../img/undraw_futuristic_interface_re_0cm6.svg" alt="" /></div>
                        <div className='App_Login'><Registrer /></div>
                    </div>
                </div>
            </main>
  }