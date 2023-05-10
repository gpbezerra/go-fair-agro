import React from "react";
import  "./footer.css";
import logo from "../../assets/logoFairAgro-noBG.png";
import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import link from "../../assets/linkedin.png";

export const Footer = () => {
    return (
        <div className="footerContainer">
            <img id="footerLogo" src={logo} alt="logo go fair brasil agro" />
            <p>E-mail de contato: gofairagro@gmail.com</p>
            <div className="footerSocialMedia">
                <a href="https://r1.ufrrj.br/petsi/">Criado por PET-SI/UFRRJ</a>
                <div className="footerIcons">
                    <a href="https://www.facebook.com/PetSIUFRRJ"><img src={face} alt="" /></a>
                    <a href="https://www.instagram.com/petsiufrrj/?hl=en"><img src={insta} alt="" /></a>
                    <a href="https://www.linkedin.com/company/pet-si-ufrrj?originalSubdomain=br"><img src={link} alt="" /></a>
                </div>
            </div>
        </div>
    )
}