import React from "react";


//estilos e imagens
import '../styles/table.css'


function Table() {


    return (

        <div className="tableMain">
            <table className="tableContent">
                <tr>
                    <th>ID</th>
                    <th>Produto</th>
                    <th>Categoria</th>
                    <th>Preço</th>
                    <th>Descrição</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Cadeira Gamer </td>
                    <td>Cadeira</td>
                    <td>R$600.50</td>
                    <td>Cadeira gamer com assento em couro sintético</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>HeadPhone philco</td>
                    <td>Fones de ouvido</td>
                    <td>R$150</td>
                    <td>Fone de ouvido extra auricular</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Nome do produto</td>
                    <td>Categoria do produto</td>
                    <td>Preço do Produto</td>
                    <td>Descrição do produto</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Nome do produto</td>
                    <td>Categoria do produto</td>
                    <td>Preço do produto</td>
                    <td>Descrição do produto</td>
                </tr>
            </table>
        </div>
    );
}
export default Table;