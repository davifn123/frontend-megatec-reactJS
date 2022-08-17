import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import { useForm } from 'react-hook-form';


//estilos e imagens
import '../../styles/cadastrarProdutos.css'

//paginas


function EditarFornecedor() {

    var navigate = useNavigate();

    const [nome_fornecedor, setNome_fornecedor] = useState('');
    const [cnpj_fornecedor, setCnpj_fornecedor] = useState('');
    const [email_fornecedor, setEmail_fornecedor] = useState('');
    const [fone_fornecedor, setFone_fornecedor] = useState('');

    // eslint-disable-next-line
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const addPost = data => axios.put(`https://megatec-store.herokuapp.com/api/fornecedores/${cnpj_fornecedor}`, data)
        .then(() => {
            alert("Editado com sucesso!");
            navigate('/listarFornecedor');
        })
        .catch(() => {
            alert("ERRO ao EDITAR!")
        })



    useEffect((cnpj_fornecedor) => {
        axios.get(`https://megatec-store.herokuapp.com/api/fornecedores/${cnpj_fornecedor}`)
            .then((response) => {
                reset(response.data);
            })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     axios.get(`https://megatec-store.herokuapp.com/api/fornecedores/listarTodosFornecedores`)
    //         .then((response) => {
    //             setPosts(response.data)
    //         })
    //         .catch(() => {
    //             console.log("Erro!!");
    //         });
    // }, [])



    return (
        <div className="containerCadastrarProdutos">
            <div className="primeiroItemCadastrarProdutos">

                <div className="cadastrarProdutoForm">

                    <h1>Inserir Novo Fornecedor</h1>
                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="input-containerproduto">

                            <input type="text" name="nome_fornecedor" {...register("nome_fornecedor")} placeholder='Nome do Fornecedor'
                                value={nome_fornecedor} onChange={(e) => setNome_fornecedor(e.target.value)} required />

                        </div>




                        <div className="input-containerproduto" >
                            <input type="text" name="cnpj_fornecedor" {...register("cnpj_fornecedor")} placeholder={'CNPJ'}
                                value={cnpj_fornecedor} onChange={(e) => setCnpj_fornecedor(e.target.value)} required />
                        </div>






                        <div className="input-containerproduto">

                            <input type="email" name="email_fornecedor" {...register("email_fornecedor")} placeholder='Email do fornecedor'
                                value={email_fornecedor} onChange={(e) => setEmail_fornecedor(e.target.value)} required />

                        </div>

                        <div className="input-containerproduto">

                            <input type="number" name="fone_fornecedor" {...register("fone_fornecedor")} placeholder='Telefone do fornecedor'
                                value={fone_fornecedor} onChange={(e) => setFone_fornecedor(e.target.value)} required />

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
export default EditarFornecedor;