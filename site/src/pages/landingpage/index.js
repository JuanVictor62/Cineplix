import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import Carrosel from '../../components/carrosel'
import CardFilmes from '../../components/cardFilme'

export default function Index(){
    return(
        <main className='f1-landing'>
            <header>
                <Cabecalho/>
            </header>
            
            <section>
                <Carrosel/>
            </section>

            <section className='f1-card'>
                <div>
                    <CardFilmes/>
                </div>
            </section>
            
        </main>
    )
}