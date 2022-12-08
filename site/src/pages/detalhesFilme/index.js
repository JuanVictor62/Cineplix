import './index.scss'
import Cabecalho from '../../components/cabecalho'
import { useEffect, useState } from 'react';
import { filmePorId } from '../../api/filmeAPI';
import { useParams, useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/config';
import { toast } from 'react-toastify';
import storage from 'local-storage';
import Rodape from '../../components/rodape'

export default function Index(){
    const [filme, setFilme] = useState({info: {}, imagens: []});
    const [foto, setFoto] = useState(0);
    const [capa, setCapa] = useState(1);

    const {id} = useParams();
    const navigate = useNavigate();

    async function carregarFilme(){
        const r = await filmePorId(id);
        console.log(r);
        setFilme(r);
    }

    function exibirFoto() {
        if (filme.imagens.length > 0) {
            return API_URL + '/' + filme.imagens[foto]
        }
    }

    function exibirCapa() {
        if (filme.imagens.length > 0) {
            return API_URL + '/' + filme.imagens[capa]
        }
    }

    function adicionarCarrinho() {
        let carrinho = [];
        if (storage('carrinho')) {
            carrinho = storage('carrinho')
        }

        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
            })
            storage('carrinho', carrinho)
            toast.dark("🛒 Item Adicionado ao Carrinho")
            navigate('/cineplix/pagamento')
        }
    }


    useEffect(() => {
        carregarFilme();
    }, [])
    return(
        <main className='f1-detalhes' >
            <header>
                <Cabecalho/>
            </header>

            <section className='f1-imagens'>
                <div className='f1-imagens-div' >
                    <img className='f1-capa' src={exibirCapa()}/>
                    <img className='f1-foto' src={exibirFoto()} />
                    <div className='f1-txt-div' >
                        <p>{filme.info.nome}</p>
                    </div>
                </div>

                <div className='f1-info-filme' >
                    <div className='f1-info-sinopse' >
                        <h1 className='f1-info-sin' >Sinopse</h1>
                        <p className='f1-info-sinop'  >{filme.info.sinopse}</p>
                    </div>

                    <div className='f1-div' >
                        <div className='f1-div-genero'>
                            <p>Genero: &nbsp;</p>
                            <p> {filme.info.genero} </p>
                        </div>

                            <p> Classificacao:&nbsp;</p>
                        <div className='f1-div-clas' >
                            <p> Filme recomendado para maiores de {filme.info.classificacao} anos</p>
                        </div>
                    </div>

                    <div className='f1-div-2'>
                        <div className='f1-div-idioma'>
                            <p>Idioma: &nbsp;</p>
                            <p> {filme.info.idioma} </p>
                        </div>

                        <div className='f1-div-duracao' >   
                            <p>Duração: &nbsp;</p>
                            <p> {filme.info.duracao} minutos</p>
                        </div>
                    </div>

                    <div className='f1-div-comprar' >
                        <h1>Deseja comprar ingressos para este filme?</h1>
                        <button className='bt' onClick={adicionarCarrinho} >Comprar</button>
                    </div>

                </div>
            </section>

            <footer>
                <Rodape/>
            </footer>
        </main>
    );
}