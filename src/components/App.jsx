import { useState } from 'react';
import '../styles/App.scss';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

function App() {

  const [todos, setTodos] = useState([]);

  const handleAddTodos = (userInput) => {
    if (userInput) {
      const newTask = {
        id: Math.random(),
        task: userInput,
        complete: false,
      }
      setTodos([newTask, ...todos]);
    }
  }

  const handleRemoveTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  const handleToggleTodo = (id) => {
    setTodos([
      ...todos.map((todo) => 
      todo.id === id ? {...todo, complete: !todo.complete } : {...todo }
    )])
  }

  return (
    <div className="App">
      <Header countTasks={todos.length} />
      <Main
        tasks={todos}
        handleAddTodos={handleAddTodos}
        handleToggleTodo={handleToggleTodo}
        handleRemoveTodo={handleRemoveTodo}
      />
      <Footer />
    </div>
  );
}

export default App