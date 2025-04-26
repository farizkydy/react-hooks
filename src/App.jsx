import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Load data dari localStorage saat pertama kali render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Simpan ke localStorage setiap kali todos berubah
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, input]);
    setInput('');
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambahkan to-do"
      />
      <button onClick={handleAddTodo}>Tambah</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => handleRemoveTodo(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
