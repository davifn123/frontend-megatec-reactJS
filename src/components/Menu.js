import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import useAuth from '../hooks/AuthHook/useAuth';

// importação de estilos e imagens
import { FaBars, FaCartPlus, FaSignOutAlt, FaUser } from 'react-icons/fa';
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
import EditarUsuario from '../pages/usuario/EditarUsuario';
import ListarUsuario from '../pages/usuario/ListarUsuario';
import Carrinho from '../pages/vendas/Carrinho';

function Menu() {




    //função para abrir o dropdown
    function showDropdown() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    //#region 
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
    //#endregion

    //#region private

    const Private = ({ Item }) => {

        const { logado } = useAuth();

        return logado > 0 ? <Item /> : <Main />

    }

    //#endregion private



    //#region logout
    const { logout } = useAuth();

    // function logout() {

    //     localStorage.clear();

    //     setTimeout(() => {
    //         window.location.reload(false);
    //     }, 300);

    // }

    //#endregion

    return (
        <Router>
            <div className="menu" >

                <div className='dropdown'>
                    <ul >
                        <li>
                            <button onClick={showDropdown} className='dropBtn'><FaBars /></button>
                        </li>

                        <div className='dropdownContent' id='myDropdown'>


                            {
                                localStorage.getItem("user_token") !== null ?

                                    <li >
                                        <Link to={'/listarProdutos'}>Produtos e Fornecedores</Link>
                                        <Link to={'/listarUsuario'}>Gerenciar Usuários</Link>
                                        <Link to={'/produtos'}>Produtos</Link>
                                    </li>
                                    :
                                    <li >
                                        <Link to={'/'}>Início</Link>
                                    </li>
                            }



                            {
                                localStorage.getItem("user_token") !== null ?
                                    <li >

                                    </li>
                                    :
                                    <li >
                                        {/* <Link to={'/produtos'}>Início</Link> */}
                                    </li>
                            }

                            <div className='dropdownContentBtns' >

                                {
                                    localStorage.getItem("user_token") !== null ?
                                        <Link to={'/main'} onClick={() => logout()} id='loginBtn' >SAIR</Link> :
                                        <>
                                            <Link to={'/login'} id='loginBtn'>LOGIN</Link>
                                            <Link to={'/cadastro'} id='cadastroBtn' >CADASTRO</Link>
                                        </>

                                }



                            </div>
                        </div>
                    </ul>
                </div>


                <div id='conteudosMenu'>
                    <div className='conteudoMenu0'>
                        <Link to={'/produtos'}><img src={logoAnimada} alt='' /></Link>
                    </div>

                    <div className='conteudoMenu1'>

                    </div>

                    <div className='conteudoMenu2'>

                        {
                            localStorage.getItem("user_token") !== null ?
                                <>
                                    <Link to={'/main'} onClick={() => logout()} id='FaUserBtn' ><FaSignOutAlt /> SAIR</Link>
                                </>
                                :
                                <>
                                    <FaUser /><Link to={'/login'} id='FaUserBtn' >Login</Link>
                                    <Link to={'/cadastro'} id='cadastroBtnmenu'>Cadastro</Link>
                                </>
                        }

                        {
                            localStorage.getItem("user_token") !== null ?
                                <>
                                    <Link to={'/carrinho'} id='Facart'><FaCartPlus /></Link>
                                </>
                                :
                                <>

                                </>
                        }

                        {/* <Link to={''} id='Faheadsetbtn'><FaHeadset /></Link>
                        //  */}

                    </div>
                </div>

            </div>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path='/main' element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<CadastroUsuario />} />
                <Route path='/produtos' element={<Private Item={Produtos} />} />
                <Route path='/cadastrarProdutos' element={<Private Item={CadastrarProdutos} />} />
                <Route path='/listarProdutos' element={<Private Item={ListarProdutos} />} />
                <Route path='/cadastrarFornecedor' element={<Private Item={CadastrarFornecedor} />} />
                <Route path='/listarFornecedor' element={<Private Item={ListarFornecedor} />} />
                <Route path='/editarProdutos/:id' element={<Private Item={EditarProdutos} />} />
                <Route path='/editarFornecedor/:cnpj_fornecedor' element={<Private Item={EditarFornecedor} />} />
                <Route path='/listarUsuario' element={<Private Item={ListarUsuario} />} />
                <Route path='/editarUsuario/:cpfUsuario:codEmpresa' element={<Private Item={EditarUsuario} />} />
                <Route path='/carrinho' element={<Private Item={Carrinho} />} />
                <Route path='*' element={<Main />} />
            </Routes>

        </Router >

    )

}
export default Menu;