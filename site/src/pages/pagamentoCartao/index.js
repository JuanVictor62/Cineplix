import './index.scss'
import '../../assets/common/index.scss'
import Cabecalho from '../../components/cabecalho'
import { useEffect, useState } from 'react';
import { buscarImagem, filmePorId, inserirPedidoDinheiro, salvarNovoPedido } from '../../api/filmeAPI';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IMaskInput } from 'react-imask';

export default function Index(){
    //const [idFilme, setIdFilme] = useState();
    const [qtdInt, setQtdInt] = useState(0);
    const [qtdMeia, setQtdMeia] = useState(0);
    const [adicionais, setAdicionais] = useState();
    //const [total, setTotal] = useState();

    const [comboNatal, setComboNatal] = useState(0);
    const [comboMedio, setComboMedio] = useState(0);

    const [picPeq, setPicPeq] = useState(0);
    const [picMed, setPicMed] = useState(0);
    const [picGra, setPicGra] = useState(0);

    const [refriPeq, setRefriPeq] = useState(0);
    const [refriMed, setRefriMed] = useState(0);
    const [refriGra, setRefriGra] = useState(0);

    const [nomeTit, setNomeTit] = useState();
    const [cvv, setCvv] = useState();
    const [numeroCartao, setNumeroCartao] = useState();
    const [vencimento, setVencimento] = useState();
    const [parcelas, setParcelas] = useState();

    const [itens, setItens] = useState([])

    const navigate = useNavigate();

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

    function calcularTotal(){
        let total1 = 0;
        total1 = (17.50 * qtdInt) + (13.50 * qtdMeia) + (9.00 * picPeq) + (12.00 * picMed) + (15.00 * picGra) + (7.00 * refriPeq) + (11.00 * refriMed) + (14.00 * refriGra) + (40.00 * comboNatal) + (36.00 * comboMedio);
        return total1.toFixed(2);
    }

    useEffect(() => {
        carregarItens();

        if(!storage('carrinho')){
            navigate('/')
            toast.dark('Nop')
        }
    }, [])

    function mostrarImagem(imagem) {
        return buscarImagem(imagem)
    }

    async function salvarPedido() {
        try{
            let id = '';
            let pedido = ''

            let total1 = 0;
            total1 = (17.50 * qtdInt) + (13.50 * qtdMeia) + (9.00 * picPeq) + (12.00 * picMed) + (15.00 * picGra) + (7.00 * refriPeq) + (11.00 * refriMed) + (14.00 * refriGra) + (40.00 * comboNatal) + (36.00 * comboMedio);
            let filme = storage('carrinho').id;
    
            if (storage('usuario-logado')) {
                id = storage('usuario-logado').id
                pedido =
                {
                    idFilme: filme,
                    qtdInt: qtdInt,
                    qtdMeia: qtdMeia,
                    adicionais: adicionais,
                    total: total1,
                    cartao: 
                    {
                      nome: nomeTit,
                      numero: numeroCartao,
                      vencimento: vencimento,
                      codSeguranca: cvv,
                      formaPagamento: "credito",
                      parcelas: parcelas
                    }
                  }
            }

    
            const r = await salvarNovoPedido(id, pedido)
            toast.dark('Compra realizada com sucesso!');
            storage('carrinho', []);
            navigate('/');
        }
        catch(err){
            toast.error(err.response.data.erro);
        }
        }


    return(
        <main className='f1-pagamento-cartao' >
            <header>
                <Cabecalho/>
            </header>
            <div>
            <section className='f1-info-cart' >
                <div className='f1-info-tit' >
                    <h1 className='f1-info-titt' >Pagamento - Cartão</h1>
                </div>

                <div className='info-cart' >
                    <h1>Informações do cartão</h1>
                    <div className='f1-div-info1' >
                        <div>
                            <p>Nome do titular</p>
                            <input className='info1-input-1' type='text' value={nomeTit} onChange={e => setNomeTit(e.target.value)}/>
                        </div>

                        <div>
                            <p className='aj'>CVV</p>
                            <IMaskInput className='info1-input-2' mask="000" maxLength='3' type='text' value={cvv} onChange={e => setCvv(e.target.value)} />
                        </div>
                    </div>

                    <div className='f1-div-info2' >
                        <div>
                            <p>Numero do cartão</p>
                            <IMaskInput mask='0000 0000 0000 0000' className='info2-input-1' type='text' value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)} />                        
                        </div>
                        <div>
                            <p className='txtttt' >Vencimento</p>
                            <IMaskInput placeholderChar='00/00' className='info2-input-2' mask='00/00' maxLength='5' type='text' value={vencimento} onChange={e => setVencimento(e.target.value)} />
                        </div>
                    </div>

                    <div className='f1-parcela' >
                        <p className='f1-txttttt'>Parcelas</p>
                        <select value={parcelas} onChange={e => setParcelas(e.target.value)}>
                            <option selected disabled hidden>Selecione</option>
                                    <option> 1 </option>
                                    <option> 2 </option>
                                    <option> 3 </option>
                                    <option> 4 </option>
                                    <option> 6 </option>
                                    <option> 7 </option>
                                    <option> 8 </option>
                                    <option> 9 </option>
                                    <option> 10 </option>
                                    <option> 11 </option>
                                    <option> 12 </option>
                        </select>
                    </div>
                </div>
            </section>
            
            <section className='f1-pagamento-dinheiro'>

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
                                <h3 className='txttt'>Refrigerante pequeno: </h3>
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
            </div>

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
                    <button onClick={salvarPedido} className='bt'>Comprar</button>
                </div>
            </section>

        </main>
    )
}