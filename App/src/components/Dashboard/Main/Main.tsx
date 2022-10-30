import {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import './Style.css'
import api from  '../../../services/api'

export default ({id}) => {
    const [EmailStyle, setEmailStyle] = useState('invisible')
    const [AboutSyle, setAboutSyle] = useState('invisible')
    const [About, setAbout] = useState('')
    const [Email, setEmail] = useState('')
    const [Person, setPerson] = useState({   
    Nome:"",
    Sobrenome:"",
    Email:"",
    Idade:0,
    Senha:"",
    Sobre:'',
    })

    useEffect(()=>{
        api.post('/Dashboard', {id:id}).then((res)=> {
            setPerson(res.data)
        })
    })


    return (    
        <main className='Main-1'>
            <div className='Header'>
                <h2 className='NameTag'>{`${Person.Nome} ${Person.Sobrenome}`}</h2>
                <h3 className='Custom_H3'>Profession</h3>
                <p className='Custom_P'>{Person.Idade} Anos</p>
            </div>
            <div className='Main-2'>
                <h3 className='Custom_H3'>Welcome to your Profile</h3>
                <div className='Card-Dashboard'>
                    <div className='Card_Dashboard_title'><h4 className='Custom_H4'>Email</h4><span onClick={()=>{
                        let test = EmailStyle == 'invisible' ? 'visible' : 'invisible'
                        setEmailStyle(test)
                    }}>Atualizar</span></div>
                    <div className={`Card_Dashboard_input ${EmailStyle}`}><input type="text" value={Email}  onChange={(e)=>{
                        setEmail(e.target.value)
                    }}  /><button onClick={()=>{
                        const data = {
                            id:id,
                            email:Email
                        }
                        api.put('/Dashboard/updete/email',data) 
                        setEmail('')
                        let test = EmailStyle == 'invisible' ? 'visible' : 'invisible'
                        setEmailStyle(test)
                    }}>Enviar</button></div>
                    <p className='Custom_P'>{Person.Email}</p>
                </div>
                <div className='Card-Dashboard'>
                    <div className='Card_Dashboard_title'><h4 className='Custom_H4'>About me</h4><span onClick={()=>{
                        let test = AboutSyle == 'invisible' ? 'visible' : 'invisible'
                        setAboutSyle(test)
                    }}>Atualizar</span></div>
                    <div className={`Card_Dashboard_input ${AboutSyle}`}><input  type="text" value={About}  onChange={(e)=>{
                        setAbout(e.target.value)
                    }} /><button onClick={()=>{
                        const data = {
                            id:id,
                            sobre:About
                        }
                        api.put('/Dashboard/updete/about',data) 
                        setAbout('')
                        let test = AboutSyle == 'invisible' ? 'visible' : 'invisible'
                        setAboutSyle(test)
                    }}>Enviar</button></div>
                    <p className='Custom_P'>{Person.Sobre}</p>
                </div>
            </div>
        </main>
    );
  }