import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import MainCard from './components/MainCard';
import DataCard from './components/DataCard';

import ui from './data/uiux';

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
    // alignItems: 'center',
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
            ui.map((item, i) => {
              return <DataCard ui={item.css} key={i}/>;
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
