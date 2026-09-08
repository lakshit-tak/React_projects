function TodoForm({task, handleChange, handleKeyDown, addTodo}) {

    return (

        <div>
            <input type="text" value={task} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Enter a Task"/>

            <button type="button" onClick={addTodo}>
                Add
            </button>

         </div>
    );
}

export default TodoForm;