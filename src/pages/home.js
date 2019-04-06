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
                    <form className="navbar-form" role="search">
                        <div className="input-group add-on">
                            <input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"/>
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                            </div>
                        </div>
                    </form>
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
