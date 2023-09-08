import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

export default App;

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>

    )
}

function Star() {
    return (
        <div>star</div>
    )
}

function AppTitle() {
    return <>This is App component</>
}

function Accordion() {
    return (
        <>
            <AccordionTitle/>
            <AccordionBody/>
        </>
    )
}

function AccordionTitle() {
    return (
        <div>
            Menu
        </div>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}
