import axios from "axios";
import React, { useEffect, useState } from "react";

//estilos e imagens
import cadeiraGamer from '../../img/cadeiraGamer.jpg';
import '../../styles/produtos.css';

function Produtos() {



    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/produtos")
            .then((resp) => {
                setPosts(resp.data)
            }).catch(() => {
                console.log("Erro!!");
            });
    }, [])

    return (

        <div className="containerProdutos">
            <div className="primeiroItemProdutos">
                <h1>Produtos</h1>
            </div>

            <div className="segundoItemProdutos">






                {posts.map((post, key) => {

                    return (
                        <div className="cardContainer">
                            <div className="card1" key={key}>
                                <h1>{post.nome_produto}</h1>
                                <div className="imgdiv">
                                    <img src={cadeiraGamer} alt="" />
                                </div>
                                <div className="cardContent1">
                                    <p> {post.nome_produto} </p>
                                    <p> {`R$ ${post.valor_produto}`} </p>
                                    <p> {post.obs_produto} </p>
                                </div>
                            </div>
                        </div>
                    )
                })}


                {/* <div className="card1">
                        <h1>Cadeira</h1>
                        <div className="imgdiv">
                            <img src={cadeiraGamer} alt="" />
                        </div>
                        <div className="cardContent1">
                            <p>Nome do produto</p>
                            <p>Preço do produto</p>
                            <p>Descrição do produto</p>
                        </div>
                    </div>

                    <div className="card2">
                        <h1>Notebook</h1>
                        <div className="imgdiv">
                            <img src={notebookAsus} alt="" />
                        </div>
                        <div className="cardContent2">
                            <p>Nome do produto 2</p>
                            <p>Preço do produto 2</p>
                            <p>Descrição do produto 2</p>
                        </div>
                    </div>


                    <div className="card3">
                        <h1>HeadPhone</h1>
                        <div className="imgdiv">
                            <img src={headphone} alt="" />
                        </div>
                        <div className="cardContent3">
                            <p>Nome do produto 3</p>
                            <p>Preço do produto 3</p>
                            <p>Descrição do produto 3</p>
                        </div>
                    </div> */}


                {/* <div className="cardContainer">

                    <div className="card1">
                        <h1>Cadeira</h1>
                        <div className="imgdiv">
                            <img src={cadeiraGamer} alt="" />
                        </div>
                        <div className="cardContent1">
                            <p>Nome do produto</p>
                            <p>Preço do produto</p>
                            <p>Descrição do produto</p>
                        </div>
                    </div>

                    <div className="card2">
                        <h1>Notebook</h1>
                        <div className="imgdiv">
                            <img src={notebookAsus} alt="" />
                        </div>
                        <div className="cardContent2">
                            <p>Nome do produto 2</p>
                            <p>Preço do produto 2</p>
                            <p>Descrição do produto 2</p>
                        </div>
                    </div>


                    <div className="card3">
                        <h1>HeadPhone</h1>
                        <div className="imgdiv">
                            <img src={headphone} alt="" />
                        </div>
                        <div className="cardContent3">
                            <p>Nome do produto 3</p>
                            <p>Preço do produto 3</p>
                            <p>Descrição do produto 3</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    );
}
export default Produtos;