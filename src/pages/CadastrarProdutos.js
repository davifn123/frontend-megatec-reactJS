import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';

//estilos e imagens
import '../styles/cadastrarProdutos.css'

//paginas


function CadastrarProdutos() {

    var navigate = useNavigate();

    const [nomeProduto, setNomeproduto] = useState('');
    const [descricaoProduto, setDescricaoproduto] = useState('');
    const [cateProduto, setCateproduto] = useState('');
    const [precoProd, setPrecoprod] = useState('');
    const [cnpjForne, setCnpjForne] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();


    // function submitProduto() {
    //     if (nomeProduto === '' || descricaoProduto === '' || cateProduto === '' || precoProd === '') {
    //         alert('CADASTRO DO PRODUTO INVÁLIDO');
    //     } else {
    //         alert('CADASTRO DO PRODUTO EFETUADO');

    //     }

    // }


    const addPost = data => axios.post("https://megatec-store.herokuapp.com/api/produtos", data)
        .then(() => {
            alert("Incluido com sucesso")
            navigate('/listarProdutos');
        })
        .catch(() => {
            alert("Registro não incluido")
        })



    return (
        <div className="containerCadastrarProdutos">
            <div className="primeiroItemCadastrarProdutos">

                <div className="cadastrarProdutoForm">

                    <h1>Inserir Novo Produto</h1>
                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="input-containerproduto">

                            <input type="text" name="cnpj_fornecedor"
                                {...register("cnpj_fornecedor")} placeholder="CNPJ do Fornecedor"
                                value={cnpjForne} onChange={(e) => setCnpjForne(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="text" name="nome_produto"
                                {...register("nome_produto")} placeholder="Nome do produto"
                                value={nomeProduto} onChange={(e) => setNomeproduto(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="number" name="quantidade_produto"
                                {...register("quantidade_produto")} placeholder="Quantidade..."
                                value={cateProduto} onChange={(e) => setCateproduto(e.target.value)} required />

                        </div>

                        <div className="input-containerproduto">

                            <input type="number" name="valor_produto"
                                {...register("valor_produto")} placeholder="Preço"
                                value={precoProd} onChange={(e) => setPrecoprod(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="text" name="obs_produto"
                                {...register("obs_produto")} placeholder="Descrição do produto"
                                value={descricaoProduto} onChange={(e) => setDescricaoproduto(e.target.value)} required />

                        </div>


                        <div className="button-containerproduto">
                            <button type="submit" >Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}
export default CadastrarProdutos;