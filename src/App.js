import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      () => {
              return {monsters : users}
            },
      () => {
              console.log(this.state)
            }
    ))
  }

  onsearchChange= (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
      return {searchField}
      
    })
  }

  render(){

    const {monsters, searchField} = this.state
    const {onsearchChange} = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

  return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Monsters' onChange={onsearchChange}/>
        
        {filteredMonster.map((monster)=> {
          return<div key={monster.id}>
                  <h5>{monster.name}</h5>
                </div>})
        }
      </div>
    );
  }
}

export default App;
