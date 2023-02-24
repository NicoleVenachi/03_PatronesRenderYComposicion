import React from 'react'

function useLocalStorage(itemName, initialValue) {

    //*****Estados
    const [item, setItem] = React.useState(initialValue);

    //estado para sincrinizar el valor del localStorage
    //sicronizados con todaas las pestañas del navegador
    const [sicronizedItem, setSincronizedItem] = React.useState(true)

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


            ///si sale bien, estoy sincro
            setSincronizedItem(true)
            
        } catch (err) {
            setError(err)
        }
        }, 2000);

        //sino estoy sincronizado carga de nuevo la data del local
        //re renderizando toda la app, todos los compnentes del padre
    }, [sicronizedItem])


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

    //creo funcion para activar sincronizacion
    const sincronizeItem = () => {
        //rengo que hacer loading de nuevo
        setLoading(true)
        // y que se ponga como sincronizado
        setSincronizedItem(false)
    }

    // ***Return
    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem
    }
}
  
export {useLocalStorage}