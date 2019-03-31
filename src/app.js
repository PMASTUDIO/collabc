import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomePage from './pages/home'

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            logged: false
        }
    }

    render() {
        return (
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {this.state.logged &&
                            <li>
                                <Link to="/recommended">My Recommendations</Link>
                            </li>
                        }
                        <li>
                            <a href="#search">Find a project</a>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        {!this.state.logged && 
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        }
                        
                    </ul>
                </nav>

                <div id="search">
                    <button type="button" className="close">×</button>
                    <form>
                        <input type="search" placeholder="type keyword(s) here" />
                        <button type="submit" className="btn btn-primary">Search</button>
                    </form>
                </div>

                <Route exact path="/" render={() => <HomePage />}/>

            </BrowserRouter>
        );
    }
}
