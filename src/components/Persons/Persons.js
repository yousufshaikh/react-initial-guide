import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
  constructor(props){
    super(props)
    console.log('[Persons.js] in constructor]',props)
  }

  componentWillMount(){
    console.log('[Persons.js] in componet will mount]');
  }

  componentDidMount(){
    console.log("[Persons.js] in component did mount]");
  }

  componentWillReceiveProps(nextProps){
    console.log('[UPDATE PERSONS] in componentWillReceiveProps()', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[UPDATE PERSONS] in shouldComponentUpdate()' , nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps,nextState){
    console.log('[UPDATE PERSONS] in componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE PERSONS] in componentDidUpdate()');
  }

  render(){
    console.log("[Persons.js] in render method");
    return this.props.persons.map((person,index) => {
      return <Person key={person.id} name={person.name} age={person.age} change={(event) => this.props.changed(event, person.id)} click={() => this.props.clicked(index)}/>
    });
  }
}

export default Persons;