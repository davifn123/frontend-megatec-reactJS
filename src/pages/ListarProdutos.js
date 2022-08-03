import React from "react";
import { Link } from "react-router-dom";

//estilos e imagens
import '../styles/main.css';
import { FaPlus } from "react-icons/fa";

//paginas e componentes
import TableAdmin from '../components/TableAdmin';


function ListarProdutos() {


    return (
        <div className="containerMain" >

            <div className="primeiroItemMain"  >
                <Link to={'/cadastrarProdutos'} id={'cadastrarprodbtn'}><FaPlus /> Cadastrar Produtos </Link>
                <Link to={'/cadastrarFornecedor'} id={'cadastrarprodbtn'}><FaPlus /> Cadastrar Fornecedor </Link>
            </div>

            <div className="segundoItemMain">

                <TableAdmin />

            </div>

        </div>
    );

}
export default ListarProdutos;