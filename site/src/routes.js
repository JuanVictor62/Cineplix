import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './pages/login'
import LandingPage from './pages/landingpage'
import Cadastro from './pages/cadastro'

export default function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< LandingPage />} />
                <Route path='/cineplix/login' element={< Login />} />
                <Route path='/cineplix/cadastro' element={< Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}