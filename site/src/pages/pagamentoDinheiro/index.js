import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import { useState, useEffect } from 'react';
import storage from 'local-storage'
import { buscarImagem, filmePorId, inserirPedidoDinheiro } from '../../api/filmeAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Index(){
    const [idFilme, setIdFilme] = useState();
    const [qtdInt, setQtdInt] = useState(0);
    const [qtdMeia, setQtdMeia] = useState(0);
    const [adicionais, setAdicionais] = useState();
    const [total, setTotal] = useState();

    const [comboNatal, setComboNatal] = useState(0);
    const [comboMedio, setComboMedio] = useState(0);

    const [picPeq, setPicPeq] = useState(0);
    const [picMed, setPicMed] = useState(0);
    const [picGra, setPicGra] = useState(0);

    const [refriPeq, setRefriPeq] = useState(0);
    const [refriMed, setRefriMed] = useState(0);
    const [refriGra, setRefriGra] = useState(0);

    const [itens, setItens] = useState([])

    const navigate = useNavigate();


    async function btPedido(){
        let produtos = Storage('carrinho').id;
        let id = storage('usuario-logado').id;

        let totalIngressos = (17.50 * qtdInt) + (13.50 * qtdMeia);


    }

    function calcularTotal(){
        let total1 = 0;
        total1 = (17.50 * qtdInt) + (13.50 * qtdMeia);
        return total1.toFixed(2);
    }

    async function carregarItens() {
        let carrinho = storage('carrinho')
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                let p = await filmePorId(produto.id);
                temp.push({
                    produto: p
                })
            }
            setItens(temp)
        }
    }

    async function pagamentoDinheiro(){
                let idUsuario = storage('usuario-logado').id;
                let carrinho = [];
                
                let idFilme = carrinho.find(item => item.id === item.id)

                let total1 = 0;
                total1 = (17.50 * qtdInt) + (13.50 * qtdMeia);

                const r = await inserirPedidoDinheiro(idUsuario, idFilme , qtdInt, qtdMeia, adicionais, total1);
                toast.dark("Pedido realizado com sucesso")
    }
    

    function mostrarImagem(imagem) {
        return buscarImagem(imagem)
    }

    useEffect(() => {
        carregarItens();

        if(!storage('carrinho')){
            navigate('/')
            toast.dark('Nop')
        }
    }, [])

    return(
        <main className='f1-pagamento'>
            <header>
                <Cabecalho/>
            </header>

            <section className='f1-pagamento-dinheiro'>
                <div className='f1-tit-txt'>
                    <h1>
                        Pagamento - Dinheiro
                    </h1>
                </div>

                <div className='f1-div-ingressos' >
                    <h1 className='tit' >Quantidade de Ingressos</h1>

                    <div className='f1-ingressos' >
                        <div className='f1-ingint' >
                            <p>Ingressos Inteiros *17.50: </p>
                            <select onChange={e => setQtdInt(e.target.value)} value={qtdInt} className='f1-ingint-slc' >
                                <option> 0 </option>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                                <option> 4 </option>
                                <option> 5 </option>
                            </select>
                        </div>

                        <div className='f1-ingmeia' >
                            <p>Ingressos Meias *13.50: </p>
                            <select onChange={e => setQtdMeia(e.target.value)} value={qtdMeia} className='f1-ingmeia-slc' >
                                <option> 0 </option>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                                <option> 4 </option>
                                <option> 5 </option>
                            </select>
                        </div>
                    </div>

                    <div className='f1-combos' >
                        <h1 className='f1-combos-tit'> Combos adicionais </h1>
                        <h3>Combo Natal</h3>
                        <div className='f1-combos-div' >
                            <p>2 Pipoca Grande personalizada + 2 Refri Refil</p>
                            <select onChange={e => setComboNatal(e.target.value)} value={comboNatal}  className='f1-combo-natal' >
                                <option> 0 </option>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                                <option> 4 </option>
                                <option> 5 </option>
                            </select>
                        </div>

                        <h3>Combo médio</h3>
                        <div className='f1-combo-medio' >
                            <p>1 Pipoca media + 1 Refri lata + 1 água</p>
                            <select onChange={e => setComboMedio(e.target.value )} value={comboMedio}  className='f1-combo-mediobt' >
                                <option> 0 </option>
                                <option> 1 </option>
                                <option> 2 </option>
                                <option> 3 </option>
                                <option> 4 </option>
                                <option> 5 </option>
                            </select>
                        </div>
                    </div>

                    <div className='f1-indiv' >
                        <div className='f1-indiv-div' >
                            <h1 className='tit-2' >Produtos individuais</h1>

                            <div className='f1-picpeq' >
                                <h3>Pipoca pequena: </h3>
                                <select onChange={e => setPicPeq(e.target.value)} value={picPeq}  className='f1-picpeq-bt' >
                                    <option> 0 </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select>
                            </div>

                            <div className='f1-picmed' >
                                <h3>Pipoca média:</h3>
                                <select onChange={e => setPicMed(e.target.value)} value={picMed} className='f1-picmed-bt' >
                                    <option selected disabled hidden>Selecione</option>
                                    <option> 0 </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select>
                            </div>

                            <div className='f1-picgra' >
                                <h3>Pipoca grande:</h3>
                                <select onChange={e => setPicGra(e.target.value)} value={picGra} className='f1-picgra-bt' >
                                    <option selected disabled hidden>Selecione</option>
                                    <option> 0 </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select>
                            </div>
                        </div>
                        
                        <div className='f1-refri' >
                            <div className='f1-refripeq' >
                                <h3>Refrigerante pequeno: </h3>
                                <select onChange={e => setRefriPeq(e.target.value)} value={refriPeq} className='f1-refripeq-bt'>
                                    <option selected disabled hidden>Selecione</option>
                                    <option> 0 </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select>
                            </div>
                            
                            <div className='f1-refrimed' >
                                <h3>Refrigerante médio</h3>
                                <select onChange={e => setRefriMed(e.target.value)} value={refriMed} className='f1-refrimed-bt' >
                                    <option selected disabled hidden>Selecione</option>
                                    <option> 0 </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select>
                            </div>
                            
                            <div className='f1-refrigra' >
                                <h3>Refrigerante grande</h3>
                                <select onChange={e => setRefriGra(e.target.value)} value={refriGra} className='f1-refrigra-bt' >
                                    <option selected disabled hidden>Selecione</option>
                                    <option> 0 </option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 5 </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='f1-item'>
                <div>
                    {itens.map(item =>
                        <div>
                            <img className='prod-img' src={mostrarImagem(item.produto.imagens[0])} />
                            <p>{item.produto.info.nome}</p>
                        </div>
                    )}                    
                </div>
                <h1>R${calcularTotal()}</h1>

                <div className='div-bt'>
                    <button onClick={pagamentoDinheiro} className='bt'>Comprar</button>
                </div>
            </section>
        </main>
    );
}