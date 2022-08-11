import axios from "axios";
import React, { useEffect, useState } from "react";


//estilos e imagens
import '../styles/tableAdmin.css'


function TableProduto() {

    function editarProduto() {

        alert('Editado com sucesso');

    }

    function deletarProduto() {

        alert('Produto deletado');

    }


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/produtos")
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
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Observação</th>
                    <th>Fornecedor</th>
                    <th>#</th>
                </tr>
                {posts.map((post, key) => {

                    return (

                        <tr key={key}>
                            <td> {post.id} </td>
                            <td> {post.nome_produto} </td>
                            <td> {post.quantidade_produto} </td>
                            <td> {`R$ ${post.valor_produto}`}</td>
                            <td> {post.obs_produto} </td>
                            <td> {post.cnpj_fornecedor} </td>
                            <td>
                                <button onClick={editarProduto} id='editarbtn'> EDITAR </button>
                                <button onClick={deletarProduto} id='deletarbtn'> EXCLUIR </button>
                            </td>
                        </tr>

                    )
                })}
            </table>
            {/* <table className="tableContent">
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                    <th>Observação</th>
                    <th>Fornecedor</th>
                    <th>#</th>
                </tr>
                <tr>
                    <td> { } </td>
                    <td>Cadeira Gamer </td>
                    <td>Cadeira</td>
                    <td>R$600.50</td>
                    <td>Cadeira gamer com assento em couro sintético</td>
                    <td></td>
                    <td>
                        <button onClick={editarProduto} id='editarbtn'> EDITAR </button>
                        <button onClick={deletarProduto} id='deletarbtn'> EXCLUIR </button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>HeadPhone philco</td>
                    <td>Fones de ouvido</td>
                    <td>R$150</td>
                    <td>Fone de ouvido extra auricular</td>
                    <td>
                        <button onClick={editarProduto} id='editarbtn'> EDITAR </button>
                        <button onClick={deletarProduto} id='deletarbtn'> EXCLUIR </button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Nome do produto</td>
                    <td>Categoria do produto</td>
                    <td>Preço do Produto</td>
                    <td>Descrição do produto</td>
                    <td>
                        <button onClick={editarProduto} id='editarbtn'> EDITAR </button>
                        <button onClick={deletarProduto} id='deletarbtn'> EXCLUIR </button>
                    </td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Nome do produto</td>
                    <td>Categoria do produto</td>
                    <td>Preço do produto</td>
                    <td>Descrição do produto</td>
                    <td>
                        <button onClick={editarProduto} id='editarbtn'> EDITAR </button>
                        <button onClick={deletarProduto} id='deletarbtn'> EXCLUIR </button>
                    </td>
                </tr>
            </table> */}
        </div>
    );
}
export default TableProduto;