import React from 'react';
import desking from '../assets/desktop-img.png';

export default function TDAPP() {
  return (
    <div style={{ backgroundColor: '#dcd3f4', height: '100vh', padding: 50 }}>
      <img
        style={{
          position: 'fixed',
          top: '35%',
          left: '50%',
          width: '50%',
          marginTop: 120,
          /* bring your own prefixes */
          transform: 'translate(-50%, -50%)',
        }}
        alt='birthday'
        src={desking}
      />
      <h1
        style={{
          textAlign: 'center',
          fontSize: 35,
          color: 'white',
          fontFamily: '"Comfortaa", cursive',
        }}
      >
        Please view site on a mobile device.
      </h1>
      <h1
        style={{
          textAlign: 'center',
          color: 'white',
          fontFamily: '"Comfortaa", cursive',
        }}
      >
        PS.{' '}
        <span
          style={{
            fontFamily: '"Pacifico", cursive',
          }}
        >
          Happy Birthday
        </span>{' '}
        EC. Twins
      </h1>
    </div>
  );
}
