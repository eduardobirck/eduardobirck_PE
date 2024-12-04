import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import logo from '../../imagens/logo.png';

const Login = () => {
  return (
    <div>
      <header>
        <div className="center">
          <div className="logo-container">
              <img src={logo} alt="Logo da A.D.L.U" className="logo" />
          </div>
        </div>
      </header>

      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <div className="inputs">
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required />
              <input type="password" name="senha" placeholder="Senha" required />
            </div>
            <Link to="/Main"><button>Acessar</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
