import React from 'react';

class Clock extends React.Component{

    // Premiere fonction qui s'execute pour creer le composant
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    render(){
        return(
            <div>
                <h1>Heure locale</h1>
                <h2>Il est actuellement{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }

    // Une fois que l'affichage render a lieu la fonction suivante s'execute directement
    //componentDidMoiunt = le composant vient de se mettre en place
    componentDidMount(){

        this.timerID = setInterval(() =>this.tictac(), 1000)

    }

    //Fonction qui va mettre a jour la date dans l'etat (this.state.date)
    tictac(){
        this.setState({
            date: new Date()
        });
    }

    // Juste avant de finir le LifeCycle et de quitter le composant on efface le contenu de l'intervalle de temps
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

}

export default Clock;