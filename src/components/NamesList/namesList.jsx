import React from 'react';

const NamesList = (props) => {
    return ( 
        <React.Fragment>
            <h1>Exercise 2:</h1>
            <ul>
                <li>{props.names[0]}</li>
                <li>{props.names[1]}</li>
                <li>{props.names[2]}</li>
                <li>{props.names[3]}</li>
                <li>{props.names[4]}</li>
            </ul>
        </React.Fragment>
     );
}
 
export default NamesList;