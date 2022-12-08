import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import { useNavigate } from 'react-router-dom'

export default function Index(){
    const navigate = useNavigate();

    function navDin(){
        navigate('/cineplix/pagamento/dinheiro');
    }

    function navCartao(){
        navigate('/cineplix/pagamento/cartao')
    }

    return(
        <main className='f1-tipo-pagamento' >
            <header>
                <Cabecalho/>
            </header>

            <section className='f1-tipo'>
                <h1 className='f1-titt' >Tipo de Pagamento</h1>

                <button className='f1-bt' onClick={navDin} >Dinheiro</button>
                <button className='f1-bt2' onClick={navCartao} >Cartão de credito</button>
            </section>
        </main>
    )
}