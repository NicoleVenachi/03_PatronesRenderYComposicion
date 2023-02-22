//import './App.css';
import React from 'react';
import {useLocalStorage} from "./useLocalStorage";

const defaultTodos = [
    {text: 'Run under the rain', completed: true},
    {text: 'Take a japanese introductory course', completed: false},
    {text: 'Read any Lord of the rings book', completed: false},
]


function useTodos(props) {
    // ****** Creo todos (u otro item a almacenar) y setSave
    const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error

    } = useLocalStorage('TODOS_V1', []);
    // le paso el nombre del elemento a almacenar y su estructura de datos (vacia o inicail)

    //*** Otros EStados */

    const [searchValue, setSearchState] = React.useState('');

    const [openModal, setOpenModal] = React.useState(false)

    // *****Cuantos y toatal de Todos
    const completedTodos = todos.filter((todo) => todo.completed === true).length;
    const totalTodos = todos.length;

    // ******filtarr todos
    let searchedTodos = [];

    if (!searchValue.length >= 1) {
    //if is there's not any serched element, we do receive the entire list
    searchedTodos = todos;
    } 
    else {
    //lets look for the received todos
    searchedTodos = todos.filter((todo) => {
        // toodo's lowercase text 
        const todoText = todo.text.toLowerCase()

        //searched todo text
        const searchText = searchValue.toLocaleLowerCase();

        //lets compre todo's with the serached text
        // returns these todos
        return todoText.includes(searchText);

    })

    }


    //******** Complete todo's */
    //funcion para cambiar estado del todo a true
    //usa el texto como id
    const completeTodo = (text) =>{
        //returns index of todos with this text/id
        const todoIndex = todos.findIndex(todo => todo.text === text)

        //copio la antigua lista d e todos, los seteo en true y actualizo
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos)
    }

    //******** Delete todo's */
    //funcion para eliminar un elemento
    //usa el texto como id
    const deleteTodo = (text) =>{
        //returns index of todos with this text/id
        const todoIndex = todos.findIndex(todo => todo.text === text)

        //copio la antigua lista d e todos, los seteo en true y actualizo
        const newTodos = [...todos];

        //corto lo que no quiero, y solo 1 posicion
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos)
    }

    //******** Add todo's */
    const addTodo = (text) =>{
        
        //copio la antigua lista d e todos, los seteo en true y actualizo
        const newTodos = [...todos];

        //le mando nuevo todo
        newTodos.push ({
            completed:false,
            text: text
        })

        saveTodos(newTodos)
    }

    // ********Use eddect
    // console.log('Renden previo a useEffect');

    // //re-renderizar al aumentar el tamaño de la lista
    // React.useEffect(() =>{
    //   console.log('Use effect');
    // }, [totalTodos])

    // console.log('Renden tras useEffect');

    return {
        loading,
        error,

        totalTodos,
        completedTodos,

        searchValue,
        setSearchState,

        searchedTodos,

        completeTodo,
        deleteTodo,
        addTodo,
        
        openModal,
        setOpenModal,

    }
            
}

export {useTodos}