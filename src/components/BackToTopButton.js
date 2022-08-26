import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


import '../styles/BackToTopButton.css'

function BackToTopButton() {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="Main">
            {backToTopButton && (
                <button id="topbtn"
                    onClick={scrollUp}
                > <FaArrowUp /></button>
            )}
        </div>
    );
}
export default BackToTopButton;