import React from "react";
import { Link } from "react-router-dom";

//estilos e imagens
import '../../styles/main.css';
import { FaBars, FaPlus } from "react-icons/fa";

//paginas e componentes
import TableFornecedor from '../../components/TableFornecedor';


function ListarFornecedor() {


    return (
        <div className="containerMain" >

            <div className="primeiroItemMain"  >
                <Link to={'/cadastrarProdutos'} id={'cadastrarprodbtn'}><FaPlus /> Cadastrar Produtos </Link>
                <Link to={'/cadastrarFornecedor'} id={'cadastrarprodbtn'}><FaPlus /> Cadastrar Fornecedor </Link>
                <Link to={'/listarProdutos'} id={'listarfornbtn'}><FaBars /> Listar Produtos </Link>


            </div>

            <div className="segundoItemMain">

                <TableFornecedor />

            </div>

        </div>
    );

}
export default ListarFornecedor;