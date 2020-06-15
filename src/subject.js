import React from 'react';

function Subject(props) {
    return (
        <div style={{color: "white",backgroundColor: "black"}}>
     
            <hr></hr>
            <h2> Today I have learnt {props.sub1Name} form Bootcamp2020.</h2>
            <hr></hr>

        </div>

    )
}

export default Subject;