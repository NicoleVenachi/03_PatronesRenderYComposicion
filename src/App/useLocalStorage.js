import React from 'react'

function useLocalStorage(itemName, initialValue) {

    //*****Estados
    const [item, setItem] = React.useState(initialValue);

    //empiezo loading como true y error como false
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    // ******** USE Efect para leer daat de Bend
    React.useEffect(() =>{
        setTimeout(() => {
        
        try {
            // **** Local persistence, READ
            //leo los datos
            const localStorageItem = localStorage.getItem(itemName);
            let parserdItem;

            if (!localStorageItem) {
            //si está nulo, creo tareas como vacío
            
            //creo los datos en local storage como arrayisvacíos
            //no siempre guardo arrays, por eso pongo initial Value
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parserdItem = initialValue;

            } else {
            //los parseo
            parserdItem = JSON.parse(localStorageItem)
            }

            setItem(parserdItem);
            setLoading(false)
            
        } catch (err) {
            setError(err)
        }
        }, 2000);
    })


    //***** Local persisntence, SAVVE*/
    //guarda y atualiza el estado
    const saveItem = (newItem) => {
        try {
        const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
        } catch (err) {
        setError(err)
        }
        
    }

    // ***Return
    return {
        item,
        saveItem,
        loading,
        error
    }
}
  
export {useLocalStorage}