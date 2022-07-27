import { useState } from 'react';
import './App.css';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

function App() {

  const [todos, setTodos] = useState([]);

  const handleAddTodos = () => {
    setTodos(todos);
  }

  function handleCreateTask() {
    return (
      <div></div>
    )
  }
  return (
    <div className="App">
      <Header countTasks={todos.length} />
      <Main el={todos} handleAddTodos={handleAddTodos}/>
      <Footer />
    </div>
  );
}

export default App;
