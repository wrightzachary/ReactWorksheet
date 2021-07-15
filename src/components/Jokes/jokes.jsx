import React from "react";

let rand_num = Math.floor(Math.random() * 11)


const Jokes= (props) => {
    let specific_joke = [];
    const jokes = props.theJokes;
    if (jokes == null && jokes.length === 0) {
        return null;
    }
    else {
        console.log('Here are the jokes');
        console.log(jokes);
        for (let index = 0; index < jokes.length; index++)
        {
            if (jokes[index].setup === jokes[rand_num].setup) {
                specific_joke = jokes[index];
            }
        }
    }
    return (
        <React.Fragment>
            <h1>Exercise 6:</h1>
            <div className="row">
            <div className="col"></div>
            <div className="col text-center">
                <h1 className="display-5">Oh, you got jokes?</h1>
                <h3>{specific_joke.setup}</h3>
                <h3 className="text-muted">{specific_joke.punchline}</h3>
            </div>
            <div className="col"></div>
        </div>
        </React.Fragment>
        
    );
}

export default Jokes;
