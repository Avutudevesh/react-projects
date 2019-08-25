//Import the react and reactDOM PROPERTIES
import React from 'react';
import ReactDom from 'react-dom';
//Create react components

const App = () => {
    const buttonText = 'Click Me!';
    const labelText = 'Enter Name:'
    return (
    <div>
    <label htmlFor="name" className="label">{labelText}</label>
    <input id="name"/>
    <button id="button" style={{backgroundColor:'red'}}>{buttonText}</button>
    </div>
    )
}; 

//show react component on screen
ReactDom.render(
    <App />, 
    document.querySelector('#root')
);