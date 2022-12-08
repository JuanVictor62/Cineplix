import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CardFilmes from '../../components/cardFilme';
import Rodape from '../../components/rodape'
import storage from 'local-storage'
import { useEffect } from 'react';

export default function Index(){

    useEffect(() => {
        storage('carrinho', [])
    })
    return(
        <main className='f1-catalogo' >
            <header>
                <Cabecalho/>
            </header>

            <section className='f1-cards' >
                <div className='f1-cards-txt' >
                    <br/>
                    <br/>

                    <div className='f1-card-h1'>Filmes</div>

                    <br/>

                    <h1>PEI Santo Dias da Silva</h1>

                    <p>Veja os filmes no nosso catalogo</p>
                </div>

                <div>
                    <CardFilmes/>
                </div>
            </section>

            <footer className='rodape' >
                <Rodape/>
            </footer>


        </main>
    )
}