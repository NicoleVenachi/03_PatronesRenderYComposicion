import React from 'react'

//import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

function TodoSearch({searchValue, setSearchState}) {

    //const {searchValue, setSearchState} = React.useContext(TodoContext)
    
    const onSearchValueChange = (event) => {
        setSearchState(event.target.value)
        console.log(searchValue);
    }

    return (
        <input 
            className='TodoSearch' 
            placeholder="Search any todo..."
            value = {searchValue}
            onChange={onSearchValueChange}
        />
        
    );
}

export {TodoSearch}