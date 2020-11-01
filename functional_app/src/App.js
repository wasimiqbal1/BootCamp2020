import React, { useState } from 'react';
import { Message } from './Message.js'
import './App.css';

export default function App() {

    let [count, setCount] = useState(0)


    return ( <
        div >

        <
        Message counter = { count } > < /Message> <
        br / >
        <
        button onClick = {
            () => setCount(++count)
        } > Update Counter < /button> < /
        div >
    );
}