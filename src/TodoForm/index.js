import React from "react";
import './ToDoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
    
    //***** Creo estado local, para tomar texto */
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    //siempre almaceno el texto escrito
    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }
    // ****traigo estado para agregartodos y para cerrar modal

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        //evito hacer reload al  darle submit
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    return (

        <form onSubmit={onSubmit}>
            <label></label>
            <textarea
                value={newTodoValue}
                onChange = {onChange}
                placeholder="Write your todo"
            />

            <div>
                <button
                    type="button"
                    onClick={onCancel}
                > Cancelar </button>

                <button
                    type="submit"
                > Añadir </button>
            </div>
        </form>

    )
}

export {TodoForm}