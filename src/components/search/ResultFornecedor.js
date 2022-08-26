import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import '../../styles/tableResult.css';



function ResultFornecedor() {

    const navigate = useNavigate();

    const { name } = useContext(CartContext);


    //#region delete
    const [posts, setPosts] = useState([]);
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
    //#endregion delete 


    if (!name || !name.length) return null;


    return (
        <table className="tableResult">

            {name.map((post, key) => {

                function editarFornecedor() {
                    navigate(`/editarFornecedor/${post.cnpj_fornecedor}`)
                }

                return (
                    <>
                        <thead>
                            <tr>
                                <th>CNPJ</th>
                                <th>Nome do Fornecedor</th>
                                <th>Email do Fornecedor</th>
                                <th>Telefone</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody key={key}>
                            <tr >
                                <td> {post.cnpj_fornecedor} </td>
                                <td> {post.nome_fornecedor} </td>
                                <td> {post.email_fornecedor} </td>
                                <td> {post.fone_fornecedor} </td>
                                <td>
                                    <button onClick={() => editarFornecedor(post.cnpj_fornecedor)} id='editarbtn'> EDITAR </button>
                                    <button onClick={() => deletarFornecedor(post.cnpj_fornecedor)} id='deletarbtn'> EXCLUIR </button>
                                </td>
                            </tr>
                        </tbody>
                    </>
                )
            })}



        </table>
    )

}
export default ResultFornecedor;