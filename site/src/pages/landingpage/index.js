import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import Carrosel from '../../components/carrosel'

export default function Index(){
    return(
        <main>
            <header>
                <Cabecalho/>
            </header>
            
            <section>
                <Carrosel/>
            </section>

            <section>
                <div>
                    <h1>Opa</h1>
                </div>
            </section>
            
        </main>
    )
}