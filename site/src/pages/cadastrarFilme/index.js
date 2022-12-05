import './index.scss'
import '../../assets/common/index.scss'
import { useEffect, useState } from 'react'
import { API_URL } from '../../api/config';
import { buscarImagem, inserirFilme, listarClassificacao, listarGenero, listarIdioma, salvarImagem } from '../../api/filmeAPI';
import { toast } from 'react-toastify';

import Cabecalho from '../../components/cabecalho'

export default function Index() {
    const [nome, setNome] = useState();
    const [sinopse, setSinope] = useState();
    const [duracao, setDuracao] = useState();

    const [idGenero, setIdGenero] = useState();
    const [genero, setGenero] = useState([]);

    const [idClassificacao, setIdClassificacao] = useState();
    const [classificacao, setClassificacao] = useState([]);

    const [idIdioma, setIdIdioma] = useState();
    const [idioma, setIdioma] = useState([]);

    const [imagem, setImagem] = useState();
    const [imagem2, setImagem2] = useState();


    function mostrarImagem(imagem) {
        if (typeof (imagem) == 'object') {
            return URL.createObjectURL(imagem);
        }

        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }

        else {
            return buscarImagem(imagem)
        }
    }

    async function mostrarGenero() {
        const r = await listarGenero();
        setGenero(r);
    }

    async function mostrarClassificacao() {
        const r = await listarClassificacao();
        setClassificacao(r);
    }

    async function mostrarIdioma() {
        const r = await listarIdioma();
        setIdioma(r);
    }

    function escolherImagem(tagId) {
        document.getElementById(tagId).click();
    }

    async function salvarFilme() {
        try {

            const r = await inserirFilme(nome, sinopse, duracao, idGenero, idClassificacao, idIdioma);
            console.log(r);
            await salvarImagem(r.id, imagem, imagem2);

            toast.dark(' ✔️ Produto cadastrado com sucesso!');
        }
        catch (err) {
            toast.error(err.response.data.erro);
            console.log(err)
        }
    }

    useEffect(() => {
        mostrarGenero();
        mostrarIdioma();
        mostrarClassificacao();
    }, [])

    return (
        <main className='main-cadastro' >
            <header className='Cabecalho'>
                <Cabecalho/>
            </header>

            <section className='f1-cadastro' >
                <h1>Cadastro</h1>
                <div className='f1-cadastro-div'>

                    <div className='f1-cadastro-campos'>
                        <div className='f1-cadastro-nome' >
                            <p>Nome:</p>
                            <input type='text' value={nome} onChange={e => setNome(e.target.value)} />
                        </div>

                        <div className='f1-cadastro-sinopse' >
                            <p>Sinopse</p>
                            <textarea value={sinopse} onChange={e => setSinope(e.target.value)} />
                        </div>

                        <div className='f1-cadastro-duracao'>
                            <p>Duração do filme:</p>
                            <input type='number' value={duracao} onChange={e => setDuracao(e.target.value)} />
                        </div>

                        <div className='f1-cadastro-genero'>
                            <p>Gênero do filme:</p>
                            <select value={idGenero} onChange={e => setIdGenero(e.target.value)} >
                                <option selected disabled hidden>Selecione</option>

                                {genero.map(item =>
                                    <option value={item.id}> {item.genero} </option>
                                )}
                            </select>
                        </div>

                        <div className='f1-cadastro-classificacao' >
                            <p>Classificação(Idade):</p>

                            <select value={idClassificacao} onChange={e => setIdClassificacao(e.target.value)} >
                                <option selected disabled hidden>Selecione</option>

                                {classificacao.map(item =>
                                    <option value={item.id} > {item.classificacao}</option>
                                )}
                            </select>
                        </div>

                        <div className='f1-cadastro-idioma' >
                            <p>Idioma:</p>
                            <select value={idIdioma} onChange={e => setIdIdioma(e.target.value)} >
                                <option selected disabled hidden>Selecione</option>

                                {idioma.map(item =>
                                    <option value={item.id} > {item.idioma}</option>
                                )}
                            </select>
                        </div>
                    </div>

                    <div className='f1-imagens' >
                        
                        <div className='insert-img-agrupamento-div1-1' onClick={() => escolherImagem('imagem')}>

                            <input type='file' id='imagem' onChange={e => setImagem2(e.target.files[0])} />
                            {imagem2 &&

                                <img className='foto' src={mostrarImagem(imagem2)} alt='' />
                            }
                        </div>

                        <h1 className='f1-capa'>Capa do filme</h1>

                        <div className='img-2' onClick={() => escolherImagem('imagem2')}>

                            <input type='file' id='imagem2' onChange={e => setImagem(e.target.files[0])} />
                            {imagem &&
                                <img className='foto2' src={mostrarImagem(imagem)} alt='' />
                            }
                        </div>

                        <h1>Foto do filme</h1>

                    </div>

                </div>

                <div>
                    <button className='botao' onClick={salvarFilme}>Cadastrar</button>
                </div>
            </section>
        </main>
    )
}