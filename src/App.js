import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import MainCard from './components/MainCard';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5rem'
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div styles={styles}>
          <MainCard choice={'UI'}/>
          <MainCard choice={'UX'}/>
        </div>
      </div>
    );
  }
}

export default App;
