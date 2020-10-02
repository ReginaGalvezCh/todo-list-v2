import React, { useState, useEffect, useRef } from 'react'


function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }


    const stopDefault = e => {
        e.preventDefault();

        props.onSubmit({
            id:Date.now(),
            text: input
        });

    };


    return (
        <div >
            <form className="todo-form" onSubmit={stopDefault}>
                <input type='text'
                placeholder='Add a task'
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
                ></input>
                <button className="todo-buttom"> Add</button>
            </form>
        </div>
    );
}

export default TodoForm
