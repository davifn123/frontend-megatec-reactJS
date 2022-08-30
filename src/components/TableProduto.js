import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//estilos e imagens
import '../styles/tableAdmin.css';

import SearchProduto from './search/SearchProduto';

function TableProduto() {

    const navigate = useNavigate();





    const [posts, setPosts] = useState([]);


    //#region get todos

    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/produtos")
            .then((response) => {
                setPosts(response.data)

            })
            .catch((response) => {
                console.log("Erro!!", response);
            });
    }, [])
    //#endregion get todos



    //#region get por id search input

    //#endregion get por id search input


    function deletarProduto(id) {

        axios.delete(`https://megatec-store.herokuapp.com/api/produtos/${id}`)
            .then(() => {
                alert("Produto DELETADO com sucesso!")
            })
            .catch(() => {
                alert("ERRO AO DELETAR")
            })

        setPosts(posts.filter(post => post.id !== id))

    }





    return (

        <>
            <p>Insira o ID do produto</p>
            <SearchProduto />

            <div className="tableMain">

                <table className="tableContent" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Observação</th>
                            <th>Fornecedor</th>
                            <th>#</th>
                        </tr>
                    </thead>

                    {posts.map((post, key) => {

                        function editarProduto() {
                            navigate(`/editarProdutos/${post.id}`)
                        }

                        return (

                            <tbody key={key}>
                                <tr >
                                    <td> {post.id} </td>
                                    <td> {post.nome_produto} </td>
                                    <td> {post.quantidade_produto} </td>
                                    <td> {`R$ ${post.valor_produto}`}</td>
                                    <td> {post.obs_produto} </td>
                                    <td> {post.cnpj_fornecedor} </td>
                                    <td className="buttons">
                                        <button onClick={() => editarProduto(post.id)} id='editarbtn'> EDITAR </button>
                                        <button onClick={() => deletarProduto(post.id)} id='deletarbtn'> EXCLUIR </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}

                </table>


            </div>


        </>
    );

}
export default TableProduto;