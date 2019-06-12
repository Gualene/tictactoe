import React from 'react';
import Board from './Board';

class Game extends React.Component{

    constructor(props){
        super(props);
        this.state={
            history: [{squares: Array(9).fill(null)}],
            xIsNext: true,
            stepNumber: 0,
        }
    }

    // Fonction qui va permettre d'aller a l'etape du jeu souhaiter ---> permet de voyager dans le temps.
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber +1);

        const current = history[history.length - 1];

        const squares_copy = current.squares.slice();

        if(calculateWinner(squares_copy) || squares_copy[i]){
            return;
        }
        squares_copy[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares_copy,
            }]),
            xIsNext : !this.state.xIsNext,
        });
    }

    render(){
        const history = this.state.history

        // Current contient l'etat actuel
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        // moves contient les different coups de chaque joueur.
        const moves = history.map((step, move) =>{
            const desc = move ? 'Aller a letape #' + move : 'Aller a la situation initiale';
            // 'desc' contient la description a afficher a l'ecran sur le boutton a enclancher pour voyager dans le temps. Chaque appuie demande l'etat du Board au numero de move demandé.
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status; //declaration de la variable status
        if(winner)
            status='le gagant est : '+ winner;
        else
            status='Prochain joueur : '+(this.state.xIsNext ? 'X': 'O');
        

        return (
            <div className='game'>
                <div className ='game-board'>
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i) } />
                </div>
                <div className ='game-info'>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

export default Game;