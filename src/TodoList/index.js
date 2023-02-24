import React from 'react'
import './TodoList.css'
  
function TodoList(props) {

    const renderFunc = props.children || props.render
    return (
        <section className='TodoList-container'>
            {props.error && props.onError()}

            {props.loading && props.onLoading()}

            { //sino eta cargando y si no busco nada (null)
                (!props.loading && !props.totalTodos) && props.onEmptyTodos()
            }

            {
                //renderizado del contenido habitual
                //recorre todos los elemenots buscados y los muestra
                
                //por cada elemnto llama esa funcion, sino hay errores y sino estoy cargando
                (!props.loading && !props.error) && props.searchedTodos.map(renderFunc)
            }

            {
                //sino se encuentra nada, muestro emptySearch

                //prregunto si hay todos y si algo se está buscado,
                //pero eso no existe, muestro que eso no esxite
                (!!props.totalTodos && !props.searchedTodos.length) && props.OnEmptySearchResults(props.searchText)

            }


        </section>
              
    )
}

export {TodoList}