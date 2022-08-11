import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import axios from "axios";
import { useForm } from 'react-hook-form';


//estilos e imagens
import '../styles/cadastrarProdutos.css'

//paginas


function CadastrarFornecedor() {

    var navigate = useNavigate();

    const [nome_fornecedor, setNome_fornecedor] = useState('');
    const [cnpj_fornecedor, setCnpj_fornecedor] = useState('');
    const [email_fornecedor, setEmail_fornecedor] = useState('');
    const [fone_fornecedor, setFone_fornecedor] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm();

    // function submitProduto() {
    //     if (nome_fornecedor === '' || cnpj_fornecedor === '' || email_fornecedor === '' || fone_fornecedor === '') {
    //         alert('CADASTRO DO FORNECEDOR INVÁLIDO');
    //     } else {
    //         alert('CADASTRO DO FORNECEDOR EFETUADO');
    //         navigate('/listarProdutos');
    //     }

    // }

    const addPost = data => axios.post("https://megatec-store.herokuapp.com/api/fornecedores", data)
        .then(() => {
            alert("Cadastrado com sucesso!")
            navigate('/listarFornecedor');
        })
        .catch(() => {
            alert("Erro ao cadastrar!")
        })



    return (
        <div className="containerCadastrarProdutos">
            <div className="primeiroItemCadastrarProdutos">

                <div className="cadastrarProdutoForm">

                    <h1>Inserir Novo Fornecedor</h1>
                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="input-containerproduto">

                            <input type="text" name="nome_fornecedor" {...register("nome_fornecedor")} placeholder="Nome do fornecedor"
                                value={nome_fornecedor} onChange={(e) => setNome_fornecedor(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="number" name="cnpj_fornecedor" {...register("cnpj_fornecedor")} placeholder="CNPJ"
                                value={cnpj_fornecedor} onChange={(e) => setCnpj_fornecedor(e.target.value)} required />

                        </div>

                        <div className="input-containerproduto">

                            <input type="email" name="email_fornecedor" {...register("email_fornecedor")} placeholder="Email do fornecedor"
                                value={email_fornecedor} onChange={(e) => setEmail_fornecedor(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="number" name="fone_fornecedor" {...register("fone_fornecedor")} placeholder="Telefone do fornecedor"
                                value={fone_fornecedor} onChange={(e) => setFone_fornecedor(e.target.value)} required />

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
export default CadastrarFornecedor;