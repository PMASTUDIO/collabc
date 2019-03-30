import React from 'react'

export default class HomePage extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            [<header key="header">
                <img className="responsiveLogo" src="./images/Logo.png"></img>
            </header>,
            <main key="main">
                <div className="mid-content">
                    p
                </div>
            </main>]
        );
    }
}
