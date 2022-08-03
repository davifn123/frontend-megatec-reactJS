import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

// importação de estilos e imagens
import '../styles/menu.css'
import logoAnimada from '../img/logos/LogoMenuFundoEscuroAnimada.gif'
import { FaBars, FaSearch, FaUser } from 'react-icons/fa'

//importação de paginas
import Main from '../pages/Main';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Produtos from '../pages/Produtos';
import CadastrarProdutos from '../pages/CadastrarProdutos';
import ListarProdutos from '../pages/ListarProdutos';
import CadastrarFornecedor from '../pages/CadastrarFornecedor';

function Menu() {

    const [search, setSearch] = useState('')

    function handleSearch() {

        if (search === '') {
            alert(` Procure por algo `);
        }

    }

    //função para abrir o dropdown
    function showDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    //fecha o dropdown menu quando o usuario clica em outro lugar
    window.onclick = function (event) {
        if (!event.target.matches('.dropBtn')) {

            var dropdowns = document.getElementsByClassName("dropdownContent");

            for (var i = 0; i < dropdowns.length; i++) {

                var openDropdown = dropdowns[i];

                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }


    return (
        <BrowserRouter>
            <div className="menu" >

                <div className='dropdown'>
                    <ul >
                        <li>
                            <button onClick={showDropdown} className='dropBtn'><FaBars /></button>
                        </li>

                        <div className='dropdownContent' id='myDropdown'>
                            <li >
                                <Link to={'/'}>Início</Link>
                            </li>
                            <li >
                                <Link to={'/produtos'}>Produtos</Link>
                            </li>

                            <div className='dropdownContentBtns' >
                                <Link to={'/login'} id='loginBtn'>LOGIN</Link>
                                <Link to={'/cadastro'} id='cadastroBtn' >CADASTRO</Link>
                            </div>
                        </div>
                    </ul>
                </div>


                <div id='conteudosMenu'>
                    <div className='conteudoMenu0'>
                        <Link to={'/'}><img src={logoAnimada} alt='' /></Link>
                    </div>

                    <div className='conteudoMenu1'>
                        <form>
                            <input placeholder='Busque aqui' type={'search'}
                                value={search} onChange={(event) => setSearch(event.target.value)} />
                            <button id='btnSearch' onClick={handleSearch} ><FaSearch /></button>
                        </form>
                    </div>

                    <div className='conteudoMenu2'>
                        <FaUser />
                        <Link to={'/login'} id='FaUserBtn' >Login</Link>
                        <Link to={'/cadastro'} id='cadastroBtnmenu'>Cadastro</Link>
                        {/* <Link to={''} id='Faheadsetbtn'><FaHeadset /></Link>
                        <Link to={'/produtos'} id='Facart'><FaCartPlus /></Link> */}

                    </div>
                </div>

            </div>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/cadastrarProdutos' element={<CadastrarProdutos />} />
                <Route path='/listarProdutos' element={<ListarProdutos />} />
                <Route path='/cadastrarFornecedor' element={<CadastrarFornecedor />} />
            </Routes>

        </BrowserRouter >

    )

}
export default Menu;