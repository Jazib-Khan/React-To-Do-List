import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index} = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    props.handleEditTodo(index)
                }}><i className="fa-solid fa-pen-to-square"></i></button>

                <button onClick={() => {
                    handleDeleteTodo(props.index)
                }}><i className="fa-regular fa-trash-can"></i></button>
            </div>
        </li>
    )
}
