import React, {Component} from 'react';
import AlertUser from './AlertUser/alertUser';
import DisplayName from './DisplayName/displayName';
import NamesList from './NamesList/namesList';
import SuperheroTable from './Superhero/superhero';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            firstName: 'Reggie',
            lastName: 'White',

            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kellie'],

            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]

        }
    }
    
    render() { 
        return (
            <React.Fragment>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
                <NamesList  names={this.state.names}/>
                <AlertUser />
                <SuperheroTable superheroes={this.state.superheroes} />
            </React.Fragment>
            
        );
    }
}
 
export default App;