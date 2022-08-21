import { useState, useEffect } from 'react'
import React from 'react'
import './style.css'
import api from  '../../services/api'
import { Link } from "react-router-dom";
import { AiOutlineCaretLeft } from "react-icons/ai";

export default () =>{
    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Email, setEmail] = useState('');
    const [Idade, setIdade] = useState('');
    const [Senha, setSenha] = useState('');

    const post = () =>{
        const data = {
            Nome: Nome,
            Sobrenome:Sobrenome,
            Email:Email,
            Idade:Idade,
            Senha:Senha
        }
        api.post('/Person',data).then((res)=> console.log(res.data.message)).catch((err)=> console.log(err.error))
    }
    return <div className='Registrer_div'>
            <Link to={'/'} className='Registrer_Link'><AiOutlineCaretLeft/> Voltar</Link>
            <h2>
            Inscrever-se
            </h2>
            <p>Ao fazer sua inscrição, seu dados serão <a href='#'>Salvos em um banco de dados</a></p>
            <form>
                <label htmlFor="Nome">Nome</label>
                <input type="text" name='Nome' id='Nome' placeholder='Seu Nome!' onChange={(e)=>{
                    setNome(e.target.value)
                }}/>
                <label htmlFor="Sobrenome">Sobrenome</label>
                <input type="text" name='Sobrenome' id='Sobrenome' placeholder='Seu Sobrenome!' onChange={(e)=>{
                    setSobrenome(e.target.value)
                }}/>
                <label htmlFor="Email">Email</label>
                <input type="email" name='Email' id='Email' placeholder='Seu@email.com'onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <label htmlFor="Idade">Idade</label>
                <input type="number" name="Idade" id="Idade" placeholder='0' onChange={(e)=>{
                    setIdade(e.target.value)
                }}/>
                <label htmlFor="Senha">Senha</label>
                <input type="password" name="Senha" id="Senha" placeholder='*****' onChange={(e)=>{
                    setSenha(e.target.value)
                }}/>
            </form>
            <div className='Button_Registrer'>
                <button onClick={()=>{
                    post()
                }}>Registrar</button>
            </div>
    </div>
}