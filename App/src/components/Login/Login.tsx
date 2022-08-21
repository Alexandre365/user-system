import { useState } from 'react'
import React from 'react'
import './style.css'
import api from  '../../services/api'

export default () =>{
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    const get = () =>{
        const data = {
            Email:Email,
            Senha:Senha
        }
   
        api.post('/Login',data).then((res)=> console.log(res.data)).catch((err)=> console.log(err.error))
    }

    return <div className='Login_div'>
        <h2>
            Conecte-se
        </h2>
        <p>
            Por favor entre com seu e-mail e senha
        </p>
        <form>
            <label htmlFor="Email">Email/Nome</label>
            <input type="text" name='Email' id='Email' placeholder='Seu@email.com' onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <label htmlFor="Senha">Senha</label>
            <input type="password" name='Senha' id='Senha' placeholder='******' onChange={(e)=>{
                setSenha(e.target.value)
            }}/>
        </form>
        <p>Ao fazer login, você concorda com nossos <a href='#'>Termos e Condições</a></p>
        <div className='Button_Login'>
            <button className='Button_Entrar' onClick={()=>{
                get()
                //location.href = 'http://127.0.0.1:5173/dashboard'
            }}>Entrar</button>
            <button className='Button_Inscrever_se' onClick={()=>{
                location.href = 'http://127.0.0.1:5173/registration'
            }}>Inscrever-se</button>
        </div>
    </div>
}