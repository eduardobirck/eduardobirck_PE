import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import logo from '../../imagens/logo.png';
import IconsAcessibility from '../../imagens/iconsAcessibility.png';
import loupewhite from '../../imagens/loupe-white.svg';

const MainPage = () => {
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
    <div>
      <header>
        <div className="center">
          <div className="logo-container">
          <img src={logo}  alt="Logo da A.D.L.U" className="logo" />
          </div>

          <div className="botao">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/Cadastro"><button>Cadastro</button></Link>
            <Link to="/Forum"><button>Forum</button></Link>
          </div>

          <div className="pesquisa">
            <input type="text" className="search-text" placeholder="Pesquisar na ADLU..." />
            <a href="https://www.nãofunciona.com" className="search-bnt">
              <img src={loupewhite} alt="width='25px' height='25px'" />
            </a>
          </div>
        </div>
      </header>

      <div className="zoom">
        <button onClick={zoomIn}>A+</button>
        <button onClick={zoomOut}>A-</button>
      </div>

      <div className="titulo">
        <img src={IconsAcessibility} alt="Icones Acessibilidade" className="img-grande" />
        <h1 id="conteudo">Acessibilidade Digital<br /> Tornando a Web Conectada a Todos</h1>
      </div>

      <div className="texto">
        <p>A Acessibilidade Digital representa o compromisso em desenvolver conteúdo digital que seja acessível e significativo para todas as pessoas, independentemente de suas habilidades ou deficiências. Em um mundo onde um terço da população global utiliza a internet, a importância da acessibilidade digital tornou-se mais do que nunca uma questão crucial. Estamos empenhados em criar uma experiência online inclusiva, onde cada usuário possa participar plenamente, garantindo que a tecnologia esteja ao alcance de todos.</p>
      </div>

      <div className="dire">
        <a href="#diretrizes">Veja as Diretrizes de Acessibilidade</a>
      </div>

      <div className="texto2">
        <h2>Desvendando a Acessibilidade Digital<br /> Um Compromisso com a Inclusão Online</h2>
        <p>O que é Acessibilidade Digital? A Acessibilidade Digital é uma prática abrangente que busca tornar o acesso às informações digitais mais fácil para pessoas com deficiências, incluindo deficiências visuais, auditivas e motoras. Exemplos notáveis incluem legendas e descrições de imagens para garantir acessibilidade visual, além de controles de voz para facilitar a navegação para pessoas com deficiência motora.<br />
          Acreditamos que a Acessibilidade Digital não é um mero privilégio, mas um direito fundamental. Cada linha de código que escrevemos, cada elemento que concebemos, é uma declaração firme de que a inclusão não é a exceção, mas sim a norma. Vamos moldar a web como um espaço onde todos são calorosamente recebidos, independentemente de suas habilidades, e onde a igualdade digital não é apenas uma visão, mas uma realidade que construímos juntos.
        </p>
      </div>

      <div className="texto3" id="diretrizes">
        <h3>Leis e Diretrizes de Acessibilidade</h3>
        <p>Em diversos países, incluindo o Brasil, há legislações que demandam a acessibilidade de sites para todos os usuários. As Diretrizes de Acessibilidade para Conteúdo da Web (WCAG) destacam-se como os princípios amplamente adotados nesse contexto. Elas estabelecem padrões e diretrizes, delineando os requisitos essenciais para garantir que os sites sejam acessíveis a todos os públicos.</p>
      </div>

      <footer></footer>
    </div>
  );
};

export default MainPage;
