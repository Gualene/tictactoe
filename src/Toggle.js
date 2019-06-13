import React from 'react';

// Lorsque j'appuie sur le boutton Toggle il y a un like du commentaire. Sinon c'est un dislike
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={like: false};
        //On va lier la fonction handleClick avec le 'this' pour ne pas a avoir repeter sans cesse
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({like: !state.like}));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.like ? 'Like é_è' : 'Dislike è_é'}
            </button>
        );
    }

}

export default Toggle;