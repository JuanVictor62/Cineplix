import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/login'
import LandingPage from './pages/landingpage'
import Cadastro from './pages/cadastro'
import CadastroFilme from './pages/cadastrarFilme'

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< LandingPage />} />
                <Route path='/cineplix/login' element={< Login />} />
                <Route path='/cineplix/cadastro' element={< Cadastro />} />
                <Route path='/admin/cadastro' element={< CadastroFilme />} />
            </Routes>
        </BrowserRouter>
    );
}