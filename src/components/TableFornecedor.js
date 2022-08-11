import React, { useState, useEffect } from "react";
import axios from "axios";

//estilos e imagens
import '../styles/tableAdmin.css'


function TableFornecedor() {


    function editarProduto() {

        alert('Editado com sucesso');

    }

    function deletarProduto() {

        alert('Produto deletado');

    }


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/fornecedores/listarTodosFornecedores")
            .then((resp) => {
                setPosts(resp.data)
            }).catch(() => {
                console.log("Erro!!");
            });
    }, [])




    return (

        <div className="tableMain">
            <table className="tableContent" >
                <tr>
                    <th>CNPJ</th>
                    <th>Nome do Fornecedor</th>
                    <th>Email do Fornecedor</th>
                    <th>Telefone</th>
                    <th>#</th>
                </tr>
                {posts.map((post, key) => {

                    return (

                        <tr key={key}>
                            <td> {post.cnpj_fornecedor} </td>
                            <td> {post.nome_fornecedor} </td>
                            <td> {post.email_fornecedor} </td>
                            <td> {post.fone_fornecedor}</td>
                            <td>
                                <button onClick={editarProduto} id='editarbtn'> EDITAR </button>
                                <button onClick={deletarProduto} id='deletarbtn'> EXCLUIR </button>
                            </td>
                        </tr>

                    )
                })}
            </table>
        </div>
    );
}
export default TableFornecedor;