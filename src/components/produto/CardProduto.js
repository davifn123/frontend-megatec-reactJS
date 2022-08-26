import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

import onlineShopping from "../../img/onlineShopping.jpg"

function CardProduto({ post }) {

    const { AddCart } = useContext(CartContext);


    return (

        <div className="card1" >
            <h1>{post.nome_produto}</h1>
            <div className="imgdiv">
                <img src={onlineShopping} alt="" />

            </div>
            <div className="cardContent1">
                <p> {post.nome_produto} </p>
                <p> {`R$ ${post.valor_produto}`} </p>
                <p> {post.obs_produto} </p>
            </div>
            <button id="buybtn"
                onClick={() => AddCart(
                    post.id,
                    post.nome_produto,
                    post.quantidade_produto,
                    post.cnpj_fornecedor,
                    post.valor_produto,
                    post.obs_produto
                )}>Adicionar ao Carrinho</button>
        </div>



    )

}
export default CardProduto;