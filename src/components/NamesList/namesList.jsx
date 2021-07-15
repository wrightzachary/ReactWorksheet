import React from 'react';

const NamesList = (props) => {
    return (
        <React.Fragment>
            <h1>Exercise 2:</h1>
            <ul>
            {props.names.map((names, index) => {
                return (
                    <div key={index} >
                        <li>{names}</li>
                    </div>
                );
            })}
            </ul>
        </React.Fragment>
    );
}
 
export default NamesList;