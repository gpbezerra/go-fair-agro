import "./implementation.css";

export const Implementation = () => {
    return(
        <div id="Implementação" className="videoContainer">
            <h1>Implementação</h1>
            <p>O Escritório de Apoio de Coordenação GO-FAIR Brasil é um dos escritórios regionais de apoio e coordenação da rede GO-FAIR e tem a responsabilidade de difundir, apoiar e coordenar as atividades relacionadas à adoção da estratégia de implementação dos princípios FAIR definida pela iniciativa GO-FAIR em todo o território brasileiro.</p>
            <div className="backgroundVideo">
                <iframe
                    id="videoYtb"
                    src="https://www.youtube.com/embed/_IJZHuJqTSM"
                    width="560" height="315" 
                    frameborder="0"
                    allowfullscreen>
                </iframe>          
            </div>
            <h3>CONHEÇA A ESTRUTURA DO GO FAIR AGRO</h3>
            <div className="implementationCardDeck">
                <div className="implementationCard">
                    
                </div>
                <div className="implementationCard">

                </div>
                <div className="implementationCard">
                    
                </div>
            </div>
        </div>
    );
}