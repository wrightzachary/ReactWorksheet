import React, { Component } from 'react';


class CreateSuperhero extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newSuperhero = {
            name: this.state.name,
            primaryAbility: this.state.primaryAbility,
            secondaryAbility: this.state.secondaryAbility
        }
        this.props.addSuperhero(newSuperhero);
        this.setState({
            name: '',
            primaryAbility: '',
            secondaryAbility: ''
        });
    }

    render() {
        return(
            <React.Fragment>
                <h1>Exercise 5:</h1>
                    <h3>Add A Superhero</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Superhero Name</label>
                            <input name="name" type='text' onChange={this.handleChange} value={this.state.name} />
                        </div>
                        <div className="row col-md-4">
                            <label>Primary Ability</label>
                            <input name="primaryAbility" type='text' onChange={this.handleChange} value={this.state.primaryAbility} />
                        </div>
                        <div className="row col-md-4">
                            <label>Secondary Ability</label>
                            <input name="secondaryAbility" type='text' onChange={this.handleChange} value={this.state.secondaryAbility} />
                        </div>
                            <button type='submit' value="Add">Submit</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default CreateSuperhero;