import './index.scss'
import Logo from '../../assets/img/logo.png';
import Github from '../../assets/img/github.png'
import Linkedln from '../../assets/img/linkedin.png'

export default function Index(){
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
                            <p>Juan Victor</p>
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
                            <p>Eduardo Cruz</p>
                            <a className='dudu-info' target="_blank" rel="noopener noreferrer">
                                <img className='dudu-linkedln' src={Linkedln} alt='' />
                            </a>
                        </div>

                        <div className='rodape-luiz' >
                            <p>Luiz Fernando</p>
                            <a className='luiz-info' target="_blank" rel="noopener noreferrer" >
                                <img className='luiz-linkedln' src={Linkedln} alt='' />
                            </a>
                        </div>

                        <div className='rodape-salomao' >
                            <p>Arthur Salomão</p>
                            <a className='salomao-info' href='https://www.linkedin.com/in/arthur-salomão-247a35228/' target="_blank" rel="noopener noreferrer">
                                <img className='salomao-linkedln' src={Linkedln} alt='' />
                            </a>
                        </div>

                        <div className='rodape-matheus' >
                            <p>Matheus Nunes</p>
                            <a className='matheus-info' target="_blank" rel="noopener noreferrer">
                                <img className='matheus-linkedln' src={Linkedln} alt='' />
                            </a>
                        </div>
                    </div>

                    <div>
                        <p>Termos de uso</p>
                        <p>Suporte</p>
                        <p>SAC</p>
                    </div>
                        

                    <div>
                        <p>Cineplix</p>
                        <p>Nosso Catálogo</p>
                    </div>


                    <div>
                        <p>Contato</p>
                        <p>Fale Conosco</p>
                        
                    </div>

                </div>
            </div>
        </main>
    )
}