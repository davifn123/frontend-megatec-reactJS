import React from "react";
import { useNavigate } from "react-router-dom";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";



//estilos e imagens
import '../styles/main.css';


//paginas e componentes



function Main() {

    const navigate = useNavigate();

    function buttonMainCadastro() {
        navigate('/cadastro');
    }

    return (

        <div className="containerMain" >

            <div className="primeiroItemMain"  >
                <h1>Sistema Megatec Store</h1>
            </div>

            <div className="segundoItemMain">

                <h2>Faça login para continuar</h2>

                <button type="button" id="buttoncadastromain" onClick={buttonMainCadastro}> CADASTRO </button>
            </div>

        </div>

    );
}

export default Main;