import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import '../../styles/tableResult.css';



function ResultProduto() {

    const navigate = useNavigate();

    const { data } = useContext(CartContext);


    //#region delete
    const [posts, setPosts] = useState([]);
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
    //#endregion delete 


    if (!data || !data.length) return null;


    return (
        <table className="tableResult">

            {data.map((post, key, key2) => {

                function editarProduto() {
                    navigate(`/editarProdutos/${post.id}`)
                }

                return (
                    <>

                        <thead key={key}>
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
                        <tbody key={key2} >
                            <tr>
                                <td> {post.id} </td>
                                <td> {post.nome_produto} </td>
                                <td> {post.quantidade_produto} </td>
                                <td> {`R$ ${post.valor_produto}`}</td>
                                <td> {post.obs_produto} </td>
                                <td> {post.cnpj_fornecedor} </td>
                                <td>
                                    <button onClick={() => editarProduto(post.id)} id='editarbtn'> EDITAR </button>
                                    <button onClick={() => deletarProduto(post.id)} id='deletarbtn'> EXCLUIR </button>
                                </td>
                            </tr>
                        </tbody>

                    </>
                )
            })}
        </table>
    )

}
export default ResultProduto;