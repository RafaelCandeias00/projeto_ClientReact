import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import {FiXCircle, FiEdit, FiUserX} from 'react-icons/fi';

export default function Alunos(){
    return(
        <div className='aluno-container'>
            <header>
                <span>Bem vinde, <strong>Rafael</strong>!</span>
                <Link className='button' to="aluno/novo">Novo Aluno</Link>
                <button type="button">
                    <FiXCircle size={35} color="#17202a"/>
                </button>
            </header>
            <form>
                <input type='text' placeholder='Nome'/>
                <button type='button' class='button'>
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Realação de Alunos</h1>
            <ul>
                <li>
                    <b>Nome:</b>Rafael<br/><br/>
                    <b>Email:</b>rafael@email.com<br/><br/>
                    <b>Idade:</b>23<br/><br/>

                    <button type="button">
                        <FiEdit size={25} color="#17202a"/>
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a"/>
                    </button>
                </li>
                <li>
                    <b>Nome:</b>Rafael<br/><br/>
                    <b>Email:</b>rafael@email.com<br/><br/>
                    <b>Idade:</b>23<br/><br/>

                    <button type="button">
                        <FiEdit size={25} color="#17202a"/>
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a"/>
                    </button>
                </li>
            </ul>
        </div>
    );
}