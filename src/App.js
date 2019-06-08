import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world
        <Test c="blue" />
        <Test c="skyblue" />
        <Test c="green" />
       </div>
    );
  }
}
function Test(props){
  return(
    <div style={{color:props.c}}>testteesrst</div>
  )
}

export default App;
