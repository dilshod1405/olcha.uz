import './App.css';
import Cards from './companents/Cards/Cards';
import Header from './companents/header/Header';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = {mode: 'light'};
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === 'light'? 'dark':'light',
    });
  }
  render() {
    return (
        <div>
          <Header Mode={this.toggleMode} modes={this.state}/>
          <Cards Mode={this.toggleMode} modes={this.state}/>
        </div>
    );
  }
}
