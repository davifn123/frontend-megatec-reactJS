import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

import { FaSearch } from "react-icons/fa";
import '../../styles/searchInput.css';

import ResultFornecedor from "./ResultFornecedor";

function SearchFornecedor() {

    const { searchFornecedor } = useContext(CartContext);


    return (
        <>

            <form className="searchform">
                <input className="searchinput" placeholder='Busque aqui' type='search'
                    onChange={searchFornecedor} />
                <button id='btnSearch'  ><FaSearch /></button>
            </form>

            <ResultFornecedor />
        </>
    );

}

export default SearchFornecedor;