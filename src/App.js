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

const idGenerator = () => {
  const id = Math.round(Math.random() * 100000);
  return id;
}


class App extends Component {
  constructor(){
    super();
    this.state = {
      filtered: uiux
    }

    this.filterUI = this.filterUI.bind(this);
    this.filterUX = this.filterUX.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  filterUI() {
    let ui = uiux.filter((item) => {
      for(let i = 0; i < item.tag.length; i++){
        if(item.tag[i] === 'ui') {
          return item;
        }
      }
    });
    this.setState({filtered: ui});
  }

  filterUX() {
    let ux = uiux.filter((item) => {
      for(let i = 0; i < item.tag.length; i++){
        if(item.tag[i] === 'ux') {
          return item;
        }
      }
    });
    this.setState({filtered: ux});
  }

  showAll() {
    this.setState({filtered: uiux});
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div style={styles.main}>
          <MainCard choice={'UI'} filter={this.filterUI}/>
          <MainCard choice={'UX'} filter={this.filterUX}/>
          <MainCard choice={'Both'} filter={this.showAll}/>
        </div>
        <div style={styles.sub}>
          {
            this.state.filtered.map((item) => {
                let id = idGenerator();
                return <DataCard ui={item} key={id} tags={item.tag}/>;
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
