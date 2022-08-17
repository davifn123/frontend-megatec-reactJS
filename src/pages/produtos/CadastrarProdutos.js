import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import { useForm } from 'react-hook-form';

//estilos e imagens
import '../../styles/cadastrarProdutos.css'


//paginas


function CadastrarProdutos() {

    var navigate = useNavigate();

    const [nomeProduto, setNomeproduto] = useState('');
    const [descricaoProduto, setDescricaoproduto] = useState('');
    const [cateProduto, setCateproduto] = useState('');
    const [precoProd, setPrecoprod] = useState('');

    // eslint-disable-next-line
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [posts, setPosts] = useState([]);


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
            .then((response) => {
                setPosts(response.data)
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
                            <label >CNPJ do Fornecedor </label>
                            <select id="cnpj" {...register("cnpj_fornecedor")}>

                                {posts.map((post) => {

                                    return (

                                        <option  >{post.cnpj_fornecedor}</option>

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