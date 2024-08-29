import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { CreateTodo } from './CreateTodo';
import { Todo } from './Todo';

function App() {
  // const [render,setRender] = useState(false)
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3002/todos")
  //     .then(async res => {
  //       if (!res.ok) {
  //         throw new Error(`HTTP error! Status: ${res.status}`);
  //       }
  //       const json = await res.json();
  //       setTodos(json.todos); // Assuming the response structure is { todos: [...] }
  //     })
  //     .catch(err => console.error("Failed to fetch todos:", err));
  // }, [render]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<CreateTodo />} />
          <Route path='/todos' element={<Todo />} /> {/* Passing todos as a prop */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
