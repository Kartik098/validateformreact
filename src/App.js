import './App.css';
import React from 'react';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends React.Component {
  constructor(){

  }

render(){
return (
  <div className="App">
  <div className='container'>
  <form className='form'>
  <label for="username">Username</label>
  <input type="text" name='username' placeholder='username'></input>

  </form>
  </div>
  </div>
);
}
}
export default App;
