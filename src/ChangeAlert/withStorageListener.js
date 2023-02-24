import React from "react";

function withStorageListener(WrappedComponent) {
    //aquí voy a  darle a pasarle props
    // de cambios en el storage y su setter

    return function WrappedComponenteWithStorageListener(props) {

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
            props.sincronize();
        }
        
        return (
            <WrappedComponent 
                {...props}

                //reibe el stograChange y su setter
                show={storageChage}
                toggleShow = {toggleShow}
            />
        )
    }
}


export {withStorageListener}