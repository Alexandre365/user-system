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

    // color 
    const [Color, setColor] = useState(
        {
            StatusNome:'',
            TextNome: '',
            StatusSobrenome:'',
            TextSobrenome: '',
            StatusEmail:'',
            TextEmail: '',
            StatusIdade:'',
            TextIdade: '',
            StatusSenha:'',
            TextSenha: '',
        }
    );

    const post = () =>{

        if(!Nome || typeof Nome == undefined || Nome == null){
            setColor(previousState =>{
                return{...previousState, TextNome: 'Coloque um Nome'}
            })    
            setColor(previousState =>{
                return{...previousState, StatusNome: 'erro'}
            })      
        }else{
            setColor(previousState =>{
                return{...previousState, TextNome: ''}
            })    
            setColor(previousState =>{
                return{...previousState, StatusNome: 'Sucesso'}
            })
        }
        if(!Sobrenome || typeof Sobrenome == undefined || Sobrenome == null){
            setColor(previousState =>{
                return{...previousState, TextSobrenome: 'Coloque um Sobrenome'}
            })    
            setColor(previousState =>{
                return{...previousState, StatusSobrenome: 'erro'}
            })       
        }else{
            setColor(previousState =>{
                return{...previousState, TextSobrenome: ''}
            })    
            setColor(previousState =>{
                return{...previousState, StatusSobrenome: 'Sucesso'}
            })
        }
        if(!Email || typeof Email == undefined || Email == null){
            setColor(previousState =>{
                return{...previousState, TextEmail: 'Coloque um Email'}
            })    
            setColor(previousState =>{
                return{...previousState, StatusEmail: 'erro'}
            })      
        }else{
            setColor(previousState =>{
                return{...previousState, TextEmail: ''}
            })    
            setColor(previousState =>{
                return{...previousState, StatusEmail: 'Sucesso'}
            })
        }
        if(!Idade || typeof Idade == undefined || Idade == null){
            setColor(previousState =>{
                return{...previousState, TextIdade: 'Coloque sua idade'}
            })    
            setColor(previousState =>{
                return{...previousState, StatusIdade: 'erro'}
            })      
        }else{
            setColor(previousState =>{
                return{...previousState, TextIdade: ''}
            })    
            setColor(previousState =>{
                return{...previousState, StatusIdade: 'Sucesso'}
            })
        }
        if(!Senha || typeof Senha == undefined || Senha == null){
            setColor(previousState =>{
                return{...previousState, TextSenha: 'Coloque sua Senha validade'}
            })    
            setColor(previousState =>{
                return{...previousState, StatusSenha: 'erro'}
            })      
        }else{
            setColor(previousState =>{
                return{...previousState, TextSenha: ''}
            })    
            setColor(previousState =>{
                return{...previousState, StatusSenha: 'Sucesso'}
            })
        }

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
                <input type="text" name='Nome' id='Nome' className={Color.StatusNome} placeholder='Seu Nome!' onChange={(e)=>{
                    setNome(e.target.value)
                }}/>
                <span>{Color.TextNome}</span>

                <label htmlFor="Sobrenome">Sobrenome</label>
                <input type="text" name='Sobrenome' id='Sobrenome' className={Color.StatusSobrenome} placeholder='Seu Sobrenome!' onChange={(e)=>{
                    setSobrenome(e.target.value)
                }}/>
                <span>{Color.TextSobrenome}</span>

                <label htmlFor="Email">Email</label>
                <input type="email" name='Email' id='Email' className={Color.StatusEmail} placeholder='Seu@email.com'onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>
                <span>{Color.TextEmail}</span>

                <label htmlFor="Idade">Idade</label>
                <input type="number" name="Idade" id="Idade" className={Color.StatusIdade} placeholder='0' onChange={(e)=>{
                    setIdade(e.target.value)
                }}/>
                <span>{Color.TextIdade}</span>

                <label htmlFor="Senha">Senha</label>
                <input type="password" name="Senha" id="Senha" className={Color.StatusSenha} placeholder='*****' onChange={(e)=>{
                    setSenha(e.target.value)
                }}/>
                <span>{Color.TextSenha}</span>
            </form>
            <div className='Button_Registrer'>
                <button onClick={()=>{
                    post()
                }}>Registrar</button>
            </div>
    </div>
}