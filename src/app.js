import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'

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
                                <Link to="/login">Login / Register</Link>
                            </li>
                        }

                        <li>
                            <a className="typeform-share button" href="https://pedrog1.typeform.com/to/cR5tWs" data-mode="popup" data-auto-open={false} target="_blank">{(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()}Contact</a>
                        </li>
                        
                    </ul>
                </nav>

                <Route exact path="/" render={() => <HomePage />}/>
                <Route exact path="/login" render={() => <LoginPage />}/>
                <Route exact path="/register" render={() => <RegisterPage />}/>

            </BrowserRouter>
        );
    }
}
