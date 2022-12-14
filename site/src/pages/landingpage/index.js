import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import Carrosel from '../../components/carrosel'
import CardFilmes from '../../components/cardFilme'
import Escola from '../../assets/img/escola.jpg'
import Rodape from '../../components/rodape'
import { useEffect } from 'react'
import storage from 'local-storage'
import Img4k from '../../assets/img/4k.png'
import Meme4k from '../../assets/img/4kmeme.png'
import EscolaIcon from '../../assets/img/escolaIcon.png'
import Missao from '../../assets/img/missao.png'

import { useNavigate } from 'react-router-dom'

export default function Index(){
    const navigate = useNavigate();

    function navCatalogo(){
        navigate('/cineplix/catalogo')
    }

    useEffect(() => {
        storage('carrinho', [])
    }, [])

    return(
        <main className='f1-landing'>
            <header>
                <Cabecalho/>
            </header>
            
            <section>
                <Carrosel/>
            </section>

            <section className='f1-card'>
                <div className='f1-card-div' >
                    <div className='f1-card-div-tit' >
                        <h1 className='f1-card-tit' >Veja nosso Catalogo de Filmes</h1>
                    </div>

                    <div className='f1-card-div-bt' >
                        <button onClick={navCatalogo} className='f1-card-bt' >Ver Catálogo</button>
                    </div>
                </div>
            </section>

            <section className='f1-escola'>
                <div className='f1-escola-div' >
                    <div className='f1-escola-div-img' >
                        <img className='f1-escola-img'  src={Escola} alt='' />
                    </div>
                    
                    <div className='f1-escola-div-txt' >
                        <p className='f1-escola-txt' >O Cineplix é um projeto que foi criado pelos alunos da instituição de ensino PEI Santo Dias da Silva, aonde uma empresa de lazer buscava automatizar o seu processo de vendas, assim buscaram a nossa equipe de 'Developers' para assumir essa responsabilidade e função. </p>
                    </div>
                </div>
            </section>

            <section className='f1-icon' >
                <div className='card-1'>
                    <img className='card-1-img' src={Img4k} />
                    <p className='card-1-txt' >Os filmes exibidos pelo nosso cinema são as de mais alta qualidade, aonde queremos oferecer o mais puro entretenimento para nosssos clientes</p>
                </div>

                <div className='card-2' >
                    <img  className='card-2-img' src={EscolaIcon} />
                    <p className='card-2-txt' >Trabalho orientado pelo professor Matheus, aonde ele nos ensinou os fundamentos da logica</p>
                </div>

                <div className='card-3' >
                    <img className='card-3-img' src={Missao} />
                    <p className='card-3-txt' >O cineplix é um cinema recém inaugurado, aonde nos dedicamos a proporcionar uma experiência cinematográfica inesquecível para cada um de nosso Clientes.</p>
                </div>
        

            </section>

            <footer>
                <Rodape/>
            </footer> 
        </main>
    )
}