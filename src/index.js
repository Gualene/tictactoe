import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game';
import Garage from'./Garage';
import * as serviceWorker from './serviceWorker';
import Tick from './Tick';
import Clock from './Clock';
import Toggle from './Toggle';
import Login from './Login';
import Mailbox from './Mailbox';
import Liste from './Liste';

// function Tick2(){

//     const element=(
//         <div>
//             <h1>Heure locale</h1>
//             <h2>Il est actuellement{new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('popo2'));
// }

// //appelle de la fonction Tick2 chaque seconde
// setInterval(Tick2, 1000);


ReactDOM.render(<Login />, document.getElementById('root2'));
ReactDOM.render(<Game />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('popo'));
// ReactDOM.render(<Toggle />, document.getElementById('popo2'));
const numbers = [4,9,3,8,2];
ReactDOM.render(<Liste numbers = {numbers} />, document.getElementById('popo3'));


const messages = ['coucou jespere que tu passe une bonne journée', 're ca va', 'Aller ciao']

ReactDOM.render(<Mailbox messageNonLus={messages}/>, document.getElementById('popo2'));
// Ci dessous une maniere d'appeler un composant a partir d'une fonction 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();