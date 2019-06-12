import React from 'react';

// creation d'une classe voiture
// extends : on hérite de la classe Component définie dans react
class Voiture extends React.Component{
    //attributs

    //methodes
    constructor(){
        super(); // il prend le comportement du parent, execution du constructor qui est defini ddans React.Component


}

  render(){
        return <h2>Coucou, je suis la hmmmmmm de couleur {this.props.color}, de couleur {this.props.brand}, appartennant à {this.props.owner}, et la plaque {this.props.id}</h2>  
    }
}

export default Voiture;