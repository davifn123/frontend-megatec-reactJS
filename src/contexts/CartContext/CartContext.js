import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({})


export const CartProvider = ({ children }) => {




    useEffect(() => {

        const localCart = window.localStorage.getItem('carrinho')

        if (localCart) {
            setCart(JSON.parse(localCart))
        }
    }, [])

    const [cart, setCart] = useState([]);

    //#region add to carrinho

    function AddCart(id, nome_produto, quantidade_produto, cnpj_fornecedor, valor_produto, obs_produto) {

        const produto = { id, nome_produto, quantidade_produto, cnpj_fornecedor, valor_produto, obs_produto }

        setCart([...cart, produto]);

        localStorage.setItem("carrinho", JSON.stringify([...cart, produto]));

        // alert(`Produto adicionado`);

    }
    //#endregion add to carrinho


    //#region remove from carrinho
    function RemoveItem(produtoId) {
        const filterCart = cart.filter(
            (cartItem) => cart.indexOf(cartItem) !== produtoId
        );

        setCart(filterCart);

        localStorage.setItem("carrinho", JSON.stringify(filterCart));

    }
    //#endregion remove from carrinho


    //#region clear carrinho
    function limparCarrinho() {
        setCart([]);
        localStorage.removeItem("carrinho");
    }
    //#endregion clear carrinho



    //#region search id produtos

    const [data, setData] = useState([]);

    function searchProdutos(e) {

        e.preventDefault();

        const { value } = e.target;

        if (!value) {
            setData([])
            return;
        }

        const url = `https://megatec-store.herokuapp.com/api/produtos/${value}`;

        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setData([data]);
            })

    }
    // console.log('Produto: ', data);
    //#endregion search id produtos


    //#region search por nome fornecedor 
    const [name, setName] = useState([]);

    function searchFornecedor(e) {

        e.preventDefault();

        const { value } = e.target;

        if (!value) {
            setName([])
            return;
        }

        const url = `https://megatec-store.herokuapp.com/api/fornecedores/nome/${value}`;

        fetch(url)
            .then(response => response.json())
            .then((name) => {
                setName([name]);
            })

    }
    console.log('Fornecedor: ', name);
    //#endregion search por nome fornecedor 


    return <CartContext.Provider value={{ cart, data, name, AddCart, limparCarrinho, RemoveItem, searchProdutos, searchFornecedor }}> {children} </CartContext.Provider>




}