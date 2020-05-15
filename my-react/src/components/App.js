import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';


class App extends Component {
    state = {
        players: [
            {
                name: "Guil",
                id: 1,
                score: 0
              },
              {
                name: "Treasure",
                id: 2,
                score: 0
              },
              {
                name: "Ashley",
                id: 3,
                score: 0
              },
              {
                name: "James",
                id: 4,
                score: 0
              }
        ]
    }

    handleScorechange = (index, delta) => {
    
        this.setState( prevState => {
            const updatedPlayers = [...prevState.players];
            const updatedPlayer = {...updatedPlayers[index]};

            updatedPlayer.score += delta;
            updatedPlayers[index] = updatedPlayer;
            return {
                /* Due to updating the state directly this code was refactored to the below statement- score: prevState.players[index].score += delta */
                players: updatedPlayers
            }
        });
    }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(player => player.id !== id)
            }
        })
    }
    
    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" 
                totalPlayers={this.state.players.length}        
                />

                {/*Players list*/}
                {this.state.players.map( (player, index) =>
                    <Player 
                    playerName={player.name} 
                    score={player.score}
                    id={player.id}
                    key={player.id.toString()}
                    index={index}
                    changeScore={this.handleScorechange}
                    removePlayer={this.handleRemovePlayer}
                    />
                )}

            </div>
        )

    }


}

export default App;