import { useState } from 'react'
import React from 'react'
import './style.css'
import api from  '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Toast from '../toast';

export default () =>{
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    // color 
    const [Color, setColor] = useState(
        {
            StatusEmail:'',
            TextEmail: '',
            StatusSenha:'',
            TextSenha: '',
        }
    );

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
          location.href = 'http://127.0.0.1:5173/dashboard'
        } catch (e) {
          console.log(e)
        }
      }


    const get = () =>{

        if(!Email || typeof Email == undefined || Email == null){
            setColor(previousState =>{
                return{...previousState, TextEmail: 'Coloque o seu Email'}
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
        if(!Senha || typeof Senha == undefined || Senha == null){
            setColor(previousState =>{
                return{...previousState, TextSenha: 'Coloque sua Senha'}
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
            Email:Email,
            Senha:Senha
        }
   
        api.post('/Login',data).then((res)=> {
            console.log(res.data[0]._id)
            storeData(res.data[0]._id)
        }).catch((err)=> console.log(err.error))
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
            <input type="text" name='Email' id='Email' className={Color.StatusEmail} placeholder='Seu@email.com' onChange={(e)=>{
                setEmail(e.target.value)
            }}/>
            <span>{Color.TextEmail}</span>

            <label htmlFor="Senha">Senha</label>
            <input type="password" name='Senha' id='Senha' className={Color.StatusSenha} placeholder='******' onChange={(e)=>{
                setSenha(e.target.value)
            }}/>
            <span>{Color.TextSenha}</span>
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