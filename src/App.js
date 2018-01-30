import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import MainCard from './components/MainCard';
import DataCard from './components/DataCard';

import uiux from './data/uiux';

// const UI = Object.entries(ui);
// const UX = Object.entries(ux);

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5rem'
  },
  sub: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div style={styles.main}>
          <MainCard choice={'UI'}/>
          <MainCard choice={'UX'}/>
        </div>
        <div style={styles.sub}>
          {
            uiux.map((item) => {
                return <DataCard ui={item} key={item.url}/>;
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
