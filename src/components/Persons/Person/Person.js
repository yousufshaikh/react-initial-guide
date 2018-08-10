import React, { Component } from 'react';
import './Person.css'


class Person extends Component {
    constructor(props){
        super(props)
        console.log('[person.js in constructor]',props)
      }
    
      componentWillMount(){
        console.log('[person.js in componet will mount]');
      }
    
      componentDidMount(){
        console.log("[person.js in component did mount]");
      }
    render(){
        console.log("[person.js in render method]");
        return (
            <div className="person">
                <i onClick={this.props.click} className="close fa fa-times"></i>
                <p>My name is {this.props.name} and my age is {this.props.age}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </div>
        ) 
    }
}

export default Person;