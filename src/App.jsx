import React, { useState } from 'react';
import Header from './components/Header';
import TaskSummary from './components/TaskSummary';
import TaskList from './components/TaskList';
import './App.css'

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, titulo: "Estudar React", concluida: false },
    { id: 2, titulo: "Fazer atividade de Web II", concluida: false },
    { id: 3, titulo: "Ler artigo acadêmico", concluida: true },
    { id: 4, titulo: "Revisar código do projeto", concluida: false }
  ]);

  const handleToggleStatus = (id) => {
    setTarefas(prevTarefas =>
      prevTarefas.map(tarefa =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const handleDelete = (id) => {
    setTarefas(prevTarefas => prevTarefas.filter(tarefa => tarefa.id !== id));
  };

  const total = tarefas.length;
  const concluidas = tarefas.filter(t => t.concluida).length;
  const pendentes = total - concluidas;

  return (
    <div className='app-container'>
      <Header 
        titulo="Gerenciador Acadêmico" 
        descricao="Organize suas entregas, trabalhos e revisões de forma simples." 
      />

      <TaskSummary 
        total={total} 
        concluidas={concluidas} 
        pendentes={pendentes} 
      />

      <TaskList 
        tarefas={tarefas} 
        onToggleStatus={handleToggleStatus} 
        onDelete={handleDelete} 
      />
    </div>
  );
}