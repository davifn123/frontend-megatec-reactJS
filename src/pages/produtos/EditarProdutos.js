import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import axios from "axios";
import { useForm } from 'react-hook-form';

//estilos e imagens
import '../../styles/cadastrarProdutos.css'


//paginas


function EditarProdutos() {

    var navigate = useNavigate();


    // eslint-disable-next-line
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [posts, setPosts] = useState([]);

    const { id } = useParams();

    const addPost = data => axios.put(`https://megatec-store.herokuapp.com/api/produtos/${id}`, data)
        .then(() => {
            alert("Editado com sucesso!")
            navigate('/listarProdutos');
        })
        .catch(() => {
            alert("ERRO ao EDITAR!")
        })

    useEffect(() => {
        axios.get(`https://megatec-store.herokuapp.com/api/produtos/${id}`)
            .then((response) => {
                reset(response.data)
            })

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        axios.get(`https://megatec-store.herokuapp.com/api/fornecedores/listarTodosFornecedores`)
            .then((response) => {
                setPosts(response.data)
            })
            .catch(() => {
                console.log("ERRO!!");
            });
    }, [])



    return (
        <div className="containerCadastrarProdutos">
            <div className="primeiroItemCadastrarProdutos">

                <div className="cadastrarProdutoForm">

                    <h1>Editar Produto</h1>
                    <form onSubmit={handleSubmit(addPost)}>

                        <div className="input-containerproduto">
                            <label>CNPJ do Fornecedor </label>
                            <select id="cnpj" {...register("cnpj_fornecedor")} >

                                {posts.map((post, key) => {

                                    return (

                                        <option key={key} >{post.cnpj_fornecedor}</option>

                                    )
                                })}

                            </select>
                        </div>


                        <div className="input-containerproduto">

                            <input type="text" name="nome_produto"
                                {...register("nome_produto")} placeholder='Nome do produto'
                                required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="number" name="quantidade_produto"
                                {...register("quantidade_produto")} placeholder='Quantidade...'
                                required />

                        </div>

                        <div className="input-containerproduto">

                            <input type="number" name="valor_produto"
                                {...register("valor_produto")} placeholder='Valor Produto'
                                required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="text" name="obs_produto"
                                {...register("obs_produto")} placeholder='Descrição'
                                required />

                        </div>


                        <div className="button-containerproduto">
                            <button type="submit" >Editar</button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}
export default EditarProdutos;