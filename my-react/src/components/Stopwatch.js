import React, { Component } from 'react';

class Stopwatch extends Component {
   
    state = {
        isRunning: false
    }

    handleStopwatch = () => {
        this.setState({
            isRunning: !this.state.isRunning
        })
    }
    render() {
      
        return (
            <div className="stopwatch">
                <span className="stopwatch-time">0</span>
                <h2>Stopwatch</h2>
                <button onClick={this.handleStopwatch}>
                    { this.state.isRunning ? 'Stop': 'Start' }
                </button>
                <button>Reset</button>

            </div>
        )
    }

}

export default Stopwatch