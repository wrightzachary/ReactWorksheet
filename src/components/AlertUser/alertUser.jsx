import React, {Component} from 'react';


class AlertUser extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        alert('devCodeCamp')
    }

    render() {
        return (
            <React.Fragment>
            <h1>Exercise 3:</h1>
            <button onClick={this.handleSubmit} type='submit'>Click Me</button>
            </React.Fragment>
            
        );
    }
}
export default AlertUser;