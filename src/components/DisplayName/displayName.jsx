import React from 'react';

const DisplayName = (props) => {
    return ( 
        <React.Fragment>
            <h1>Exercise 1:</h1>
            <h1>{props.firstName} {props.lastName}</h1>
        </React.Fragment>
     );
}
 
export default  DisplayName;