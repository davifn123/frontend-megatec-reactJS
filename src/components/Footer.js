import React from "react";

//estilos e imagens
import '../styles/footer.css';
import logo from '../img/logos/LogoMenuFundoEscuro.png'

export default function Footer() {
    return (
        <div>

            <footer id="footer">
                <img src={logo} alt='' />
                <div id="infosFooter">

                    <p>
                        Tel.: (61) 0000-0000
                    </p>
                    <p>
                        contato@megatec.com.br
                    </p>
                    <p>
                        Brasília-DF CEP 00.000-000
                    </p>

                </div>
            </footer>

        </div>
    );
}