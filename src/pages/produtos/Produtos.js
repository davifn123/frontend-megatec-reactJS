import axios from "axios";
import React, { useEffect, useState } from "react";




//#region import pags /components
import HeaderCarrinhoVendas from "../../components/carrinho/HeaderCarrinhoVendas";
import CardProduto from "../../components/produto/CardProduto";
//#endregion import pags/ components

//estilos e imagens

import '../../styles/produtos.css';


function Produtos() {


    //#region dropdown
    // function showDropdown() {
    //     document.getElementById("myDropdown").classList.toggle("show");
    // }
    // window.onclick = function (event) {
    //     if (!event.target.matches('.dropBtn')) {

    //         var dropdowns = document.getElementsByClassName("dropdownContent");

    //         for (var i = 0; i < dropdowns.length; i++) {

    //             var openDropdown = dropdowns[i];

    //             if (openDropdown.classList.contains('show')) {
    //                 openDropdown.classList.remove('show');
    //             }
    //         }
    //     }
    // }
    //#endregion dropdown

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

                {/* <div className="dropdown">

                    <ul>

                        <li>
                            <button onClick={'showDropdown'} id='Facart'><FaCartPlus /></button>
                        </li>

                        <div className="dropdownContent" id="myDropdown" >


                        </div>

                    </ul>

                </div> */}

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
