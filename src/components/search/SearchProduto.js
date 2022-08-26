import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

import { FaSearch } from "react-icons/fa";
import '../../styles/searchInput.css';

import ResultProduto from "./ResultProduto";

function SearchProduto() {

    const { searchProdutos } = useContext(CartContext);




    return (
        <>

            <form className="searchform">
                <input className="searchinput" placeholder='Busque aqui' type='search'
                    onChange={searchProdutos} />
                <button id='btnSearch'  ><FaSearch /></button>
            </form>

            <ResultProduto />
        </>
    );

}

export default SearchProduto;