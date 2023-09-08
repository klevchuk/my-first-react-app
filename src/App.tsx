import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <h3>This is App component</h3>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
}

export default App;

function Star() {
    return (
        <div>star</div>
    )
}
