import React from 'react';

// Saluer un User
function UserGreeting(props){
    return <h1>Greetings my bro</h1>;
}

// Saluer un visiteur
function GuestGreeting(props){
    return <h1>Don't forget to subscribe b*tch !</h1>;
}

// Dire bjr en fonction du status de la personne
function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

//Boutton de connexion, execute onClick passé en parametre par le pere
function LoginButton(props){
    return(
        <button onClick = {props.onClick}>
            Login
        </button>
    );
}

//Boutton de deconnexion, execute onClick passé en parametre par le pere
function LogoutButton(props){
    return(
        <button onClick ={props.onClick}>
            Logout
        </button>
    );
}



class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn: false
        }
        // Bind passe le 'contexte' du pere au fils, pour que ce soit tjr fonctionnel. ReactJs herite cele de JS
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        this.setState({
            isLoggedIn: true
        })
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn: false
        })
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn)
            button = <LogoutButton onClick = {this.handleLogoutClick} />
        else
            button = <LoginButton onClick = {this.handleLoginClick} />


        return(
            <div>
                <Greeting isLoggedIn = {isLoggedIn} />
                {button}
            </div>
        );
    }
}
export default Login;