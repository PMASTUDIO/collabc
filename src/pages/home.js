import React from 'react'

export default class HomePage extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            [<header key="header">
                <h1>Collabc</h1>
            </header>,
            <main key="main">
                <div className="mid-content">
                    p
                </div>
            </main>]
        );
    }
}
