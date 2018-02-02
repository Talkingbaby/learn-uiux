import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import MainCard from './components/MainCard';
import DataCard from './components/DataCard';
import FilterButtonsUI from './components/FilterButtonsUI';
import FilterButtonsUX from './components/FilterButtonsUX';

import uiux from './data/uiux';


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
      filtered: uiux,
      ui: false,
      ux: false,
    }

    this.filterUI = this.filterUI.bind(this);
    this.filterCss = this.filterCss.bind(this);
    this.filterUX = this.filterUX.bind(this);
    this.showAll = this.showAll.bind(this);
    this.showUiButtons = this.showUiButtons.bind(this);
    this.showUxButtons = this.showUxButtons.bind(this);
    this.goBackUI = this.goBackUI.bind(this);
    this.goBackUX = this.goBackUX.bind(this);
    this.filterMedium = this.filterMedium.bind(this);
    this.filterPub = this.filterPub.bind(this);
    this.filterFonts = this.filterFonts.bind(this);
    this.filterReact = this.filterReact.bind(this);
  }

  goBackUI(){
    this.setState({ui: false});
    this.showAll();
  }

  goBackUX(){
    this.setState({ux: false});
    this.showAll();
  }

  showUiButtons(){
    this.setState({ui: true});
  }

  showUxButtons(){
    this.setState({ux: true});
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

  filterCss() {
    let css = uiux.filter((item) => {
      for(let i = 0; i < item.tag.length; i++){
        if(item.tag[i] === 'css') {
          return item;
        }
      }
    });
    this.setState({filtered: css});
  }

  filterFonts() {
    let fonts = uiux.filter((item) => {
      for(let i = 0; i < item.tag.length; i++){
        if(item.tag[i] === 'fonts') {
          return item;
        }
      }
    });
    this.setState({filtered: fonts});
  }

  filterReact() {
    let react = uiux.filter((item) => {
      for(let i = 0; i < item.tag.length; i++){
        if(item.tag[i] === 'react') {
          return item;
        }
      }
    });
    this.setState({filtered: react});
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

  filterMedium() {
    let medium = uiux.filter((item) => {
      for(let i = 0; i < item.tag.length; i++){
        if(item.tag[i] === 'medium') {
          return item;
        }
      }
    });
    this.setState({filtered: medium});
  }

  filterPub() {
    let pub = uiux.filter((item) => {
      for(let i = 0; i < item.tag.length; i++){
        if(item.tag[i] === 'publications') {
          return item;
        }
      }
    });
    this.setState({filtered: pub});
  }

  showAll() {
    this.setState({filtered: uiux});
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div style={styles.main}>
          {
            this.state.ui
            ?
            <FilterButtonsUI
              css={this.filterCss}
              fonts={this.filterFonts}
              react={this.filterReact}
              back={this.goBackUI}
              filterUI={this.filterUI}
            />
            : 
            <MainCard
              choice={'UI'}
              show={this.showUiButtons}
            /> 
          }
          {
            this.state.ux
            ?
            <FilterButtonsUX
              medium={this.filterMedium}
              pub={this.filterPub}
              back={this.goBackUX}
              filterUX={this.filterUX}
            />
            : 
            <MainCard
              choice={'UX'}
              show={this.showUxButtons}
            /> 
          }
          <MainCard choice={'Both'} show={this.showAll}/>
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
