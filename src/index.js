import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//****Crear elms en un com */
function AppVanilla() {
  return (
    React.createElement(
      'h1',
      {id: 'title'},
      'Oli React'
    )
  )
}

function AppJsx() {
  return (
    <h1 id='title'>
      Oli React
    </h1>
  )
}

//**** E.g.s HOC's*/

//----componente
function App(props) {
  return (
    <h1>  {props.saludo}, {props.name}</h1>
  )
}

//---declaro HOC
function withSaludo(WrappedComponent) {

  return function WrappedComponentWithSaludo (saludo) {

    return function ComponenteReal(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p> Estamos acompañando al Wrapped componente</p>
        </React.Fragment>
      )
    }
  }
}

//---instancio HOC y mando especial props

const AppWithSaludo = withSaludo(App)('Buenas')


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // --rendedizar, es el 'ultimo' llamado, mando props
    <AppWithSaludo name = 'Nicole'/>
    //<App saludo='oli'/>

    // <App saludo='oli'>
    //   Holaa
    // </App>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

