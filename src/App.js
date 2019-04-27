import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';


import { dndlogo } from './Resources/images';
import { Home } from './Pages/Home';
import { Tacos } from './Pages/Tacos';
import DiceBag from './Components/DiceBag';
import DiceBagImg from './Resources/dicebag_img.png';


const DiceBagView = styled.div`
  position: absolute;
  border: 2px solid #202020;
  background-color: white;
  border-radius: 10px;
  top: 58px;
  left: calc(100% - 395px);
  width: 350px;
  height: 500px;

`;
const DiceBagButton = styled.div`
  cursor: pointer;
  margin: '10px';
  textDecoration: 'none';
  color: '#858585';
  grid-column-sart: '4';
  grid-column-end: 'span 1';
  backgroundColor: this.state.navBGColor;
  padding: '10px';
`;

class App extends Component {
  state = {
    navBGColor: null,
    diceBagView: false
  }

  navMouseEnter = () => this.setState({
    navBGColor: '#505050'
  })
  navMouseLeave = () => this.setState({
    navBGColor: null
  })
  toggleDiceBagView = () => this.setState({
    diceBagView: !this.state.diceBagView
  })


  render() {
    return (
      <div style={{ backgroundColor: '#202020', height: '100vh' }}>
        {this.state.diceBagView &&
          <DiceBagView><DiceBag startDice={'stnd'}/></DiceBagView>
        }
        <Router>
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              gridTemplateColumns: '20px 60px auto 100px 150px 20px',
              height: 'auto',
              width: '100%',
            }}>
            <NavLink
              to='/'
              style={{
                gridColumnStart: '2',
                gridColumnEnd: 'span 1'
              }}
            ><img
              src={dndlogo}
              alt={''}
              style={{
                margin: '10px',
                height: '30px',
              }}></img></NavLink>
            <span style={{ gridColumnStart: '3', gridColumnEnd: 'span 1' }}>We can put other crap here too...</span>
            <DiceBagButton
              onClick={() => this.toggleDiceBagView()}
            ><img src={DiceBagImg} style={{ height: '30px' }}></img></DiceBagButton>
            <NavLink
              to='/tacos'
              style={{
                margin: '10px',
                textDecoration: 'none',
                color: '#858585',
                gridColumnStart: '5',
                gridColumnEnd: 'span 1',
                backgroundColor: this.state.navBGColor,
                padding: '10px'
              }}
              onMouseEnter={this.navMouseEnter}
              onMouseLeave={this.navMouseLeave}
            >UserName</NavLink>
          </div>
          <div style={{ backgroundColor: '#484848', display: 'flex', flexDirection: 'row', width: '100%' }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/extra/eastereggs/tacos" component={Tacos} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;