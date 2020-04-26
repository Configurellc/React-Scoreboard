import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';


{/*A way to create a component without using fat arrow functinons

    function Header() {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
};

*/}
const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}



ReactDOM.render(
    <Header />,
    document.getElementById('root')
)