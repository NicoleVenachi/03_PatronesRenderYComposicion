import React from "react";

function useStorageListener({sincronize}) {
    
    //croe estado
    const [storageChage, setStorageChange] = React.useState(false)

    //agrego evento
    window.addEventListener('storage', (change) => {
        if (change.key === 'TODOS_V1') {
            //si cambia en storage el objeto TODOS_V!
            console.log('Hubo cambios');
            setStorageChange(true)
        } else {
            
        }

    })

    //funcion con toggle para apagar cambios en storge con setter
    const toggleShow = () => {
        setStorageChange(false)
        //ademas, activo sincronización
        sincronize();
    }
    
    return {
        show : storageChage,
        toggleShow : toggleShow
    }
    
}


export {useStorageListener}