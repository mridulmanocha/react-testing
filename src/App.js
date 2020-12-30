import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    name : "Mridul"
  }

  changeState = (newName) => {
    this.setState({
      name : newName
    })
  } 

  render() {
    return (
      <div className="App">
        <h1>I am a h1 tag</h1>
        <Person name={this.state.name} click={this.changeState.bind(this,"Mridul")}/>
        <button onClick={() => this.changeState("Nayan")}>Click me to change the name</button>
      </div>
    );
  }
} 

export default App;
