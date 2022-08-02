import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

//estilos e imagens
import '../styles/cadastrarProdutos.css'

//paginas


function CadastrarProdutos() {

    var navigate = useNavigate();

    const [nomeProduto, setNomeproduto] = useState('');
    const [descricaoProduto, setDescricaoproduto] = useState('');
    const [cateProduto, setCateproduto] = useState('');
    const [precoProd, setPrecoprod] = useState('');


    function submitProduto() {
        if (nomeProduto === '' || descricaoProduto === '' || cateProduto === '' || precoProd === '') {
            alert('CADASTRO DO PRODUTO INVÁLIDO');
        } else {
            alert('CADASTRO DO PRODUTO EFETUADO');
            navigate('/listarProdutos');
        }

    }

    return (
        <div className="containerCadastrarProdutos">
            <div className="primeiroItemCadastrarProdutos">

                <div className="cadastrarProdutoForm">

                    <h1>Inserir Novo Produto</h1>
                    <form>
                        <div className="input-containerproduto">

                            <input type="text" name="productname" placeholder="Nome do produto"
                                value={nomeProduto} onChange={(e) => setNomeproduto(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="text" name="productcat" placeholder="Categoria do produto (Cadeira / teclado etc...)"
                                value={cateProduto} onChange={(e) => setCateproduto(e.target.value)} required />

                        </div>

                        <div className="input-containerproduto">

                            <input type="number" name="productdesc" placeholder="Preço"
                                value={precoProd} onChange={(e) => setPrecoprod(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="text" name="productdesc" placeholder="Descrição do produto"
                                value={descricaoProduto} onChange={(e) => setDescricaoproduto(e.target.value)} required />

                        </div>


                        <div className="button-containerproduto">
                            <button onClick={submitProduto} type="submit" >Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}
export default CadastrarProdutos;