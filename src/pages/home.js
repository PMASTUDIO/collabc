import React from 'react'

export default class HomePage extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            [<header key="header">
                <img className="img-fluid" src="./images/Logo.png"></img>
            </header>,
            <main key="main">
                <div className="mid-content container text-center">
                    <h1 className="text-uppercase">Top Projects</h1>
                    <div className="row">
                        <div className="col-sm-3 top-item">
                            <h2>Game Engine</h2>
                            <h3>The Cherno</h3>
                            <p>Description</p>
                        </div>
                        <div className="col-sm-3 top-item">
                            <h2>Game Engine</h2>
                            <h3>The Cherno</h3>
                            <p>Description</p>
                        </div>
                        <div className="col-sm-3 top-item">
                            <h2>Game Engine</h2>
                            <h3>The Cherno</h3>
                            <p>Description</p>
                        </div>
                        
                    </div>
                </div>
            </main>]
        );
    }
}
