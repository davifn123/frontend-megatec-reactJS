import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

import "../../styles/headerCarrinho.css";

function HeaderCarrinhoVendas() {


    const { cart, limparCarrinho } = useContext(CartContext);


    const precoTotal = cart.reduce((acc, current) => acc + current.valor_produto, 0);



    return (
        <header className="carrinhoVendasTop">
            <nav className="carrinhoVendasNav" >
                <h2 >Itens no carrinho</h2>

                <div className="navItemscarrinho" >
                    <span> {cart.length} {cart.length === 1 ? 'produto' : 'produtos'} </span>
                    <span> {` R$ ${precoTotal.toFixed(2)} `} </span>
                    <button id="limparCarrinhoBtn" onClick={() => limparCarrinho()} > Limpar carrinho </button>
                </div>


            </nav>
        </header>

    )



}
export default HeaderCarrinhoVendas;