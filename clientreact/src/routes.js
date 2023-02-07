import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Alunos from './components/Alunos';
import NovoAluno from './components/NovoAluno';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/alunos' exact element={<Alunos/>}/>
                <Route path='/aluno/novo/:alunoId' exact element={<NovoAluno/>}/>
            </Routes>
        </BrowserRouter>
    );
}