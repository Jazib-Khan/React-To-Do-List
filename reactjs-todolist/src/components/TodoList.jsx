import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {

    let todos = [
        'Go to the gym',
        'Eat more fruits and veg',
        'Pick up the kid from school'
    ] // An array of todo items

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex} todo={todo} > 
                        <p>{todo}</p>
                    </TodoCard>
                        
                )
            })}
        </ul>
    )
}
