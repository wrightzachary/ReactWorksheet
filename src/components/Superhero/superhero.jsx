import React from 'react';


const SuperheroTable = (props) => {
    return (
        <React.Fragment>
            <h1>Exercise 4:</h1>
        <table>
            <thead>
                <th>Superhero Id</th>
                <th>Superhero Name</th>
                <th>Primary Ability</th>
                <th>Secondary Ability</th>
            </thead>
            {props.superheroes.map((superhero, index) => {
                return (
                    <div key={index} >
                        <tbody>
                            <td>{superhero.superheroId}</td>
                            <td>{superhero.name}</td>
                            <td>{superhero.primaryAbility}</td>
                            <td>{superhero.secondaryAbility}</td>
                        </tbody>
                    </div>
                );
            })}
        </table>
        </React.Fragment>
    );
}

export default SuperheroTable;