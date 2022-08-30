import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//estilos e imagens
import '../styles/tableAdmin.css'


import SearchFornecedor from "./search/SearchFornecedor";

function TableFornecedor() {

    var navigate = useNavigate();

    // function editarProduto() {

    //     alert('Editado com sucesso');

    // }

    function deletarFornecedor(cnpj_fornecedor) {


        axios.delete(`https://megatec-store.herokuapp.com/api/fornecedores/${cnpj_fornecedor}`)
            .then(() => {
                alert(`Fornecedor ${cnpj_fornecedor} DELETADO com sucesso!`)
            })
            .catch(() => {
                alert("ERRO AO DELETAR")
            })

        setPosts(posts.filter(post => post.cnpj_fornecedor !== cnpj_fornecedor))

    }

    //#region get
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/fornecedores/listarTodosFornecedores")
            .then((resp) => {
                setPosts(resp.data)
            }).catch((response) => {
                console.log("Erro!!", response);
            });
    }, [])

    //#endregion get


    return (
        <>
            <p>Insira o Nome do Fornecedor</p>
            <SearchFornecedor />

            <div className="tableMain">
                <table className="tableContent" >
                    <thead>
                        <tr>
                            <th>CNPJ</th>
                            <th>Nome do Fornecedor</th>
                            <th>Email do Fornecedor</th>
                            <th>Telefone</th>
                            <th>#</th>
                        </tr>
                    </thead>

                    {posts.map((post, key) => {

                        function editarFornecedor() {
                            navigate(`/editarFornecedor/${post.cnpj_fornecedor}`)
                        }

                        return (

                            <tbody key={key}>
                                <tr >
                                    <td> {post.cnpj_fornecedor} </td>
                                    <td> {post.nome_fornecedor} </td>
                                    <td> {post.email_fornecedor} </td>
                                    <td> {post.fone_fornecedor} </td>
                                    <td className="buttons">
                                        <button onClick={() => editarFornecedor(post.cnpj_fornecedor)} id='editarbtn'> EDITAR </button>
                                        <button onClick={() => deletarFornecedor(post.cnpj_fornecedor)} id='deletarbtn'> EXCLUIR </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        </>
    )
}
export default TableFornecedor;