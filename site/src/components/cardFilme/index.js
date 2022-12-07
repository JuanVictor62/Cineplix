import './index.scss'
import '../../assets/common/index.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { buscarImagem, listarFilmes } from '../../api/filmeAPI';
import { API_URL } from '../../api/config';

export default function Index() {
    const [filme, setFilme] = useState([]);

    const navigate = useNavigate();

    async function verFilmes() {
        const r = await listarFilmes();
        setFilme(r);
    }

    useEffect(() => {
        verFilmes();
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

    function abrirDetalhes(id) {
        navigate(`/cineplix/detalhesFilme/${id}`)
    }

    return (
        <main className='main-card' >
            {filme.map(item =>
                <div className='card' onClick={() => abrirDetalhes(item.id)} >
                    <div className='card-img-div'>
                        <img className='card-img'  src={mostrarImagem(item.imagem)}/>
                    </div>

                    <div className='card-txt' >
                        <p className='txt' >
                            {item.nome.substr(0,30)}
                        </p>

                    </div>
                </div>
            )}
        </main>
    );
}