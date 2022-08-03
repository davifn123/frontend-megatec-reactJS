import React from "react";

//estilos e imagens
import '../styles/produtos.css';
import cadeiraGamer from '../img/cadeiraGamer.jpg';
import notebookAsus from '../img/notebookAsus.jpg';
import headphone from '../img/headphone.jpg';

function Produtos() {


    return (

        <div className="containerProdutos">
            <div className="primeiroItemProdutos">
                <h1>Produtos</h1>
            </div>

            <div className="segundoItemProdutos">

                <div className="cardContainer">

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
                </div>

                <div className="cardContainer">

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
                </div>
            </div>
        </div>

    );
}
export default Produtos;