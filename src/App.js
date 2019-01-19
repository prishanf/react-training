import React, { Component } from "react";
import Person from "./Person/Person";
class App extends Component {

  
  state = {
    persons : [
      {name:'prishan',age:20},
      {name:'Raveen', age:24}
    ],
    otherState :'Some Other State'
  }
  swtichNameHandler = (val)=>{
    
    this.setState({
      persons: [
        { name: val, age: 30 },
        { name: 'Raveen', age: 24 }
      ]
    })
  }

  nameChangeHandler = (event) => {

    this.setState({
      persons: [
        { name: event.target.value, age: 30 },
        { name: 'Raveen', age: 24 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor :'#fff',
      font:'inharit',
      padding:'16px',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc'
    }
    return (
      <div className="App">
        <h1>This is from React</h1>
        <h2>It's really working</h2>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
          changed={this.nameChangeHandler}
        />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <button
        style={style} 
        onClick={this.swtichNameHandler.bind(this,'Prima')}>Swtich Button</button>
        <Person name="raveen" age="34" 
        click={this.swtichNameHandler.bind(this,'Mendi')}
        />
        <Person name="shehan" age="45"/>
        <Person name="shehan" age="45" >
        Childern Example
        </Person>
      </div>
    );
  }
}

export default App;
