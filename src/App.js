import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name : {firstName: "Pawan", lastName: "Yadav"},
      company : "Vipul Organics"

    }
  }
  render() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi I am {this.state.name.firstName} {this.state.name.lastName}, 
            I work in {this.state.company}
          </p>
          <button onClick={() => {
            this.setState(
              () => {
              return {                                            //this function is state change
                name : {firstName: "Krishna", lastName: "Ram"}
              }
            },
              () => {
                console.log(this.state)
              }
            );
            }}>Change Name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
