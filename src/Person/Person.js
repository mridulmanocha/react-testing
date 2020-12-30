import React from 'react'

const person = (props) => {
    console.log(props   )
    return (
    <p onClick={props.click}>My name is {props.name}</p>
    )
};

export default person;