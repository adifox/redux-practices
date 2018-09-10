import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';

import Calculator from './components/calculator';

class App extends Component {
  render() {
    return (
      <div className={ classes.App }>
        <header className={ classes.AppHeader }>
          <img src={logo} className={ classes.AppLogo } alt="logo" />
          <h1 className={ classes.AppTitle }>Welcome to React</h1>
        </header>
        <p className={ classes.AppIntro }>
          Your Calculator - Make me proud
        </p>
        <Calculator />
      </div>
    );
  }
}

export default App;
