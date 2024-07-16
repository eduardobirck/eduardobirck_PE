import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'C:/eb_peiii/app/frontend/src/imagens/logo.png';
import loupewhite from "C:/eb_peiii/app/frontend/src/imagens/loupe-white.svg";
import './index.css';

const Forum = () =>  {
    const zoomStep = 10;
    let currentZoom = 100;
  
    const zoomIn = () => {
      currentZoom += zoomStep;
      applyZoom();
    };
  
    const zoomOut = () => {
      currentZoom = Math.max(100, currentZoom - zoomStep);
      applyZoom();
    };
  
    const applyZoom = () => {
      document.body.style.zoom = `${currentZoom}%`;
    };



    return (
        <>
            <header>
                <div className="center">
                    <div className="logo-container">
                    <img src={logo} alt="Logo da A.D.L.U" className="logo" />
                    </div>
                    <div className="pesquisa">
                        <input type="text" className="search-text" placeholder="Pesquisar na ADLU..." />
                        <a href="https://www.nãofunciona.com/" className="search-bnt">
                            <img className="loupe-white" src={loupewhite} alt="" width="25px" height="25px" />
                        </a>
                        
                    </div>
                    <div className="botao">
                        <Link to="/Main"><button>Inicio</button></Link>
                    </div>
                    <div><h1>Fórum de Acessibilidade</h1></div>
                </div>
            </header>

            <div className="zoom">
                <button onClick={zoomIn}>A+ </button>
                <button onClick={zoomOut}>A- </button>
            </div>

            <div className="texto">
                
                <p>Bem-vindo ao Fórum de Acessibilidade! Este espaço é dedicado a discutir e compartilhar informações sobre acessibilidade. Aqui, você encontrará conversas sobre tecnologias assistivas, boas práticas de design inclusivo e atualizações relacionadas à acessibilidade em diversos contextos. Junte-se a nós para aprender, trocar experiências e contribuir para tornar o mundo mais acessível a todos.</p>
            </div>

            <main className="container">
                <div className="topic">
                    <h2><a href="https://www.nãofunciona.com">Explorando Inovações em Tecnologias Assistivas</a></h2>
                    <p>Hoje, quero compartilhar algumas descobertas emocionantes no mundo das tecnologias assistivas. Encontrei um software incrível que facilita a vida diária de muitas pessoas com deficiência. E vocês, já experimentaram alguma novidade recente? Vamos trocar ideias e explorar juntos as inovações que estão transformando vidas!<p><strong>Autor:</strong></p> Renata Oliveira</p>
                </div>

                <div className="topic">
                    <h2><a href="https://www.nãofunciona.com">Narrativas Pessoais: Desafios e Triunfos na Jornada da Acessibilidade</a></h2>
                    <p>Prezados membros da comunidade,
                        Gostaria de destacar e discutir avanços recentes em tecnologias assistivas que têm impactado significativamente a vida das pessoas com deficiência. Convido todos a compartilharem suas descobertas mais recentes, seja em softwares, hardwares ou dispositivos, para enriquecermos nossa compreensão coletiva sobre as opções disponíveis e seu potencial transformador. Vamos iniciar uma conversa sobre as inovações que estão moldando o cenário da acessibilidade. <p><strong>Autor:</strong></p> Carolina Mendes</p>
                </div>

                <div className="topic">
                    <h2><a href="https://www.nãofunciona.com">Acessibilidade no Cotidiano: Identificando Desafios e Explorando Soluções</a></h2>
                    <p>Prezada comunidade, Hoje, gostaria de abrir espaço para discutirmos os desafios cotidianos relacionados à acessibilidade. Seja no ambiente de trabalho, educacional ou domiciliar, convido todos a compartilharem suas experiências. Além disso, encorajo a identificação de soluções práticas que tenham sido eficazes em superar tais obstáculos. Juntos, podemos contribuir para a criação de ambientes mais inclusivos. <p><strong>Autor:</strong></p> André Silva</p>
                </div>

                <div className="topic">
                    <h2><a href="https://www.nãofunciona.com">Estratégias para Design Acessível: Construindo Ambientes Inclusivos</a></h2>
                    <p>Prezada comunidade de designers, Neste tópico, gostaria de promover uma discussão mais profunda sobre a importância do design acessível. Convido os membros a compartilharem suas melhores práticas, estratégias de usabilidade inclusiva e experiências no desenvolvimento de soluções acessíveis. Vamos explorar como podemos, coletivamente, contribuir para a construção de um futuro mais inclusivo através do design. <p><strong>Autor:</strong></p> Mariana Alves</p>
                </div>
            </main>

            <footer className="footer">
                <div className="container">
                    <p>Entre em contato:</p>
                    <p>Telefone Fixo: (xx) xxxx-xxxx</p>
                    <p>Celular: (xx) xxxxx-xxxx</p>
                </div>
            </footer>
        </>
   );
}; 

export default Forum;
