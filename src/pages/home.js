import React from 'react'

export default class HomePage extends React.Component {
    constructor(){
        super();
        this.state = {
            topProjects: []
        }
    }

    render() {
        return (
            [<header key="header">
                <img className="img-fluid" src="./images/Logo.png"></img>
            </header>,
            <main key="main">
                <div className="container">
                    <div className="md-form active-cyan-2 mb-3">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                    </div>
                </div>
                
                <div className="mid-content container text-center">
                    <h1 className="text-uppercase">Top Projects</h1>
                    <div className="row">
                    {this.state.topProjects.map((project) => (
                        <div className="col-sm-3 top-item">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </main>]
        );
    }
}
