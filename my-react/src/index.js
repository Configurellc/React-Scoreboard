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

const players = [
    {
        name: "Guil",
        score: 50,
        id: 1
      },
      {
        name: "Treasure",
        score: 85,
        id: 2
      },
      {
        name: "Ashley",
        score: 95,
        id: 3
      },
      {
        name: "James",
        score: 80,
        id: 4
      }
]

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

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" 
            totalPlayers={props.initalPlayers.length}        
            />

            {/*Players list*/}
            {props.initalPlayers.map( player =>
                <Player 
                playerName={player.name} 
                counterScore={player.score} 
                key={player.id.toString()}
    
                />
            )}

        </div>
    )
}

ReactDOM.render(
    <App initalPlayers={players}/>,
    document.getElementById('root')
)