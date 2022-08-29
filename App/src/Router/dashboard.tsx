import {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from "react-router-dom";
import { AiOutlineCaretLeft } from "react-icons/ai";
import Header from '../components/Dashboard/Header/Header';
import Main from '../components/Dashboard/Main/Main';

export default () => {
    const [id, setid] = useState('')
    useEffect(()=>{
        getData()
    })
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key')
            setid(String(value))
        } catch(e) {
            console.log(e)
        }
      }
    return (    
        <>
            <Header />
            <Main id={id} />
        </>
    );
  }