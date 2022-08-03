import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

//estilos e imagens
import '../styles/cadastrarProdutos.css'

//paginas


function CadastrarFornecedor() {

    var navigate = useNavigate();

    const [nome_fornecedor, setNome_fornecedor] = useState('');
    const [cnpj_fornecedor, setCnpj_fornecedor] = useState('');
    const [email_fornecedor, setEmail_fornecedor] = useState('');
    const [fone_fornecedor, setFone_fornecedor] = useState('');


    function submitProduto() {
        if (nome_fornecedor === '' || cnpj_fornecedor === '' || email_fornecedor === '' || fone_fornecedor === '') {
            alert('CADASTRO DO FORNECEDOR INVÁLIDO');
        } else {
            alert('CADASTRO DO FORNECEDOR EFETUADO');
            navigate('/listarProdutos');
        }

    }

    return (
        <div className="containerCadastrarProdutos">
            <div className="primeiroItemCadastrarProdutos">

                <div className="cadastrarProdutoForm">

                    <h1>Inserir Novo Fornecedor</h1>
                    <form>
                        <div className="input-containerproduto">

                            <input type="text" name="nome_fornecedor" placeholder="Nome do fornecedor"
                                value={nome_fornecedor} onChange={(e) => setNome_fornecedor(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="number" name="cnpj_fornecedor" placeholder="CNPJ"
                                value={cnpj_fornecedor} onChange={(e) => setCnpj_fornecedor(e.target.value)} required />

                        </div>

                        <div className="input-containerproduto">

                            <input type="email" name="email_fornecedor" placeholder="Email do fornecedor"
                                value={email_fornecedor} onChange={(e) => setEmail_fornecedor(e.target.value)} required />

                        </div>
                        <div className="input-containerproduto">

                            <input type="number" name="fone_fornecedor" placeholder="Telefone do fornecedor"
                                value={fone_fornecedor} onChange={(e) => setFone_fornecedor(e.target.value)} required />

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
export default CadastrarFornecedor;