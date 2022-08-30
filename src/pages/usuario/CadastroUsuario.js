import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/AuthHook/useAuth";

import axios from "axios";
import { useForm } from 'react-hook-form';


//estilos e imagens
import '../../styles/cadastro.css';


function CadastroUsuario() {

    const navigate = useNavigate();
    const { signup } = useAuth();

    const [emailUsuario, setEmailUsuario] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {

        if (!emailUsuario | !confirmEmail | !senhaUsuario | !cpf | !nome) {
            setError('Preencha todos os campos');
            return;
        } else if (emailUsuario !== confirmEmail) {
            setError('Os emails não conferem!');
            return;
        }

        const res = signup(emailUsuario, senhaUsuario);

        if (res) {
            setError(res);
            return;
        }

        alert("Cadastrado com sucesso!")
        navigate('/login');
    }





    // eslint-disable-next-line
    const { register, handleSubmit, formState: { errors } } = useForm();



    //#region post
    const addPost = data => axios.post("https://megatec-store.herokuapp.com/api/usuarios", data)
        .then(() => {

        })
        .catch((err) => {
            alert("Erro ao cadastrar!", err)
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

                            <input type="email" name="emailUsuario" placeholder="E-mail"
                                value={emailUsuario} onChange={(e) => [setEmailUsuario(e.target.value), setError('')]} required />

                        </div>
                        <div className="input-container">

                            <input type="email" name="confirmEmail" {...register("emailUsuario")} placeholder="Confirme seu E-mail"
                                value={confirmEmail} onChange={(e) => [setConfirmEmail(e.target.value), setError('')]} required />

                        </div>
                        <div className="input-container">

                            <input type="password" name="senhaUsuario" {...register("senhaUsuario")} placeholder="Senha"
                                value={senhaUsuario} onChange={(e) => [setSenhaUsuario(e.target.value), setError('')]} required />

                        </div>
                        <div className="error">
                            {error}
                        </div>
                        <div className="button-container">
                            <button type="submit" onClick={handleSignup} >Cadastrar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default CadastroUsuario;