import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.css'; // Importe o seu CSS
import logo from '../../imagens/logo.png';

function Cadastro() {
    const [full_name, setFullName] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Enviar os dados para o backend
            await axios.post('http://localhost:8800/users', {
                full_name,
                dateBirth,
                email,
                password,
            });

            // Limpar os campos após o envio bem-sucedido
            setFullName('');
            setDateBirth('');
            setEmail('');
            setPassword('');

            // Exibir uma mensagem de sucesso (opcional)
            alert('Usuário cadastrado com sucesso!');
        } catch (error) {
            // Lidar com erros de requisição (exibir mensagem de erro, etc.)
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário. Por favor, tente novamente mais tarde.');
        }
    };

    return (
        <div>
            <header>
                <div className="center">
                    <div className="logo-container">
                        <img src={logo} alt="Logo da A.D.L.U" className="logo" />
                        <Link to="/Main"><button>Inicio</button></Link>
                    </div>
                    <h1>Cadastro</h1>
                    <p>Preencha o formulário abaixo com as suas informações seguindo os campos indicados</p>
                </div>
            </header>

            <div className="page">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados Pessoais</legend>
                        <div className="input-wrapper">
                            <label>Nome Completo</label>
                            <input type="text" value={full_name} onChange={(e) => setFullName(e.target.value)} required minLength="5" />
                        </div>
                        <div className="input-wrapper">
                            <label>Data de nascimento</label>
                            <input type="date" value={dateBirth} onChange={(e) => setDateBirth(e.target.value)} required />
                        </div>
                        <div className="input-wrapper">
                            <label>Email <span>(digite um email válido)</span></label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-wrapper">
                            <label>Senha <span>(mínimo 6 caracteres)</span></label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="6" />
                        </div>
                    </fieldset>
                    <div className="div-wrapper" id="button">
                        <button type="submit" id="botao">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
