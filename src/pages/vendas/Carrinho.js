import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";


//#region pags components
import HeaderCarrinhoVendas from "../../components/carrinho/HeaderCarrinhoVendas";
//#endregion pags compo

import '../../styles/carrinho.css';

function Carrinho() {

    const { cart, RemoveItem } = useContext(CartContext);




    return (

        <div className="containerCarrinho">

            <div className="primeiroitemcarrinho">
                <HeaderCarrinhoVendas />

            </div>

            <div className="segundoitemcarrinho">


                <ul >

                    {cart.map((produto, key) => (
                        <li key={key} produtoid={key} >
                            <h2> {produto.nome_produto} </h2>
                            <span> {`R$ ${produto.valor_produto}`} </span>
                            <span> {produto.obs_produto} </span>
                            <button className="removebtn" onClick={() => RemoveItem(key)} >Remover</button>
                        </li>
                    ))}

                </ul>

            </div>

        </div>


    )



}

export default Carrinho;