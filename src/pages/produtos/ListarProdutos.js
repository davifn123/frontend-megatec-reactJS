import React from "react";
import { Link } from "react-router-dom";

//estilos e imagens
import '../../styles/main.css';
import { FaBars, FaPlus } from "react-icons/fa";

//paginas e componentes
import TableProduto from '../../components/TableProduto';


function ListarProdutos() {


    return (
        <div className="containerMain" >

            <div className="primeiroItemMain"  >
                <Link to={'/cadastrarProdutos'} id={'cadastrarprodbtn'}><FaPlus /> Cadastrar Produtos </Link>
                <Link to={'/cadastrarFornecedor'} id={'cadastrarprodbtn'}><FaPlus /> Cadastrar Fornecedor </Link>
                <Link to={'/listarFornecedor'} id={'listarfornbtn'}><FaBars /> Listar Fornecedores </Link>
            </div>

            <div className="segundoItemMain">

                <TableProduto />

            </div>

        </div>
    );

}
export default ListarProdutos;