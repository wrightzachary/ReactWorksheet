
import React, {Component} from 'react';
import AlertUser from './AlertUser/alertUser';
import DisplayName from './DisplayName/displayName';
import NamesList from './NamesList/namesList';
import SuperheroTable from './Superhero/superhero';
import CreateSuperhero from './CreateSuperhero/createSuperhero';

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

    addSuperhero = (newSuperhero) => {
        let newSuperheroObject = {
          name: newSuperhero.name,
          primaryAbility: newSuperhero.primaryAbility,
          secondaryAbility: newSuperhero.secondaryAbility
        }
        let tempSuperheroes = this.state.superheroes;
        tempSuperheroes.push(newSuperheroObject);
        this.setState({
          superheroes: tempSuperheroes
        });
      }
    

    render() {
        return (
            <React.Fragment>
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName} />
                <NamesList  names={this.state.names}/>
                <AlertUser />
                <SuperheroTable superheroes={this.state.superheroes} />
                <CreateSuperhero addSuperhero={this.addSuperhero} />
            </React.Fragment>

        );
    }
}

export default App;
