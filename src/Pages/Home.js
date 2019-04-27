import React from 'react';

export const Home = () => (
  <div
    style={{ display: 'flex', flexFlow: 'row wrap', width: '100%', height: '93vh' }}
  >
    <div style={{ width: '50%', backgroundColor: '#858585', placeItems: 'center', height: '90%', textAlign: 'center' }}>Items In Party</div>
    <div style={{ width: '50%', backgroundColor: '#858585', placeItems: 'center', height: '90%', textAlign: 'center' }}>Map</div>
    <div
      style={{ width: '100%', display: 'flex', flexFlow: 'row wrap', height: '10%' }}
    >
      <div style={{ width: '50%', backgroundColor: '#999999', display: 'flex', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'space-around' }}>
        <span style={{width: '100%', textAlign: 'center'}}>Players in Party</span>
        <div style={{ width: '75px', height: '75px', backgroundColor: 'green', textAlign: 'center' }}>Player 1</div>
        <div style={{ width: '75px', height: '75px', backgroundColor: 'red', textAlign: 'center' }}>Player 2</div>
        <div style={{ width: '75px', height: '75px', backgroundColor: 'blue', textAlign: 'center' }}>Player 3</div>
        <div style={{ width: '75px', height: '75px', backgroundColor: 'orange', textAlign: 'center' }}>Player 4</div>
      </div>
      <div style={{ width: '50%', backgroundColor: '#999999', display: 'flex', flexFlow: 'row wrap', alignItems: 'center', justifyContent: 'space-around' }}>
        <span style={{width: '100%', textAlign: 'center'}}>Monsters in Queue</span>
        <div style={{ width: '75px', height: '75px', backgroundColor: 'green', textAlign: 'center' }}>Monster 1</div>
        <div style={{ width: '75px', height: '75px', backgroundColor: 'red', textAlign: 'center' }}>Monster 2</div>
        <div style={{ width: '75px', height: '75px', backgroundColor: 'blue', textAlign: 'center' }}>Monster 3</div>
        <div style={{ width: '75px', height: '75px', backgroundColor: 'orange', textAlign: 'center' }}>Monster 4</div>
      </div>
    </div>
  </div>
)