import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, {
                id: Date.now(),
                text: inputValue,
                completed: false
            }]);
            setInputValue('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return (
        <div className="todo-section">
            <div className="todo-container">
                <h2>My Todo List</h2>

                <div className="todo-stats">
                    <span>{completedCount} of {totalCount} tasks completed</span>
                </div>

                <div className="todo-input-section">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a new task..."
                        className="todo-input"
                    />
                    <button onClick={addTodo} className="add-btn">
                        Add Task
                    </button>
                </div>

                <div className="todo-list">
                    {todos.length === 0 ? (
                        <p className="empty-state">No tasks yet. Add one above to get started!</p>
                    ) : (
                        todos.map(todo => (
                            <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className="todo-checkbox"
                                />
                                <span className="todo-text">{todo.text}</span>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="delete-btn"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default TodoList;
