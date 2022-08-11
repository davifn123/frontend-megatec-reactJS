import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import { get, useForm } from 'react-hook-form';

//estilos e imagens
import '../styles/cadastrarProdutos.css'
import { getValue } from "@testing-library/user-event/dist/utils";

//paginas


function CadastrarProdutos() {

    var navigate = useNavigate();

    const [nomeProduto, setNomeproduto] = useState('');
    const [descricaoProduto, setDescricaoproduto] = useState('');
    const [cateProduto, setCateproduto] = useState('');
    const [precoProd, setPrecoprod] = useState('');
    const [cnpjForne, setCnpjForne] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [posts, setPosts] = useState([]);

    // function submitProduto() {
    //     if (nomeProduto === '' || descricaoProduto === '' || cateProduto === '' || precoProd === '') {
    //         alert('CADASTRO DO PRODUTO INVÁLIDO');
    //     } else {
    //         alert('CADASTRO DO PRODUTO EFETUADO');

    //     }

    // }


    const addPost = data => axios.post("https://megatec-store.herokuapp.com/api/produtos", data)
        .then(() => {
            alert("Cadastrado com sucesso!")
            navigate('/listarProdutos');
        })
        .catch(() => {
            alert("Erro ao cadastrar!")
        })


    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/fornecedores/listarTodosFornecedores")
            .then((resp) => {
                setPosts(resp.data)
            })
            .catch(() => {
                console.log("Erro!!");
            });
    }, [])



    return (
        <div className="containerCadastrarProdutos">
            <div className="primeiroItemCadastrarProdutos">

                <div className="cadastrarProdutoForm">

                    <h1>Inserir Novo Produto</h1>
                    <form onSubmit={handleSubmit(addPost)}>

                        <div className="input-containerproduto">
                            <label for="cnpj_fornecedor">CNPJ </label>
                            <select id="cnpj_fornecedor" name="cnpj_fornecedor"  >

                                {posts.map((post, key) => {

                                    return (

                                        <option value="cnpj_fornecedor"{...register("cnpj_fornecedor")} key={key}>{post.cnpj_fornecedor}</option>

                                    )
                                })}

                            </select>
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