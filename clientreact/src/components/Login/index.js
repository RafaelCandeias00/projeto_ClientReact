import React, { useState }from "react";
import './styles.css';
import logoImage from '../../assets/login.png';
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login(){

    /* Armazenar o estado das credenciais do usuário*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /* Redirecionar o usuário */
    const navigate = useNavigate();

    /** Função para fazer login */
    async function login(event){
        event.preventDefault();

        /**Encapsular email e password*/
        const data = {
            email, password
        }

        /** Request para api */
        try{
            const response = await api.post('/Account/LoginUser', data);

            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);

            navigate('/alunos');
        }catch(error){
            alert('O login falhou ' + error);
        }
    }
    
    return(
        <div className="login-container">

            <section className="form">
            <img src={logoImage} alt="Login" id="img1"/>

            <form onSubmit={login}>
            <h1>Cadastro de Alunos</h1>
                <input /** Setando valor */
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button class="button" type="submit">Login</button>
            </form>

            </section>
        </div>
    );
}