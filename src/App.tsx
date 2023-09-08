import React from 'react';
import './App.css';
import Accordion from "./componets/Accordion/Accordion";
import {Rating} from "./componets/Rating/Rating";

function App() {
    return (
        <div>
            <AppTitle title = {"This is App component"}/>
            <AppTitle title = {"My friends"}/>
            <Rating value={3}/>
            <Accordion title = {"Menu"}/>
            <Accordion title = {"Guest"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;

function AppTitle(props: any) {
    return <h1>{props.title}</h1>
}


