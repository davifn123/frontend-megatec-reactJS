import React, { useState } from "react";
import { FaDoorOpen, FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

//estilos e imagens
import '../styles/login.css';


//paginas





function Login() {

    var navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function SubmitLogin() {


        if (username === '' || password === '') {
            alert('LOGIN INVÁLIDO');
        } else {
            alert('LOGIN EFETUADO');
            navigate('/listarProdutos');
        }
    }

    return (
        <div className="containerLogin">
            <div className="primeiroItemLogin" >
                <h1><FaUserAlt id="Fauseralt" /> Identificação do Usuário</h1>

                <div className="loginForm">
                    <form>
                        <div className="input-container">

                            <input type="text" name="username" placeholder="E-mail, CPF, ou CNPJ"
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