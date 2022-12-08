import './index.scss'
import Logo from '../../assets/img/logo.png';
import Github from '../../assets/img/github.png'
import Linkedln from '../../assets/img/linkedin.png'
import { useNavigate } from 'react-router-dom';

export default function Index(){
    const navigate = useNavigate()

    function navCat(){
        navigate('/cineplix/catalogo');
    }

    function termos(){
        navigate('/cineplix/termos');
    }

    return(
        <main className='rodape' >
            <div className='rodape-mae' >
                <div className='rodape-div-logo' >
                    <img className='rodape-logo' src={Logo} alt=''/>
                </div>

                <div className='hr' >
                    <hr className='hr-1' />
                </div>

                <div className='rodape-info-div' >
                    <div className='rodape-alunos' >
                        <p>Developers:</p>
                        <div className='rodape-dev' >
                            <p className='juan' >Juan Victor</p>
                            <div>
                                <a className='dev-info' href='https://github.com/JuanVictor62' target="_blank" rel="noopener noreferrer">
                                    <img className='juan-linkedln'  src={Github} alt='' />
                                </a>

                                <a className='dev-info-2' href='https://www.linkedin.com/in/juan-victor-condori-chambi-ab1650224/' target="_blank" rel="noopener noreferrer" >
                                    <img className='juan-github' src={Linkedln} alt=''/>
                                </a>
                            </div>
                        </div>

                        <div className='rodape-dudu' >
                            <p className='dudu' >Eduardo Cruz</p>
                            <a href='https://www.linkedin.com/in/eduardo-ribeiro-0118a8253/' className='dudu-info' target="_blank" rel="noopener noreferrer">
                                <img className='dudu-linkedln' src={Linkedln} alt='' />
                            </a>
                        </div>

                        <div className='rodape-luiz' >
                            <p className='louis' >Luiz Fernando</p>
                            <a href='https://www.linkedin.com/in/luiz-fernando-445978254/' className='luiz-info' target="_blank" rel="noopener noreferrer" >
                                <img className='luiz-linkedln' src={Linkedln} alt='' />
                            </a>
                        </div>

                        <div className='rodape-salomao' >
                            <p className='saloma' >Arthur Salomão</p>
                            <a className='salomao-info' href='https://www.linkedin.com/in/arthur-salomão-247a35228/' target="_blank" rel="noopener noreferrer">
                                <img className='salomao-linkedln' src={Linkedln} alt='' />
                            </a>
                        </div>

                        <div className='rodape-matheus' >
                            <p className='matheus' >Matheus Nunes</p>
                            <a href='https://www.linkedin.com/in/matheus-santos-29a974254' className='matheus-info' target="_blank" rel="noopener noreferrer">
                                <img className='matheus-linkedln' src={Linkedln} alt='' />
                            </a>
                        </div>
                    </div>

                    <div className='div-1' >
                        <a onClick={termos}>Termos de uso</a>
                        <a href='https://api.whatsapp.com/send/?phone=5511980165866&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer">Suporte</a>
                        <a href='https://api.whatsapp.com/send/?phone=5511980165866&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer">SAC</a>
                    </div>
                        

                    <div className='div-2'>
                        <a href='/'>Cineplix</a>
                        <a onClick={navCat} >Nosso Catálogo</a>
                    </div>


                    <div className='div-3' >
                        <a href='https://api.whatsapp.com/send/?phone=5511980165866&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer">Contato</a>
                        <a href='https://api.whatsapp.com/send/?phone=5511980165866&text&type=phone_number&app_absent=0' target="_blank" rel="noopener noreferrer">Fale Conosco</a>
                        
                    </div>

                </div>
            </div>
        </main>
    )
}