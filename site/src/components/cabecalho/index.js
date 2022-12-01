import './index.scss';
import '../../assets/common/index.scss';
import Sair from '../../assets/img/sair.png';
import storage from 'local-storage';
import { toast } from 'react-toastify';

import Logo from '../../assets/img/logo.png'
import { useNavigate } from 'react-router-dom';

export default function Index() {

    function sair(){
        if(storage('usuario-logado')){
        storage.remove('usuario-logado');
        toast.dark("Conta deslogada com Sucesso");
        navigate('/');
        }
        else if(!storage('usuario-logado')){
            toast.dark("Você não está logado");
        }
    }

    const navigate = useNavigate();

    function inicio(){
        navigate('/')
    }
    
    function navLogin(){
        navigate('/cineplix/login')
    }

    return (
        <main className='main'>
            <header className='cab'>
                <div className='cab-div-img'>
                    <img onClick={inicio} className='cab-img-logo' src={Logo} alt='' />
                </div>

                <div className='cab-div-txt'>
                    <h1 className='cab-div-txt-cineplix'>Cineplix</h1>
                </div>

                <div className='cab-div-log'>
                    <h1 className='cab-div-txt-log' onClick={navLogin} >Login</h1>
                    <img src={Sair} alt='' onClick={sair} />
                </div>
            </header>
        </main>
    );
}