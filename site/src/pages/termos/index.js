import './index.scss'
import '../../assets/common/index.scss'

import Cabecalho from '../../components/cabecalho'

export default function Index() {

    function voltar() {
        window.history.back()
    }

    return (
        <main className='f1-termos' >
            <header>
                <Cabecalho />
            </header>

            <section className='f1-section-termos' >
                <div className='f1-div-bt' >
                    <button className='f1-bt' onClick={voltar} >Voltar</button>
                </div>

                <div className='f1-div' >
                    <h1>Termos de Uso</h1>

                    <div>
                        <p>
                            Estes Termos de Uso (“Termos”) descrevem as condições sob as quais são prestados os Serviços e é realizado o acesso ao Site da cineplix.com Ltda., inscrita no CNPJ sob o no. 00.860.640/0001-71 ou suas subsidiárias ("nós", "nosso", "nos" ou “cineplix.com”). Quando mencionamos “Site” ou “Serviços” nesses Termos, nos referimos ao site da cineplix.com, hotsites temporários, portais promocionais, bem como nossos aplicativos para dispositivos móveis, e-mails e outras comunicações que fazem referência a estes Termos ou outros de nossas Políticas, bem como outros serviços que podemos oferecer por esses canais. Estes Termos incorporam as demais Políticas disponibilizadas em nosso site.
                        </p>

                        <h4>
                            1. Aceitação dos Termos
                        </h4>

                        <p>
                            Estes Termos de Uso disciplinam os termos e condições aplicáveis a seu uso dos Serviços. Ao utilizar os Serviços, você ratifica que leu, compreendeu e concordou em ser legalmente vinculado a estes Termos.
                        </p>

                        <p>
                            Se você não concorda com estes Termos, por favor não utilize os Serviços.
                        </p>

                        <p>Sujeito às condições abaixo, a cineplix  poderá modificar estes Termos periodicamente e de modo não retroativo, e modificar, adicionar ou descontinuar qualquer aspecto, conteúdo ou característica dos Serviços, a seu próprio critério. Seu uso ou acesso continuado dos Serviços após a publicação de quaisquer mudanças nos Termos constitui sua aceitação de tais mudanças. Na medida em que uma lei ou decisão judicial aplicável determine que a aplicação de quaisquer mudanças a estes Termos seja inexequível, tais mudanças deverão ser aplicáveis apenas com relação a eventos ou circunstâncias que ocorrerem após a data de tais mudanças, na medida em que for necessário para evitar que estes Termos sejam considerados inexequíveis.</p>

                        <p>
                        Qualquer forma de transferência ou sublicença, ou acesso, distribuição, reprodução, cópia, retransmissão, publicação, venda ou exploração (comercial ou não) não autorizados de qualquer parte dos Serviços incluindo, mas não se limitando a todo conteúdo, serviços, produtos digitais, ferramentas ou produtos, é expressamente proibida por estes Termos.
                        </p>

                        <p>
                            2. Uso Permitido
                        </p>

                        <p>
                        Nossos Site e Serviços são para seu uso pessoal e não comercial. Eles contem materiais que são integralmente ou parcialmente derivados de materiais fornecidos por e de propriedade da cineplix e outras fontes. Tais materiais são protegidos por direitos autorais, registros de marca e outras leis aplicáveis. Salvo com consentimento por escrito da cineplix.com, você concorda que não utilizará os Serviços, ou duplicará, baixará (download), publicará, modificará ou de qualquer outra forma distribuirá ou utilizará qualquer material presente nos Serviços ou no Site para qualquer propósito, salvo para seu uso pessoal e não comercial. Você também concorda que você não irá disponibilizar link para qualquer página no Site além da página inicial (por exemplo, “deep linking”) sem o consentimento prévio por escrito da cineplix.com. O uso dos Serviços ou quaisquer materiais ou conteúdos nos Serviços para qualquer propósito não autorizado, comercial ou outros, é proibido. Você reconhece que o armazenamento, distribuição ou transmissão de materiais ilegais poderá expô-lo a responsabilização criminal e/ou civil. Você não poderá baixar (download) (além de caching de página), ou modificar os Serviços ou qualquer parte deles, a menos que nós tenhamos fornecido a você consentimento expresso e por escrito para tanto. Você não deverá fazer uso derivado dos Serviços (ou qualquer uma de suas partes) para qualquer propósito, nem deverá baixar ou copiar informações de usuários, ou de qualquer outra forma realizar coleta massiva de dados (data mining) ou atividades de recolhimento de dados similares.
                        </p>

                        <p>
                            3. Taxa de Serviço
                        </p>

                        <p>
                        A taxa de serviço é o valor cobrado pela cineplix.com quando Você compra cineplixs para cinemas parceiros da cineplix.com através de nossos Serviços. O valor da taxa de serviço é mostrado durante o processo de compra de cineplixs. Você pode comprar cineplixs diretamente na bilheteria dos cinemas sem pagar a taxa de serviço
                        </p>

                        <p>
                        4. Cadastro, Contas e Senhas

                        </p>

                        <p>
                        Se você estabelecer uma conta pessoal conosco, você concorda em fornecer dados verdadeiros e precisos sobre você no formulário de cadastro de conta, e em atualizar e manter tais informações atualizadas. Você é o único responsável por manter a confidencialidade de sua senha e conta, e você é o único responsável por todo uso de sua senha ou conta, autorizado ou não. Você não deverá permitir que outras pessoas acessem ou utilizem seu nome de usuário ou senha. Você não deverá publicar seu nome de usuário ou senha em qualquer site, nem os transmitir através de sites não seguros. Você concorda em (a) imediatamente notificar a cineplix.com acerca de qualquer uso não autorizado de sua senha ou conta ou qualquer outra violação de segurança através do endereço de e-mail avisosegurança@cineplix.com e (b) garantir que você saia de sua conta cada vez que utilizar os Serviços. O acesso e uso de áreas protegidas por senha e/ou seguras dos Serviços é restrita a usuários que tenham recebido senha válida pela cineplix.com. Nós poderemos encerrar sua adesão e acesso aos Serviços se descobrirmos que você nos forneceu informações de cadastro falsas ou enganosas. Se acreditarmos que seu nome de usuário e senha não são seguros ou que são de qualquer outra forma problemáticos, poderemos solicitar que você os altere ou encerrar sua conta.
                        </p>

                        <p>
                            5. cineplixs Móveis
                        </p>

                        <p>
                        Ao invés de trazer um cineplix com código de barras impresso em casa ou um número de confirmação para a bilheteria do cinema, alguns exibidores parceiros da cineplix.com fornecem a você a opção de ter seu cineplix em seu dispositivo móvel através do aplicativo móvel da cineplix.com (um “cineplix Móvel”). O cineplix Móvel contém um código de barras único e texto de acompanhamento com detalhes do filme que você irá assistir.
                        </p>

                        <p>
                            6. Política de Privacidade
                        </p>

                        <p>
                        Seu uso dos Serviços e qualquer informação fornecida por você ou recolhida pela cineplix.com ou partes terceiras durante qualquer visita ou uso dos Serviços é regida pela Política de Privacidade aqui incorporada através desta referência. Você concorda com a coleta, uso e compartilhamento por parte da cineplix.com de suas informações nos termos determinados na Política de Privacidade.
                        </p>

                        <p>
                            7. Conduta do Usuário e Submissões
                        </p>

                        <p>
                        Você é responsável por seu uso dos Serviços e do Site, e por quaisquer consequências decorrentes disso. No uso dos nossos Serviços e do Site você não deve:
                        </p>

                        <p>
                        - Interferir com o uso ou aproveitamento dos Serviços de qualquer outro usuário;
                        </p>

                        <p>
                        - Coletar informações sobre outros usuários ou partes terceiras através dos Serviços ou utilizar qualquer uma destas informações com o propósito de transmitir ou facilitar a transmissão não autorizada ou não solicitada de propagandas, e-mails massificados, correntes, ou qualquer outra forma de solicitação não autorizada;
                        </p>

                        <p>
                        - Realizar a coleta sistemática de dados e outros conteúdos dos Serviços para criar ou compilar, direta ou indiretamente, uma coleção, compilação, base de dados ou diretório, sem o consentimento prévio e por escrito da cineplix.com;
                        </p>

                        <p>
                        - Solicitar que outros usuários entrem, se tornem membros de, ou contribuam financeiramente para qualquer serviço online ou organização outra, advogue por ou tente fazer com que usuários entrem em esquemas ilegais ou planeje ou participe de golpes envolvendo outros usuários;
                        </p>

                        <p>
                        - Tentar conseguir acesso não autorizado a outros sistemas de computadores ou redes conectadas aos Serviços;
                        </p>

                        <p>
                        - Atuar com o propósito de manipular ou distorcer quaisquer notas ou críticas de qualquer serviço ou produto que possam vir a ser apresentados pelos Serviços, ou que possa vir a enfraquecer a sua integridade e precisão;
                        </p>

                        <p>
                        - Fornecer informações fictícias ou que escondam sua identidade ou localização, incluindo, mas não se limitando, qualquer tentativa de contornar os limites associados a promoções ou outras ofertas;
                        </p>

                        <p>
                        - Usar os Serviços para propósitos ilegais
                        </p>

                        <p>8. Monitoramento</p>

                        <p>A cineplix.com poderá, mas não está obrigada a, monitorar o uso dos Serviços pelos usuários. Durante o monitoramento, a informação poderá ser examinada, registrada, copiada, e usada para propósitos autorizados em consonância com a Política de Privacidade. Além disso, a cineplix.com se reserva o direito de durante todo o tempo divulgar qualquer informação postada em qualquer parte dos Serviços conforme necessário para satisfação de qualquer solicitação legal, regulamentar ou governamental ou recusar a postar, ou a remover, quaisquer informações ou materiais, em sua integralidade ou em parte, que a critério absoluto e exclusivo da cineplix.com são repreensíveis ou violam estes Termos</p>
                        
                        <p>
                        9. Propriedade Intelectual
                        </p>

                        <p>
                        A cineplix.com possui todos os direitos, títulos e participação em relação aos Serviços e todos os materiais e conteúdo contidos nos Serviços, incluindo, sem limitação, todo conteúdo, design de site, logos, ícones de botão, imagens, downloads digitais, compilação de dados, textos e gráficos são protegidos por direitos autorais, registros de marcas e outras leis de propriedade intelectual aplicáveis. Qualquer uso não autorizado de tais materiais ou conteúdo é estritamente proibido.
                        </p>

                        <p>
                        A permissão é outorgada a usuários individuais para copiar eletronicamente e imprimir cópia impressa de parte dos Serviços apenas para uso pessoal. Qualquer outro uso dos materiais dos Serviços, incluindo reprodução para propósitos outros que não os indicados acima, modificação, distribuição ou republicação, qualquer forma de extração de dados ou mineração de dados, ou outra exploração comercial de qualquer forma, sem permissão prévia e por escrito da cineplix.com é estritamente proibida. Você concorda que não usará qualquer robô, spider, outro dispositivo automático ou processo manual para monitorar ou copiar nossas páginas da web ou o conteúdo contido nesses sem permissão prévia e por escrito da cineplix.com.
                        </p>

                        <p>As marcas comerciais e de serviço da cineplix.com não poderão ser usadas em conexão com qualquer produto ou serviço que não sejam fornecidos ou autorizados pela cineplix.com, de qualquer maneira que provavelmente cause confusão entre clientes, ou de qualquer maneira que deprecie ou descredite a cineplix.com</p>

                        <p>
                            10. Menores
                        </p>

                        <p>
                        Os Serviços não foram formulados nem são destinados para serem usados por indivíduos menores de 18 anos e, portanto, se você for menor de 18 anos, solicitamos que você não use os Serviços nem nos forneça qualquer informação
                        </p>



                    </div>
                </div>
            </section>
        </main>
    );
}