import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    const btnStyle = {
        backgroundColor: 'green',
        color: 'white',
        border: '1px solid blue',
        padding: '10px 20px',
        fontSize: '18px',
        margin: '20px'
      }
      
    let classes = [];
    if (props.showPersons){
        btnStyle.backgroundColor = 'red';
    }
    if(props.persons.length <=2){
      classes.push('red');  // classes = ["red"];
    }
    
    if(props.persons.length <=1){
      classes.push('bold'); //  classes = ["red, bold"];
    }

    return (
        <div>
            <h1>Hello, I am a react developer!</h1>
            <p className={classes.join(' ')}>This App is working good!!</p>
            <button 
            style={btnStyle} 
            onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default cockpit;