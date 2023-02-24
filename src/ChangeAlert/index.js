import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css'

//function ChangeAlert({show, toggleShow}) {

function ChangeAlert({sincronize}) {
    
    const {show, toggleShow} = useStorageListener(sincronize);
    if(show){
        return (
            <div className="ChangeAlert-bg">
                <div className='ChangeAlert-container'>
                    <p> It seems like you've change your TODO's on any other windo screen </p>
                    <p> Would you like to sync them again? </p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        ///si le hacen click, cambio el setter
                        onClick={toggleShow}
                    > Refresh the info </button>
                </div>
                
            </div>
        )
    }
    else {
        return null
    }
    
}

//const ChangeAlertwithStorageListener = withStorageListener(ChangeAlert)
//export {ChangeAlertwithStorageListener}

export {ChangeAlert}