import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import { IMaskInput } from 'react-imask';
import validator from 'validator';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CadastroUsuario } from '../../api/usuarioAPI.js';

export default function Index(){
    const [nome, setNome] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senha2, setSenha2] = useState('');

    const navigate = useNavigate();

    async function cadastroUser() {
        try {
            if (validator.isEmail(email)) {
                if (senha != senha2) {
                    toast.error("Senhas não coincidem");
                }
                
                else {
                const novoUsuario = await CadastroUsuario(nome, dtNascimento, telefone, email, senha);
                toast.dark(' ✔️ Cadastro concluido com secesso!');
                navigate('/cineplix/login');
                }

            }

            else {
                toast.warn('Email inválido');
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
                <div>
                    <h1>Cadastre-se</h1>
                </div>

                <div>
                    Preencha os Campos abaixo
                </div>

                <div>
                    <div>
                        <div>
                            <p>Nome:</p>
                            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div>
                            <p>Data de Nascimento:</p>
                            <input type='date' value={dtNascimento} onChange={e => setDtNascimento(e.target.value)} />
                        </div>

                        <div>
                            <p>Telefone:</p>
                            <IMaskInput mask="(00)00000-0000" value={telefone} onChange={e => setTelefone(e.target.value)} />
                        </div>

                        <div>
                            <p>Email:</p>
                            <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div>
                            <p>Senha:</p>
                            <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>
                        </div>

                        <div>
                            <p>Confirmação de Senha:</p>
                            <input type='password' value={senha2} onChange={e => setSenha2(e.target.value)} />
                        </div>

                        <div>
                            <button onClick={cadastroUser}>Cadastrar</button>
                        </div>
                    </div>

                    <div>
                        <img alt='' />
                    </div>
                </div>
            </section>
        </main>
    )
}