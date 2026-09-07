import {useState} from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

    const [todos, setTodos] = useState([]);

    function addTodo(text) {

        const newTodo = {

            id: Date.now(),

            text: text,

            completed: false

        };

        setTodos([...todos, newTodo]);

    }

    function deleteTodo(id) {

        setTodos(todos.filter((todo) => todo.id !== id));

    }

    function toggleTodo(id) {

        setTodos(todos.map((todo) => 
            
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
     );
    }

    return (

        <div className = "container">

            <h1>Todo List </h1>

            <TodoForm addTodo = {addTodo} />

            <TodoList 
              todos={todos}
              deleteTodo = {deleteTodo}
              toggleTodo = {toggleTodo}

              />

              </div>

    );
}

export default App;