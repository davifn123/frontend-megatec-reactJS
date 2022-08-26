import React, { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import axios from "axios";
import { useForm } from 'react-hook-form';


//estilos e imagens
import '../../styles/cadastrarProdutos.css'

//paginas


function EditarFornecedor() {

    const navigate = useNavigate();

    // const [nome_fornecedor, setNome_fornecedor] = useState('');
    // const [cnpj_fornecedor, setCnpj_fornecedor] = useState('');
    // const [email_fornecedor, setEmail_fornecedor] = useState('');
    // const [fone_fornecedor, setFone_fornecedor] = useState('');



    const { cnpj_fornecedor } = useParams();
    // eslint-disable-next-line
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const addPost = data => axios.put(`https://megatec-store.herokuapp.com/api/fornecedores/${cnpj_fornecedor}`, data)
        .then(() => {
            alert("Editado com sucesso!");
            navigate('/listarFornecedor');
        })
        .catch(() => {
            alert("ERRO ao EDITAR!")
        })


    // const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get(`https://megatec-store.herokuapp.com/api/fornecedores/${cnpj_fornecedor}`)
            .then((response) => {
                reset(response.data);
                console.log(response.data);
            })
            .catch((response) => {
                alert(`ERRO AO ACHAR FORNECEDOR`)
                console.log(`ERRO ${response.data}`);
            })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])






    return (
        <div className="containerCadastrarProdutos">
            <div className="primeiroItemCadastrarProdutos">



                <div className="cadastrarProdutoForm">
                    <h1>Editar Fornecedor</h1>
                    <form onSubmit={handleSubmit(addPost)}  >
                        <div className="input-containerproduto"  >

                            <input type="text" name="nome_fornecedor" {...register("nome_fornecedor")} placeholder='Nome do Fornecedor'
                                required />

                        </div>

                        <div className="input-containerproduto" >
                            <input type="text" name="cnpj_fornecedor" {...register("cnpj_fornecedor")} placeholder={'CNPJ'}
                                required />
                        </div>

                        <div className="input-containerproduto">

                            <input type="email" name="email_fornecedor" {...register("email_fornecedor")} placeholder='Email do fornecedor'
                                required />
                        </div>

                        <div className="input-containerproduto">

                            <input type="number" name="fone_fornecedor" {...register("fone_fornecedor")} placeholder='Telefone do fornecedor'
                                required />

                        </div>


                        <div className="button-containerproduto">
                            <button type="submit" >Editar</button>
                        </div>
                    </form>
                </div>



            </div >
        </div >
    );
}
export default EditarFornecedor;