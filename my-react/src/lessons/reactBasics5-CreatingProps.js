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
const Header = (props) => {
    console.log(props )
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.playerName}
            </span>    
        <Counter counterScore={props.counterScore} />
        </div>
    )
}

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <span className="counter-score">{props.counterScore}</span>
            <button className="counter-action increment">+</button>
        </div>
    )
}

const App = () => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" 
            totalPlayers={4}        
            />

            {/*Players list*/}
            <Player playerName="Joshua" counterScore={38} />
            <Player playerName="Jamil" counterScore={32} />
            <Player playerName="Gabriel" counterScore={60} />
            <Player playerName="Journey" counterScore={60} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)