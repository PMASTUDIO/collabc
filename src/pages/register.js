import React from 'react'

export default class RegisterPage extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
          <div className="container" id="formRegisterHolder">
            <form action="/action_page.php">
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="email" className="form-control" id="email"></input>
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" id="pwd"></input>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        );
    }
}
