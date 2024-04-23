import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Heading = () =>{
    return(<h1> Hello from react </h1>)
    
};
root.render(<Heading />);