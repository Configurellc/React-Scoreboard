import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';


const title = React.createElement(
    'h1',
    {id: 'main-title', title:"THis is a title."},
    'My First React Element'
);

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a react node and render it into the DOM.'
);

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
)