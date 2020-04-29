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


=============================================================


reactBasics7-Classes and states

class Counter extends React.Component {
{/* This is an alternative way to use state with the contructor and super due to it being compatiable with browsers 
    but because we are using babel to compile our code we can use the method that is being used because it compiles to the same output
    *************************  
     constructor() {
        super()
        this.state = {
            score: 0
        }

    } 
    **************************
*/}

incrementScore() {
    console.log( 'hi from inside the score counter' );
}

state = {
            score: 0
        }  
    render() {
        return (
                <div className="counter">
                    <button className="counter-action decrement">-</button>
                    <span className="counter-score">{this.state.score}</span>
                    <button className="counter-action increment" onClick={this.incrementScore}>+</button>
                </div>
            )

    }
    
}
=====================================================================

reactBasics7-ClasesandStaes

class Counter extends React.Component {

********************
In this example incrementScore is setup as a mehtod, because of this when we use our onClick call  to increment React throws an Error because "this" is undefined, if we use this format in order to access "this" component on our onClick call we will need to bind this back to the counter component using the code :

onclick={this.incrementScore.bind(this)}
            or
onclick={() => this.incrementScore()}   ///this works because fat arrows use lexical this binding which means it automatically binds it inside the scope its defined
**********************
We can also rewrite the incrementScore method used in the example by making it a fat arrow function automically binding it to the component instance causing us not to change the 
syntax in the onClick function at all:

incrementSocre = () => {
    this.setState({
        score: this.state.score +1
    });
}
*************************


incrementScore() {
    this.setState( {
        score: this.state.score +1
    });
}

state = {
            score: 0
        }  
    render() {
        return (
                <div className="counter">
                    <button className="counter-action decrement">-</button>
                    <span className="counter-score">{this.state.score}</span>
                    <button className="counter-action increment" onClick={this.incrementScore}>+</button> //Line which contains onClick funciton
                </div>
            )

    }
    
}