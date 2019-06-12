import React from 'react';
import Voiture from './Voiture';

class Garage extends React.Component{

    //Attributs


    //methods
    render(){
        const voit = {color:"grise", brand:"Peugeot", owner:"none", id:"WWWWWW"}
        // On ouvre les parenthese pour y injecter de l'HTML via l'annotation JSX - Javascript Xml et ensuite on execute la logique du code dans {}
        //On defini le contenu HTML affichable a l'appel de la balise <Garage> dans l'index.js
        return(
            <div>
                <h1>Quelles sont les voitures que j'ai dans mon garage ?</h1>
                <Voiture color = 'verte' brand = 'Mustang' owner = 'Youva' id="PQ 75A2" /><br />
                <Voiture color = 'bleue' brand = 'Citroen' owner = 'Tom' id="PQ75A2" /><br />
                <Voiture color = 'rouge' brand = 'Peugeot' owner = 'Camille' id="PQ75A2" /><br />     
                <Voiture color = 'jaune' brand = 'Audi' owner = 'Axel' id="PQ75A2" /><br />    
                <Voiture color = 'violet' brand = 'Ford' owner = 'Brian' id="PQ75A2" /><br />
                <Voiture color={voit.color} brand={voit.brand} owner={voit.owner} id={voit.id} />
                </div>   
        );
    }
}

export default Garage;