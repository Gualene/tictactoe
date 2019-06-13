import React from 'react';

function Mailbox(props){
    const messageNonLus = props.messageNonLus
    return(
        <div>
            <h1>Hello</h1>
            {messageNonLus.length > 0 && 
                <h2>
                    Vous avez {messageNonLus.length} messages non lus.
                </h2>
            }
        </div>
    );
}

export default Mailbox;