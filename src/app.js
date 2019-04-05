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
                            <Link to="/">Search</Link>
                        </li>
                        {this.state.logged &&
                            <li>
                                <Link to="/recommended">My Recommendations</Link>
                            </li>
                        }
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

                <Route exact path="/" render={() => <HomePage />}/>

            </BrowserRouter>
        );
    }
}
