import React from 'react'

export default class RegisterPage extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
          <div className="containerCenter white-box">
            <h1>Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
                <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
              <button type="submit" className="btn btn-primary">Log In</button>
              <button className="btn btn-dark right-button">Create a new account</button>
            </form>
          </div>
        );
    }
}
