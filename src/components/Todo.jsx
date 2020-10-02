import React, {useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'


function Todo({todos, removeTodo}) {
    const [edit, setEdit] = useState ({
        id: null,
        value: ''
    })
    return todos.map((todo,index) => (
        <div className="todo-row"
        key={index}>
            <div key={todo.id} 
            // onClick={()=> completeTodo(todo.id)}
>
                {todo.text}
            </div >
            <div className="icons">
                <RiCloseCircleLine 
                onClick={()=> removeTodo(todo.id)}
                className='delete-icon'
                ></RiCloseCircleLine>
            </div>
        </div>
    ));
}

export default Todo
