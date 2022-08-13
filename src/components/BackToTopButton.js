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
                <button id="topbtn" style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px ",
                    height: "50px",
                    fontSize: "50px",
                    borderRadius: "50px",
                    zIndex: "3"
                }}
                    onClick={scrollUp}
                > <FaArrowUp /></button>
            )}
        </div>
    );
}
export default BackToTopButton;