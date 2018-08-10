import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js in constructor]',props)
    this.state = {
      persons : [
        { id: 'dsa12', name: 'Yousuf', age:'24'},
        { id: 'hdjd78', name: 'Danish', age:'23'},
        { id: 'kjsj76', name: 'Yursila', age:'15'}
      ],
      showPersons: false
    }
  }

  componentWillMount(){
    console.log('[App.js in componet will mount]');
  }

  componentDidMount(){
    console.log("[App.js in component did mount]");
  }
 
  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE App.js] in shouldComponentUpdate()' , nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE App.js] in componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE App.js] in componentDidUpdate()');
  }
  // state = {
  //   persons : [
  //     { id: 'dsa12', name: 'Yousuf', age:'24'},
  //     { id: 'hdjd78', name: 'Danish', age:'23'},
  //     { id: 'kjsj76', name: 'Yursila', age:'15'}
  //   ],
  //   showPersons: false
  // }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    // console.log(personIndex);
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons : persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js in render method]');
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons} changed={this.nameChangeHandler} clicked={this.deletePersonHandler}/>   
        </div>
      );
      // btnStyle.backgroundColor = 'red';
    }
    else{
      persons = (
        <div>
          <h4>Press the toggle button to render list items !!</h4>
        </div>
      )
    }
    return (
        <div className="App">
          <Cockpit showPersons={this.state.showPersons} clicked={this.togglePersonHandler} persons={this.state.persons}/>
          {persons}
        </div>
    );
  }
}

export default App;
