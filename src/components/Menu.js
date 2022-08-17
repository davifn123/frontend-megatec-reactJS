import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

// importação de estilos e imagens
import { FaBars, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import logoAnimada from '../img/logos/LogoMenuFundoEscuroAnimada.gif';
import '../styles/menu.css';

//importação de paginas
import CadastrarFornecedor from '../pages/fornecedor/CadastrarFornecedor';
import EditarFornecedor from '../pages/fornecedor/EditarFornecedor';
import ListarFornecedor from '../pages/fornecedor/ListarFornecedor';
import Login from '../pages/Login';
import Main from '../pages/Main';
import CadastrarProdutos from '../pages/produtos/CadastrarProdutos';
import EditarProdutos from '../pages/produtos/EditarProdutos';
import ListarProdutos from '../pages/produtos/ListarProdutos';
import Produtos from '../pages/produtos/Produtos';
import CadastroUsuario from '../pages/usuario/CadastroUsuario';

function Menu() {

    // const navigate = useNavigate();
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


    // const logout = (e) => {
    //     // 
    //     localStorage.clear();
    //     window.location.reload(false);

    // }

    function logout() {
        // navigate('/main');
        localStorage.clear();

        setTimeout(() => {
            window.location.reload(false);
        }, 500);


    }

    return (
        <Router>
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

                                {localStorage.getItem("username") !== null && localStorage.getItem("password") !== null ?
                                    <Link to={'/main'} onClick={logout} id='loginBtn' >SAIR</Link> :
                                    <Link to={'/login'} id='loginBtn'>LOGIN</Link>}

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

                        {localStorage.getItem("username") !== null && localStorage.getItem("password") !== null ?
                            <>  <Link to={'/main'} onClick={logout} id='FaUserBtn' ><FaSignOutAlt /> SAIR</Link></> :

                            <> <FaUser /><Link to={'/login'} id='FaUserBtn' >Login</Link>  </>
                        }




                        <Link to={'/cadastro'} id='cadastroBtnmenu'>Cadastro</Link>
                        {/* <Link to={''} id='Faheadsetbtn'><FaHeadset /></Link>
                        <Link to={'/produtos'} id='Facart'><FaCartPlus /></Link> */}

                    </div>
                </div>

            </div>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/main' element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<CadastroUsuario />} />
                <Route path='/produtos' element={<Produtos />} />
                <Route path='/cadastrarProdutos' element={<CadastrarProdutos />} />
                <Route path='/listarProdutos' element={<ListarProdutos />} />
                <Route path='/cadastrarFornecedor' element={<CadastrarFornecedor />} />
                <Route path='/listarFornecedor' element={<ListarFornecedor />} />
                <Route path='/editarProdutos/:id' element={<EditarProdutos />} />
                <Route path='/editarFornecedor/:cnpj_fornecedor' element={<EditarFornecedor />} />
            </Routes>

        </Router >

    )

}
export default Menu;