import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
const [todos, setTodos] = useState ([])

const addTodo = todo => {
    
    if (!todo.text || /^\s*$/.test(todo.text)){
        return;
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    // console.log(...todos);
}

const removeTodo = id  =>{
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr)
};

 
    return (
        <div>
            <h1>ToDo List</h1>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <Todo
            todos={todos} 
            removeTodo={removeTodo}
            ></Todo>
        </div>
    );
}

export default TodoList
