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
                        
                        {!this.state.logged && 
                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        }

                        <li>
                            <a target="_blanc" href="https://www.cognitoforms.com/PASP2/Contact">Contact</a>
                        </li>
                        
                    </ul>
                </nav>

                <Route exact path="/" render={() => <HomePage />}/>

            </BrowserRouter>
        );
    }
}
