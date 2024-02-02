import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));


const initialState = 0;
const reducer = (state = initialState, action) => {

    //  return {
    //     name:"Hamz",
    //     age: 19,
    //     city: 'Groz',
    //   }
    switch(action.type){
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
    return state
    // if(action.type === 'PLUS'){
    //     return state + 1
    // }
    // if(action.type === 'MINUS'){
    //     return state - 1
    // }
    // if(action.type === 'RESET'){
    //     return 0
    // }
}   

const store = createStore(reducer)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
