import React, { useState, useEffect } from "react";
import { FaDoorOpen, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";


//estilos e imagens
import '../styles/login.css';


//paginas





function Login() {

    var navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function SubmitLogin() {


        if (username === '' || password === '') {
            localStorage.clear();
            alert('LOGIN INVÁLIDO');
        } else if (username === '123' && password === '123') {
            localStorage.clear();
            if (localStorage.getItem("username") === username && localStorage.getItem("password") === password) {
                alert('LOGIN EFETUADO');
                navigate('/listarProdutos');
            } else {
                localStorage.setItem("username", "123");
                localStorage.setItem("password", "123");
                alert('LOGIN EFETUADO');
                navigate('/listarProdutos');
            }

        } else if (username === 'clien' && password === 'clien') {
            localStorage.clear();
            if ((localStorage.getItem("username") === username && localStorage.getItem("password") === password)) {
                alert('LOGIN EFETUADO');
                navigate('/produtos');
            } else {
                localStorage.setItem("username", "clien");
                localStorage.setItem("password", "clien");
                alert('LOGIN EFETUADO');
                navigate('/produtos');
            }
        }

        window.location.reload(false)

    }

    // eslint-disable-next-line
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://megatec-store.herokuapp.com/api/usuarios/listarTodos")
            .then((response) => {
                setPosts(response.data)
                console.log(response.data);
            }).catch(() => {
                console.log("Erro!!");
            });
    }, [])



    return (
        <div className="containerLogin">
            <div className="primeiroItemLogin" >
                <h1><FaUserAlt id="Fauseralt" /> Identificação do Usuário</h1>

                <div className="loginForm">
                    <form>
                        <div className="input-container">

                            <input type="text" name="username" placeholder="E-mail ou CPF"
                                value={username} onChange={(e) => setUsername(e.target.value)} required />

                        </div>
                        <div className="input-container">

                            <input type="password" name="password" placeholder="Senha"
                                value={password} onChange={(e) => setPassword(e.target.value)} required />

                        </div>
                        <div className="button-container">
                            <button onClick={SubmitLogin} type="submit" >Entrar<FaDoorOpen />
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