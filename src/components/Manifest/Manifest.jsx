import logo  from "../../assets/logo-go-fair-agro.png";
import pdf  from "../../assets/manifesto.pdf";
import "./manifest.css";

export const Manifest = () => {
    return (
        <div id="Manifesto" className="manifestContainer">
                <h3>SOBRE O</h3>
                <h2>Manifesto</h2>
                <p id="manifestP">O Escritório de Apoio de Coordenação GOFAIR Brasil é um dos escritórios regionais da rede GO-FAIR e tem a responsabilidade de difundir, apoiar e coordenar as atividades relacionadas à adoção da estratégia de implementação dos princípios FAIR definida pela iniciativa GO-FAIR em todo o território brasileiro.</p>
                <img src={logo} alt="logo go fair agro brasil" />
                <p id="manifestDescription">Acesse o manifesto aberto da rede de implementação temática go-fair agro brasil</p>
                <a href={pdf} download="manifesto">Saiba mais</a>
        </div>
    )
}