import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/login'
import LandingPage from './pages/landingpage'
import Cadastro from './pages/cadastro'
import CadastroFilme from './pages/cadastrarFilme'
import Catalogo from './pages/catalogo'
import DetalhesFilme from './pages/detalhesFilme'
import Pagamento from './pages/pagamento'
import PagamentoCartao from './pages/pagamentoCartao'
import PagamentoDinheiro from './pages/pagamentoDinheiro'

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< LandingPage />} />
                <Route path='/cineplix/login' element={< Login />} />
                <Route path='/cineplix/cadastro' element={< Cadastro />} />
                <Route path='/admin/cadastro' element={< CadastroFilme />} />
                <Route path='/cineplix/catalogo' element={< Catalogo />} />
                <Route path='/cineplix/detalhesFilme/:id' element={< DetalhesFilme />} />
                <Route path='/cineplix/pagamento' element={<Pagamento/>} />
                <Route path='/cineplix/pagamento/cartao' element={< PagamentoCartao/>} />
                <Route path='/cineplix/pagamento/dinheiro' element={< PagamentoDinheiro/>} />
            </Routes>
        </BrowserRouter>
    );
}