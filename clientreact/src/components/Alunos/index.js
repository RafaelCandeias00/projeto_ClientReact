import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { FiXCircle, FiEdit, FiUserX } from 'react-icons/fi';
import api from "../../services/api";

export default function Alunos() {

    const [nome, setNome] = useState('');
    const [alunos, setAlunos] = useState([]);

    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        api.get('/alunos', authorization).then(
            response => {
                setAlunos(response.data);
            }, token)
    })

    async function logout(){
        try{
            localStorage.clear();
            localStorage.setItem('token', '');
            authorization.headers = '';
            navigate('/');
        }catch(error){
            alert('Não foi possível fazer o logout' + error)
        }
    }

    const navigate = useNavigate();

    return (
        <div className='aluno-container'>
            <header>
                <span>Bem vinde, <strong>{email}</strong>!</span>
                <Link className='button' to="/aluno/novo/0">Novo Aluno</Link>
                <button onClick={logout} type="button">
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type='text' placeholder='Nome' />
                <button type='button' class='button'>
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                {alunos.map(aluno => (
                    <li key={aluno.id}>
                        <b>Nome:</b>{aluno.nome}<br /><br />
                        <b>Email:</b>{aluno.email}<br /><br />
                        <b>Idade:</b>{aluno.idade}<br /><br />

                        <button type="button">
                            <FiEdit size={25} color="#17202a" />
                        </button>
                        <button type="button">
                            <FiUserX size={25} color="#17202a" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}