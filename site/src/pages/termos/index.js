import './index.scss'
import '../../assets/common/index.scss'

import Cabecalho from '../../components/cabecalho'

export default function Index(){

    function voltar(){
        window.history.back()
    }

    return(
        <main>
            <header>
                <Cabecalho/>
            </header>

            <section>
                <div>
                    <h1 onClick={voltar} >Voltar</h1>
                </div>

                <div>
                    <h1>Termos de Uso</h1>
                    
                    <div>
                        <p>

                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}