import axios from "axios";
import React, { useEffect, useState } from "react";




//#region import pags /components
import HeaderCarrinhoVendas from "../../components/carrinho/HeaderCarrinhoVendas";
import CardProduto from "../../components/produto/CardProduto";
//#endregion import pags/ components

//estilos e imagens

import '../../styles/produtos.css';


function Produtos() {



    //#region get todos produtos
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/produtos")
            .then((response) => {
                setPosts(response.data)
            }).catch((response) => {
                console.log(`ERRO ${response} `);
            });
    }, [])
    //#endregion get todos protudos



    return (

        <div className="containerProdutos">

            <div className="primeiroItemProdutos">
                <HeaderCarrinhoVendas />

                <h1>Produtos</h1>
            </div>

            <div className="segundoItemProdutos">

                {posts.map((post, key) => {

                    return (
                        <div className="cardContainer" key={key} >
                            <CardProduto post={post} />
                        </div>
                    )
                })}

            </div>
        </div >

    );
}
export default Produtos;
