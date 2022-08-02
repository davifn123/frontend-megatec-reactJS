import React from "react";

import '../styles/pagina2.css'

import Conteudo2Pagina2 from '../img/Conteudo2Pagina2.jpg';
import Conteudo3Pagina2 from '../img/Conteudo3Pagina2.jpg';
import Conteudo4Pagina2 from '../img/Conteudo4Pagina2.jpg';

function Pagina2() {

    return (

        <div>
            <div className="item">
                <section id="section1Pagina2">

                    <section id="InfoBox">
                        <div id="BoxItem">
                            <h3>
                                Alta Performance
                            </h3>
                            <p>Modernize processos e transforme sua empresa digitalmente com a soluções da CONNECT
                                TI&SERVIÇOS</p>
                        </div>
                        <div id="BoxItem">
                            <h3>
                                Infra Completa
                            </h3>
                            <p>Da borda até a nuvem. A CONNECT
                                TI&SERVIÇOS possui um portfólio completo de soluções em
                                infraestrutura, serviços e tecnologias para redefinir o seu TI e transformar a sua empresa
                                para o mundo digital.</p>
                        </div>
                        <div id="BoxItem">
                            <h3>
                                Armazenamento e Segurança
                            </h3>
                            <p>Toda a segurança para proteger um o principal ativo de sua empresa: a Informação
                                Dados protegidos, evitam os roubos de informações importantes da sua empresa.</p>


                        </div>
                    </section>


                    <section id="InfoBox">
                        <div id="BoxItem">
                            <h3>
                                Rede Física
                            </h3>
                            <p>Melhore a rede da sua empresa, utilizando os equipamentos de forma correta e com as melhores
                                práticas aplicadas.</p>
                        </div>
                        <div id="BoxItem">
                            <h3>
                                Ferramentas de Gerenciamento
                            </h3>
                            <p>Tenha uma visão mais ampla do seu ambiente, utilizando de soluções que utilizam Inteligências
                                Artificial.</p>
                        </div>
                        <div id="BoxItem">
                            <h3>
                                Virtualização
                            </h3>
                            <p>Crie ambientes de alta disponibilidade com a virtualização de servidores, aplicações e
                                serviços.</p>
                        </div>
                    </section>
                </section>

                <section id="section2Pagina2">
                    <h1>Serviços</h1>

                    <div id="item1">
                        <img src={Conteudo2Pagina2} />
                        <div id="Info1">
                            <h3>
                                Desk Service
                            </h3>
                            <p>
                                A CONNECT TI&SERVIÇOS fornece serviços de service desk por meio de ferramentas de gestão de
                                TI bem estruturadas, com base de conhecimento e software de controle remoto baseados nas
                                melhores práticas do Information Technology Infrastructure Library (ITIL)
                            </p>
                        </div>

                    </div>

                    <div id="item2">
                        <div id="Info2">
                            <h3>
                                Servidores & Sistemas
                            </h3>
                            <p>
                                Servidores Robustos e prontos para movimentar o negócio da empresa.
                                A Empresa CONNECT TI&SERVIÇOS Oferece diversos serviços,
                                criando soluções em vários sistemas e para diversos Sistemas

                            </p>
                        </div>
                        <img src={Conteudo3Pagina2} />
                    </div>


                    <div id="item3">
                        <img src={Conteudo4Pagina2} />
                        <div id="Info3">
                            <h3>
                                Edge & Cloud Computing
                            </h3>
                            <p>
                                Capacidade de hospedar, manipular e analisar dados transferidos dessas fontes localizadas na
                                borda. Pense em dados de saúde pessoal enviados para uma nuvem centralizada
                            </p>
                        </div>

                    </div>

                </section>
            </div>
        </div>

    );

}

export default Pagina2;