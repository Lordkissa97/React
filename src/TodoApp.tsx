import React, { useState } from 'react';
import './Todo.css';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now().toString(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Gjøremål</h1>
      <div className="todo-input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          className="todo-input"
          placeholder="Legg til Gjøremål"
        />
        <button onClick={addTodo} className="todo-button">Legg til</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="todo-checkbox"
            />
            <span className={todo.completed ? 'todo-text completed' : 'todo-text'}>
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)} className="todo-remove-button">Fjern</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;