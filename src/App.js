import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

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
        <h1 className='monster-title'> Monster Family</h1>
        <SearchBox 
          className='monster-search-box'
          placeholder="Search Monster" 
          onChangeHandler={onsearchChange} />
        <CardList monsters={filteredMonster}/>

      </div>
    );
  }
}

export default App;
