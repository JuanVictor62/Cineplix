import './index.scss'
import '../../assets/common/index.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscarImagem, listarFilmes } from '../../api/filmeAPI';
import { API_URL } from '../../api/config';

export default function Index() {
    const [filme, setFilme] = useState([]);

    async function verFilmes() {
        const r = await listarFilmes();
        setFilme(r);
        console.log(r);
    }

    useEffect(() => {
        verFilmes();
        alterarCor();
    }, [])

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

    function alterarCor(){
        if(filme.classificacao == "L"){
            console.log("Socorrooooo")
        }
        else if(filme.classificacao == 10){
            console.log("")
        }
    }

    return (
        <main className='main-card' >
            {filme.map(item =>
                <div className='card' >
                    <div className='card-img-div'>
                        <img className='card-img'  src={mostrarImagem(item.imagem)}/>
                    </div>

                    <div className='card-txt' >
                        <p>
                            {item.nome}
                        </p>

                        <div className='card-clas-div' >
                            <p className='card-clas' >
                                {item.classificacao}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}