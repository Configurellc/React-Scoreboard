import React from 'react';
import Stats from './stats';

const Header = (props) => {
    console.log(props )
    return (
        <header>
            <Stats 
                players={props.players}
            />
            <h1>{props.title}</h1>
        </header>
    );
}

export default Header;