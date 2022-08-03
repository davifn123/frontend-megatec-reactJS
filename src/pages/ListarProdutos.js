import React from "react";
import { Link } from "react-router-dom";

//estilos e imagens
import '../styles/main.css';
import { FaPlus } from "react-icons/fa";

//paginas e componentes
import Table from '../components/TableAdmin';


function ListarProdutos() {


    return (
        <div className="containerMain" >

            <div className="primeiroItemMain"  >
                <Link to={'/cadastrarProdutos'} id={'cadastrarprodbtn'}><FaPlus /> Cadastrar Produtos </Link>
            </div>

            <div className="segundoItemMain">

                <Table />

            </div>

        </div>
    );

}
export default ListarProdutos;