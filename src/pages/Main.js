import React from "react";
// import { FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";



//estilos e imagens
import '../styles/main.css';


//paginas e componentes
import Table from '../components/Table'


function Main() {


    return (

        <div className="containerMain" >

            <div className="primeiroItemMain"  >
                {/* <Link to={'/cadastrarProdutos'} id={'cadastrarprodbtn'}><FaPlus /> Cadastrar Produtos </Link> */}
            </div>

            <div className="segundoItemMain">

                <Table />

            </div>

        </div>

    );
}

export default Main;