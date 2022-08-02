import React from "react";


import ArrowUp from '../img/svg/ArrowUp.svg';


import '../styles/pageUp.css'

export default function PageUp() {

    //função para retornar ao top da pagina
    function BackToTop() {
        var button = false;

        button(window.scrollTo(0, 0))
    }


    return (
        <div id="PageUp">
            <button onClick={BackToTop}><img src={ArrowUp} /></button>
        </div>
    )
}
