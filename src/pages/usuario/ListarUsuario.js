import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";


//#region import styles etc..
import '../../styles/tableAdmin.css';
import '../../styles/listarUsuario.css';
//#endregion



function ListarUsuario() {

    const navigate = useNavigate();

    //#region get usuarios
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/usuarios/listarTodos")
            .then((response) => {
                setPosts(response.data);

            }).catch((err) => {
                console.log(`ERRO ${err}`);
            });
    }, [])
    //#endregion



    return (


        <div className="usuarioTable">
            <h1>Usuários do Sistema</h1>
            <table className="tableContent" >
                <thead>
                    <tr>
                        <th>CPF</th>
                        <th>Código da Empresa</th>
                        <th>Nome do Usuário</th>
                        <th>Email do Usuário</th>
                        <th>#</th>
                    </tr>
                </thead>
                {posts.map((post, key) => {

                    function editarUsuario() {
                        navigate(`/editarUsuario/cpf=${post.usuarioId.cpfUsuario}&codigo=${post.usuarioId.codEmpresa}`)
                    }

                    return (

                        <tbody key={key}>
                            <tr >
                                <td> {post.usuarioId.cpfUsuario} </td>
                                <td> {post.usuarioId.codEmpresa} </td>
                                <td> {post.nomeUsuario} </td>
                                <td> {post.emailUsuario} </td>
                                <td>
                                    <button onClick={() => editarUsuario(post.usuarioId.cpfUsuario, post.usuarioId.codEmpresa)} id='editarbtn'> EDITAR </button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>


    )



}
export default ListarUsuario;