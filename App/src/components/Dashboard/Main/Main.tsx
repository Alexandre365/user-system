import {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import './Style.css'
import api from  '../../../services/api'

export default ({id}) => {
    const [Person, setPerson] = useState({})

    useEffect(()=>{
        api.post('/Dashboard', {id:id}).then((res)=> {
            console.log(res.data)
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
                <h4 className='Custom_H4'>Email</h4>
                <p className='Custom_P'>{Person.Email}</p>
                <h4 className='Custom_H4'>About me</h4>
                <p className='Custom_P'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
        </main>
    );
  }