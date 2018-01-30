import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import MainCard from './components/MainCard';
import DataCard from './components/DataCard';

import { ui, ux } from './data/uiux';

const UI = Object.entries(ui);

console.log(UI);

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
            UI.map((data) => {
              return data[1].map((item) => {
                return <DataCard ui={item} key={item.url}/>;
              });
            })
          }
          {/* {
            ui.fonts.map((item, i) => {
              return <DataCard ui={item} key={i}/>;
            })
          } */}
        </div>
      </div>
    );
  }
}

export default App;
