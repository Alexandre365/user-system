import { useState, useEffect } from 'react'
import React from 'react'
import './style.css'
import api from  '../../services/api'
import { Link } from "react-router-dom";
import { AiOutlineCaretLeft } from "react-icons/ai";

import AlertColor from '../../function/AlertColor';
import Toast from '../toast';



export default () =>{
    const [Nome, setNome] = useState('');
    const [Sobrenome, setSobrenome] = useState('');
    const [Email, setEmail] = useState('');
    const [Idade, setIdade] = useState('');
    const [Senha, setSenha] = useState('');
    const [ConfSenha, setConfSenha] = useState('');
    const [Sobre, setSobre] = useState('Nada sobre!');
    const [menuInVisible, setMenuIsVisible] = useState(false)
    const [toast, setToast] = useState({
        Text: '',
        Stats: false,
        Color: ''
    });

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
            StatusConfSenha:'',
            TextConfSenha: '',
        }
    );
   

    const post = () =>{
        setColor(previousState =>{
            return{...previousState, TextNome: AlertColor(Nome, 'seu Nome').TextNome}
        })
        setColor(previousState =>{
            return{...previousState, StatusNome: AlertColor(Nome, 'seu Nome').StatusNome}
        }) 
        setColor(previousState =>{
            return{...previousState, TextSobrenome: AlertColor(Sobrenome, 'seu Sobrenome').TextNome}
        })
        setColor(previousState =>{
            return{...previousState, StatusSobrenome: AlertColor(Sobrenome, 'seu Sobrenome').StatusNome}
        }) 
        setColor(previousState =>{
            return{...previousState, TextEmail: AlertColor(Email, 'seu Email').TextNome}
        })
        setColor(previousState =>{
            return{...previousState, StatusEmail: AlertColor(Email, 'seu Email').StatusNome}
        }) 
        setColor(previousState =>{
            return{...previousState, TextIdade: AlertColor(Idade, 'sua Idade').TextNome}
        })
        setColor(previousState =>{
            return{...previousState, StatusIdade: AlertColor(Idade, 'sua Idade').StatusNome}
        }) 
        setColor(previousState =>{
            return{...previousState, TextSenha: AlertColor(Senha, 'sua Senha').TextNome}
        })
        setColor(previousState =>{
            return{...previousState, StatusSenha: AlertColor(Senha, 'sua Senha').StatusNome}
        }) 
        setColor(previousState =>{
            return{...previousState, TextConfSenhaSenha: AlertColor(ConfSenha, 'Confirme sua senha').TextNome}
        })
        setColor(previousState =>{
            return{...previousState, StatusConfSenhaSenha: AlertColor(ConfSenha, 'Confirme sua senha').StatusNome}
        })

        api.post('/Person/Email', {Email:Email}).then((res)=> {
           if (res.data.length >= 1) {
            setColor(previousState =>{
                return{...previousState, TextEmail: 'Email já existe!'}
            })
            setColor(previousState =>{
                return{...previousState, StatusEmail: 'erro'}
            })
           } else {
            setColor(previousState =>{
                return{...previousState, TextEmail: ''}
            })
            setColor(previousState =>{
                return{...previousState, StatusEmail: 'Sucesso'}
            })
            if (Senha == ConfSenha && Senha != '' && ConfSenha != '' ) {
                
                const data = {
                    Nome: Nome,
                    Sobrenome:Sobrenome,
                    Email:Email,
                    Idade:Idade,
                    Senha:Senha,
                    Sobre:Sobre
                }
        
                api.post('/Person',data).then((res)=> {
                    setToast(PreviousState =>{
                        return{...PreviousState, Text: res.data.message}
                    })
                    setToast(PreviousState =>{
                        return{...PreviousState, Color: 'Toast_Sucesso'}
                    })
                    setToast(PreviousState =>{
                        return{...PreviousState, Stats: true}
                    })
                }).catch((err)=> console.log(err.error))
            } else {
                
            }
           }
        })
            
    }

    
    return <div className='Registrer_div'>
        <Toast Text={toast.Text} Stats={toast.Stats} Color={toast.Color}/>
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

                <label htmlFor="ConfSenha">Confirma Senha</label>
                <input type="password" name="ConfSenha" id="ConfSenha" className={Color.StatusConfSenha} placeholder='*****' onChange={(e)=>{
                    setConfSenha(e.target.value)
                }}/>
                <span>{Color.TextConfSenha}</span>
                <label htmlFor="Sobre">Sobre Você</label>
                <textarea name="" id="" cols={20} rows={20} maxLength={100} onChange={(e)=>{
                    setSobre(String(e.target.value))
                }}></textarea>

            </form>
            <div className='Button_Registrer'>
                <button onClick={()=>{
                    post()
                }}>Registrar</button>
            </div>
    </div>
}