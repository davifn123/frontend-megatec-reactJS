import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useForm } from 'react-hook-form';


//estilos e imagens
import '../../styles/cadastro.css';


function CadastroUsuario() {

    var navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');

    // function submitCadastro() {

    //     if (nome === '' || email === '' || password === '' || confirmPass === '' || confirmPass !== password || cpf === '') {
    //         alert('CADASTRO INVÁLIDO');
    //     } else {
    //         alert('CADASTRO EFETUADO!');
    //         navigate('/login');
    //     }
    //     if (confirmPass !== password) {
    //         alert('Senha de confirmação deve ser igual');
    //     }

    // }

    // eslint-disable-next-line
    const { register, handleSubmit, formState: { errors } } = useForm();

    //#region post
    const addPost = data => axios.post("https://megatec-store.herokuapp.com/api/usuarios", data)
        .then(() => {
            alert("Cadastrado com sucesso!")
            navigate('/login');
        })
        .catch(() => {
            if (confirmPass !== password) {
                alert('Senha de confirmação deve ser igual');
            }
            alert("Erro ao cadastrar!")
        })
    //#endregion post

    return (
        <div className="containerCadastro">
            <div className="primeiroItemCadastro">
                <h1>Cadastro</h1>


                <div className="cadastroForm">
                    <form onSubmit={handleSubmit(addPost)}>
                        <div className="input-container">

                            <input type="text" name="nome" {...register("nomeUsuario")} placeholder="Nome"
                                value={nome} onChange={(e) => setNome(e.target.value)} required />

                        </div>
                        <div className="input-container">

                            <input type="number" name="cpf" {...register("usuarioId.cpfUsuario")} placeholder="CPF"
                                value={cpf} onChange={(e) => setCpf(e.target.value)} required />

                        </div>

                        <div className="input-container">

                            <input type="number" name="codEmpresa" {...register("usuarioId.codEmpresa")} placeholder="Código da Empresa"
                                required />

                        </div>
                        <div className="input-container">

                            <input type="email" name="email" {...register("emailUsuario")} placeholder="E-mail"
                                value={email} onChange={(e) => setEmail(e.target.value)} required />

                        </div>
                        <div className="input-container">

                            <input type="password" name="password" placeholder="Crie sua senha"
                                value={password} onChange={(e) => setPassword(e.target.value)} required />

                        </div>
                        <div className="input-container">

                            <input type="password" name="password" {...register("senhaUsuario")} placeholder="Confirme sua senha"
                                value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required />

                        </div>

                        <div className="button-container">
                            <button type="submit" >Cadastrar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default CadastroUsuario;