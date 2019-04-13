import React from 'react'

export default class ContactPage extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div class="cognito">
                <script src="https://services.cognitoforms.com/s/2vHXwVcUyUigG_NB5UwDOQ"></script>
                <script>Cognito.load("forms", {{ id: "3" }});</script>
            </div>
        );
    }
}
