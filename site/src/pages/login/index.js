import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import storage from 'local-storage'

import { login } from '../../api/usuarioAPI.js'
import {useEffect, useState, useRef} from 'react'

export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregado, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    async function loginUser() {
        ref.current.continuousStart();
        setCarregando(true)
        try {
            if(storage('usuario-logado')){
                toast.dark("Você já esta logado");
                ref.current.complete();
                setCarregando(false);
            }
            else{
            const r = await login(email, senha);
            storage('usuario-logado', r);

            setTimeout(() => {
                toast.dark("✅ Logado com sucesso");
                navigate('/');
            }, 1500);
        }
        }
        catch (err) {
            console.log(err)
            ref.current.complete();
            setCarregando(false);
    
            toast.error(err.response.data.erro);
        }
    }

    return(
        <main className='main-login'>
            <LoadingBar color='#fff' ref={ref} />
            <div className='cabecalho'>
                <Cabecalho/>
            </div>
            
            <section className='f1-login'>
                    <div className='f1-card'>
                        <div>
                            <h1>Login</h1>
                        </div>

                        <div className='f1-card-input'>
                            <div className='f1-card-inputs'>
                                <p>
                                    Usuario:
                                </p>
                                <input className='input' type='text' value={email} onChange={e => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <p>
                                    Senha:
                                </p>
                                <input type='password' value={senha} onChange={e => setSenha(e.target.value)} />
                            </div>

                            <div className='f1-card-button'>
                                <button onClick={loginUser} >
                                    Entrar
                                </button>
                            </div>

                            <div className='f1-cadastro'>
                                <p>Não tenho conta, desejo me <a href='/cineplix/cadastro'>cadastrar</a></p>
                            </div>

                            <div>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
    )

}