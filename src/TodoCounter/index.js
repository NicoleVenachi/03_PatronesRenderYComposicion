import React from 'react'

//import { TodoContext } from '../TodoContext'
import './TodoCounter.css'


const estilos = {
    color: 'red',
    backgroundColor: 'yellow'
}

function TodoCounter({totalTodos, completedTodos } ) { 
    //traigo elementos del estado
    // const {totalTodos, completedTodos } = React.useContext(TodoContext)

    return (
        // <h2 style={estilos}> Has completado 2 de 3 TODO's </h2>
        <h2 className='TodoCounter'> You've completed {completedTodos} out of {totalTodos} TODO's </h2>
    )
}

export {TodoCounter};