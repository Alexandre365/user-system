import {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineCaretLeft } from "react-icons/ai";
import './Style.css'

export default () => {

    return (    
        <header className='banner'>
            <Link to={'/'} className='Dashboard_Link'><AiOutlineCaretLeft/> Voltar</Link>
            <div className='Central'>
                <div className='perfil'></div>
            </div>
        </header>
    );
}