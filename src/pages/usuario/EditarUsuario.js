import React from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useForm } from 'react-hook-form';


//estilos e imagens
import '../../styles/cadastro.css';


function EditarUsuario() {

    const navigate = useNavigate();


    // const { cpfUsuario, codEmpresa, usuarioId } = useParams();

    // eslint-disable-next-line
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    //#region put
    const addPost = data => axios.put(`https://megatec-store.herokuapp.com/api/usuarios `, data)
        .then(() => {
            alert("EDITADO com sucesso!")
            navigate('/listarUsuario');
        })
        .catch(() => {
            alert("Erro ao Editar!")
        })
    //#endregion put

    // useEffect(() => {
    //     axios.get(`https://megatec-store.herokuapp.com/api/usuarios`)
    //         .then((response) => {
    //             reset(response.data);
    //             console.log(response.data);
    //         })
    //     // .catch((response) => {
    //     //     console.log(`ERRO ${response.data}`);
    //     // })
    //     //eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])


    return (
        <div className="containerCadastro">
            <div className="primeiroItemCadastro">
                <h1>Cadastro</h1>


                <div className="cadastroForm">
                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="input-container">

                            <input type="text" name="nome" {...register("nomeUsuario")} placeholder="Nome"
                                required />

                        </div>
                        <div className="input-container">

                            <input type="number" name="cpf" {...register("usuarioId.cpfUsuario")} placeholder="CPF"
                                required />

                        </div>

                        <div className="input-container">

                            <input type="number" name="codEmpresa" {...register("usuarioId.codEmpresa")} placeholder="Código da Empresa"
                                required />

                        </div>
                        <div className="input-container">

                            <input type="email" name="email" {...register("emailUsuario")} placeholder="E-mail"
                                required />

                        </div>
                        <div className="input-container">

                            <input type="password" name="password" {...register("senhaUsuario")} placeholder="Confirme sua senha"
                                required />

                        </div>

                        <div className="button-container">
                            <button type="submit" >Editar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default EditarUsuario;