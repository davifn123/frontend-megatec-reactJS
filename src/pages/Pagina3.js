import React from "react";

import Iframe from 'react-iframe';

import '../styles/pagina3.css';

import Fone from '../img/svg/Phone.svg';
import Email from '../img/svg/Email.svg';
import Local from '../img/svg/Local.svg';



export default function Pagina3() {



    return (


        <div className="container">

            <div className="item">
                <section id="section1Pagina3">
                    <h1>
                        Contato
                    </h1>
                </section>
            </div>

            <div className="item2">
                <section id="section2Pagina3">
                    <div id="sec2Items">
                        <img src={Fone} />
                        <h3>Telefone CONNECT TI&SERVIÇOS</h3>
                        <p>(61) 3051-0047</p>
                    </div>

                    <div id="sec2Items">
                        <img src={Email} />
                        <h3>E-mail CONNECT TI&SERVIÇOS</h3>
                        <p>contato@connectdf.com.br</p>


                    </div>

                    <div id="sec2Items">
                        <img src={Local} />
                        <h3>Endereço CONNECT TI&SERVIÇOS</h3>
                        <p>SHS, Q. 6, Edifício Brasil 21, Sala 2010/1023 - Asa Sul, Brasília - DF, 70316-000</p>
                    </div>
                </section>
            </div>

            <div className="item3">
                <section id="section3Pagina3">
                    <Iframe
                        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.2139440471797!2d-47.89643408514514!3d-15.792669089052383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93598745e15eb84d%3A0xb94f40708c664dd8!2sConnect%20DF!5e0!3m2!1spt-BR!2sbr!4v1655508455124!5m2!1spt-BR!2sbr"
                        width="99%" height="450" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" />
                </section>
            </div>

            <div className="item4">
                <section id="section4">
                    <h3>Envie uma Mensagem.</h3>
                    <form action="" method="post">
                        <div>
                            <label for="name">Nome:</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label for="mail">E-mail:</label>
                            <input type="email" id="email" />
                        </div>
                        <div>
                            <label for="msg">Mensagem:</label>
                            <textarea id="msg"></textarea>
                        </div>
                        <div className="button">
                            <button type="submit">ENVIAR </button>
                        </div>
                    </form>
                </section>
            </div>




        </div>

    )
}