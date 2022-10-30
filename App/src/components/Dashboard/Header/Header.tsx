import {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineCaretLeft } from "react-icons/ai";
import api from  '../../../services/api'
import './Style.css'

export default ({id}) => {

    return (    
        <header className='banner'>
            <div className='heeader'>
                <Link to={'/'} className='Dashboard_Link'><AiOutlineCaretLeft/> Voltar</Link>
                <span onClick={()=>{
                    api.delete(`http://localhost:8800/Dashboard/delete/${id}`)
                    document.location.href = 'http://127.0.0.1:5173/'
                }}>Deleta</span>
            </div>
            <div className='Central'>
                <div className='perfil'></div>
            </div>
        </header>
    );
}