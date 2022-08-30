import React, { useState, useEffect } from "react";
import { FaDoorOpen, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/AuthHook/useAuth";

import axios from "axios";


//estilos e imagens
import '../styles/login.css';


//paginas





function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');
    const [error, setError] = useState('');

    function handleLogin() {
        if (!emailUsuario | !senhaUsuario) {
            setError("Preencha Todos os campos");
            return;

        }

        const res = login(emailUsuario, senhaUsuario);

        if (res) {
            setError(res);
            return;
        }
        alert('LOGIN EFETUADO')
        navigate('/listarProdutos');
    }



    // function SubmitLogin() {


    //     if (username === '' || password === '') {
    //         localStorage.clear();
    //         alert('LOGIN INVÁLIDO');
    //     } else if (username === '123' && password === '123') {
    //         localStorage.clear();
    //         if (localStorage.getItem("username") === username && localStorage.getItem("password") === password) {
    //             alert('LOGIN EFETUADO');
    //             navigate('/listarProdutos');
    //         } else {
    //             localStorage.setItem("username", "123");
    //             localStorage.setItem("password", "123");
    //             alert('LOGIN EFETUADO');
    //             navigate('/listarProdutos');
    //         }

    //     } else if (username === 'clien' && password === 'clien') {
    //         localStorage.clear();
    //         if ((localStorage.getItem("username") === username && localStorage.getItem("password") === password)) {
    //             alert('LOGIN EFETUADO');
    //             navigate('/produtos');
    //         } else {
    //             localStorage.setItem("username", "clien");
    //             localStorage.setItem("password", "clien");
    //             alert('LOGIN EFETUADO');
    //             navigate('/produtos');
    //         }
    //     }

    //     window.location.reload(false)

    // }

    // eslint-disable-next-line
    const [posts, setPosts] = useState([]);

    //#region get usuarios
    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/usuarios/listarTodos")
            .then((response) => {
                setPosts(response.data)
            }).catch((err) => {
                console.log("Erro!!", err);
            });
    }, [])
    //#endregion get usuarios


    return (
        <div className="containerLogin">
            <div className="primeiroItemLogin" >
                <h1><FaUserAlt id="Fauseralt" /> Identificação do Usuário</h1>

                <div className="loginForm">
                    <form>
                        <div className="input-container">

                            <input type="text" name="emailUsuario" placeholder="E-mail"
                                value={emailUsuario} onChange={(e) => [setEmailUsuario(e.target.value), setError('')]} required />

                        </div>
                        <div className="input-container">

                            <input type="password" name="senhaUsuario" placeholder="Senha"
                                value={senhaUsuario} onChange={(e) => [setSenhaUsuario(e.target.value), setError('')]} required />

                        </div>
                        <div className="error">
                            {error}
                        </div>
                        <div className="button-container">
                            <button onClick={handleLogin} type='button' >Entrar<FaDoorOpen />
                            </button>
                        </div>

                        <div className="registerCase" >
                            <Link to={'/cadastro'}>NÃO TENHO CADASTRO</Link>
                        </div>

                    </form>
                </div>
            </div >

        </div >
    );
}
export default Login;