import React, { useState } from 'react'
import { IoMdAddCircle } from "react-icons/io";
import './Todo.css';
import { MdDeleteForever } from "react-icons/md";
const Todo = () => {
    const [input,setInput] = useState('');
    const [todo,setTodo] = useState([]);
    function handleOnChange(event){
        setInput(event.target.value);
    }
    function todoApp(){
        if(input!==''){
            setTodo([...todo, input]);
            console.log(todo);
            setInput("");
        }

    }
    function handleOnDlt(i){
        const updateTodo = todo.filter((elem, id) => {
            return i!==id;
        })
        setTodo(updateTodo);

    }
  return (
    <div className='container'>
        <div className='input'>
            <input onChange={handleOnChange} value={input} type='text' placeholder='Enter Your Task'></input>
            <button className='add-btn' onClick={() => todoApp()}>
                <IoMdAddCircle />
            </button>
        </div>
        { todo.length !== 0 && todo.map((data, i)  =>{
            return (
                <div className='list-container' key={i}>
                    <div className='list-item'>
                        {data}
                    </div>
                    <div className='dlt-btn' onClick={() => handleOnDlt(i)}>
                    <MdDeleteForever />

                    </div>        
                </div>
            ) 
        })
            
        }

    </div>
  )
}

export default Todo
