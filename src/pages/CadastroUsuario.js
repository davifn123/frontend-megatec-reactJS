import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


//estilos e imagens
import '../styles/cadastro.css';


function CadastroUsuario() {

    var navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');

    function submitCadastro() {

        if (nome === '' || email === '' || password === '' || confirmPass === '' || confirmPass !== password || cpf === '') {
            alert('CADASTRO INVÁLIDO');
        } else {
            alert('CADASTRO EFETUADO!');
            navigate('/login');
        }
        if (confirmPass !== password) {
            alert('Senha de confirmação deve ser igual');
        }

    }


    return (
        <div className="containerCadastro">
            <div className="primeiroItemCadastro">
                <h1>Cadastro</h1>


                <div className="cadastroForm">
                    <form>
                        <div className="input-container">

                            <input type="text" name="nome" placeholder="Nome"
                                value={nome} onChange={(e) => setNome(e.target.value)} required />

                        </div>
                        <div className="input-container">

                            <input type="email" name="email" placeholder="E-mail"
                                value={email} onChange={(e) => setEmail(e.target.value)} required />

                        </div>
                        <div className="input-container">

                            <input type="password" name="password" placeholder="Crie sua senha"
                                value={password} onChange={(e) => setPassword(e.target.value)} required />

                        </div>
                        <div className="input-container">

                            <input type="password" name="password" placeholder="Confirme sua senha"
                                value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} required />

                        </div>
                        <div className="input-container">

                            <input type="number" name="cpf" placeholder="CPF"
                                value={cpf} onChange={(e) => setCpf(e.target.value)} required />

                        </div>

                        <div className="button-container">
                            <button onClick={submitCadastro} type="submit" >Cadastrar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default CadastroUsuario;