import React, {useState} from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if(inputValue.trim() !== ''){
            setTodos([...todos, {task: inputValue, completed: false}]);
            setInputValue('');
        };
    };

    const toggleTodo = (index) => {
        const updateTodos = [...todos];
        updateTodos[index].completed = !updateTodos.completed;
        setTodos(updateTodos);
    };

    const handleTodoClick = (index) => {
        toggleTodo(index);
    };

    
    return(
        <div>
            <input type="text"
            placeholder='Введіть нову задачу'
            value={inputValue}
            onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Додати задачу</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}
                    onClick={() => handleTodoClick(index)}
                    style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.task}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
