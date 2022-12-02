import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import { IMaskInput } from 'react-imask';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CadastroUsuario } from '../../api/usuarioAPI.js';

import CinemaIcon from '../../assets/img/cinemaicon.png'

export default function Index(){
    const [nome, setNome] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');
    const [termos, setTermos] = useState(false);

    const navigate = useNavigate();

    async function cadastroUser() {
        try {
                if(termos == false){
                    toast.error('É obrigatorio aceitar os nossos Termos de Uso');
                }

                else if (!validator.isEmail(email)) {
                    toast.error('Email invalido');
                }

                else if (senha != senha2) {
                    toast.error("Senhas não coincidem");
                }
                
                else {
                const novoUsuario = await CadastroUsuario(nome, dtNascimento, telefone, email, senha);
                toast.dark(' ✔️ Cadastro concluido com secesso!');
                navigate('/cineplix/login');
                }

            }


        
        catch (err) {
            toast.error(err.response.data.erro);
            console.log(err)
        }
    }

    return(
        <main className='Cadastro'>
            <div>
                <Cabecalho/>
            </div>

            <section className='f1-cadastro'>
                <div className='f1-cadastro-tit'>
                    <h1>Cadastre-se</h1>
                </div>

                <div className='f1-cadastro-aviso'>
                    Preencha os Campos abaixo
                </div>

                <div className='f1-cadastro-menu'>
                    <div className='f1-cadastro-campos'>
                        <div className='f1-cadastro-nome'>
                            <p className='f1-cadastro-nome-'>Nome:</p>
                            <input className='f1-cadastro-nome-input'  type='text' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>


                        <div className='f1-cadastro-campos-2'>
                            <div className='f1-cadastro-data'>
                                <p>Data de Nascimento:</p>
                                <input type='date' value={dtNascimento} onChange={e => setDtNascimento(e.target.value)} />
                            </div>

                            <div className='f1-cadastro-telefone' >
                                <p>Telefone:</p>
                                <IMaskInput mask="(00)00000-0000" value={telefone} onChange={e => setTelefone(e.target.value)} />
                            </div>
                        </div>

                        <div className='f1-cadastro-email' >
                            <p>Email:</p>
                            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className='f1-cadastro-campos-3'>
                            <div className='f1-cadastro-senha'>
                                <p>Senha:</p>
                                <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                            </div>

                            <div className='f1-cadastro-senha2'>
                                <p>Confirmação de Senha:</p>
                                <input type='password' value={senha2} onChange={e => setSenha2(e.target.value)} />
                            </div>
                        </div>


                        <div className='f1-cadastro-termos' >
                            <input className='f1-cadastro-check' type="checkbox" value={termos} onChange={e => setTermos(e.target.checked)} />
                            <p className='f1-cadastro-termos-txt' >LI E ACEITO OS <span className='f1-cadastro-termos-txt-a' >TERMOS DE USO</span></p>
                        </div>

                        <div>
                            <button onClick={cadastroUser}>Cadastrar</button>
                        </div>
                    </div>

                    <div className='f1-cadastro-icon' >
                        <img src={CinemaIcon} alt='' />
                    </div>
                </div>
            </section>
        </main>
    )
}