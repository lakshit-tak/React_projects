import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {

    const [task, setTask] = useState("");

    const [todos, setTodos] = useState(() => {

        const savedTodos = localStorage.getItem("todos");

        return savedTodos ? JSON.parse(savedTodos) : [];

    });

    const [filter, setFilter] = useState("all");

    useEffect(() => {

        localStorage.setItem("todos", JSON.stringify(todos));

    }, [todos]);

    function handleChange(e) {

        setTask(e.target.value);

    }

    function addTodo() {

        if (task.trim() === "") {
            return;
        }

        const newTodo = {

            id: Date.now(),
            text: task,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setTask("");

    }

    function handleKeyDown(e) {

        if (e.key === "Enter") {
            addTodo()
        }
    }

    function deleteTodo(id) {

        const newTodos = todos.filter((todo) => {

            return todo.id !== id;
        });

        setTodos(newTodos);
    }

    function toggleTodo(id) {

        const newTodos = todos.map((todo) => {
            if (todo.id === id) {

                return { ...todo, completed: !todo.completed };

            }

            return todo;
        });

        setTodos(newTodos);
    }

    function editTodo(id) {

        const newText = prompt("Edit your task");

        if (newText === null || newText.trim() === "") {
            return;
        }

        const newTodos = todos.map((todo) => {

            if (todo.id === id) {

                return {
                    ...todo, text: newText
                };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const filterdTodos = todos.filter((todo) => {

        if (filter === "completed") {

            return todo.completed === true;
        }

        if (filter === "pending") {

            return todo.completed === false;
        }

        return true;
    });

    return (
        <div className="container">

            <h1>Todo List </h1>

            <TodoForm
                task={task}
                handleChange={handleChange}
                handleKeyDown={handleKeyDown}
                addTodo={addTodo}
            />

            <div>
                <button onClick={() => setFilter("all")}>
                    All
                </button>

                <button onClick={() => setFilter("completed")}>
                    Completed
                </button>

                <button onClick={() => setFilter("pending")}>
                    Pending
                </button>

            </div>

            <TodoList
                todos={filterdTodos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            />
        </div>
    );
}

export default App;