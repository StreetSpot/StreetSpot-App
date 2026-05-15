import React from 'react';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#00d1ff', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '4rem', 
        textShadow: '0 0 10px #00d1ff, 0 0 20px #00d1ff',
        margin: '0' 
      }}>
        StreetSpot
      </h1>
      <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
        Hardin Brothers
      </p>
      <div style={{
        marginTop: '20px',
        padding: '10px 20px',
        border: '2px solid #00d1ff',
        borderRadius: '5px',
        boxShadow: '0 0 5px #00d1ff'
      }}>
        Coming Soon
      </div>
    </div> 
  );
}

export default App;
