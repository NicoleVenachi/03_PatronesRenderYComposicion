//import './App.css';
import React from 'react'

import { useTodos } from './useTodos';

import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';



import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

import {TodoHeader} from '../TodoHeader';


function App(props) {
  //traigo elementos del estado
  const {
    error, 
    loading, 
    searchedTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    
    totalTodos, 
    completedTodos,

    searchValue, 
    setSearchState,

    addTodo
  } = useTodos()

  return (
      <React.Fragment>
          
          <TodoHeader>
              <TodoCounter
                  totalTodos = {totalTodos}
                  completedTodos = {completedTodos}
              />
              
              <TodoSearch
                  searchValue = {searchValue}
                  setSearchState = {setSearchState}
              />
          </TodoHeader>
          
          <TodoList>

              {error && <TodosError />}
              {loading && <TodosLoading />}
              {//sino está cargando, y ya traje la lista
                  (!loading && !searchedTodos.length) && <EmptyTodos />
              }

              {/* list searched todos */}
              {searchedTodos.map(todo => (
                  <TodoItem 
                      key={todo.text} 
                      text={todo.text}
                      completed={todo.completed}
                      onComplete = {() => completeTodo(todo.text)}
                      onDelete = { () => deleteTodo(todo.text)}
                  />
              )
              )} 
          </TodoList>

          <CreateTodoButton
              setOpenModal= {setOpenModal}
          />
          
          {
              // si es true, renderiza el modal
              !!openModal && (
                  <Modal>
                    <TodoForm
                      addTodo = {addTodo}
                      setOpenModal = {setOpenModal}
                    />
                  </Modal>
              )
          }
      </React.Fragment>
  );
  
}

export default App;

// function App() {

//   const [state, setState] = React.useState('Initial State')
//   return (
//     <React.Fragment>
//       <TodoHeader>

//         <TodoCounter/>

//         <TodoSearch/>

//       </TodoHeader>


//       <TodoList>

//         <TodoItem state={state}/>

//       </TodoList>
//     </React.Fragment>
//   )
  
// }

// function TodoHeader({children}) {
//   return (
//     <header>
//       {children}

//     </header>
//   )
// }

// function TodoList({children}) {
//   return(
//     <section className='TodoList-container'>
//       {children}
//     </section>
//   )
// }

// function TodoCounter() {
//   return <p> TodoCounter </p>
// }

// function TodoSearch() {
//   return <p> TodoSearch </p>
// }

// function TodoItem({state}) {
//   return <p> TodoItem: {state}  </p>
// }