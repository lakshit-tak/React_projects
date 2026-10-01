function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {

  return (

    <ul>

      {todos.map((todo) => (

        <li key={todo.id}>

          <span onClick={() => toggleTodo(todo.id)}
            style={todo.completed ? { textDecoration: "line-through", color: "grey" }
              : { textDecoration: "none", color: "black" }}
          >
            {todo.text}
          </span>

          <div>
            <button onClick={() => editTodo(todo.id)}>
              Edit
            </button>

            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>

        </li>
      ))}

    </ul>
  );
}

export default TodoList;