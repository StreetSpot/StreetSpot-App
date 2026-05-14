import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// StreetSpot by Hardin Brothers - Final Production Build
const StreetSpotApp = () => {
  const [showTour, setShowTour] = useState(true);
  
  // Theme Colors
  const colors = {
    background: '#000000',
    tealNeon: '#00FFD1',
    neonGreen: '#39FF14',
    goldPin: '#D4AF37',
    text: '#FFFFFF'
  };

  const stripeLink = "https://billing.stripe.com/p/login/14A9AV9fQ8dyanGbPW1VK00";

  return (
    <Router>
      <div style={{ 
        backgroundColor: colors.background, 
        color: colors.text, 
        minHeight: '100vh', 
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        {/* Main App Content */}
        <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
          <h1 style={{ color: colors.tealNeon }}>StreetSpot</h1>
          <p>Your Map is Loading...</p>
          
          {/* Gold Pin Indicator */}
          <div style={{ 
            border: `2px solid ${colors.goldPin}`, 
            padding: '10px', 
            borderRadius: '10px', 
            margin: '20px auto', 
            maxWidth: '300px' 
          }}>
            <span style={{ color: colors.goldPin }}>★</span> Premium Spot Access Active
          </div>

          {/* Stripe Button */}
          <button 
            onClick={() => window.open(stripeLink, '_blank')}
            style={{
              backgroundColor: colors.tealNeon,
              color: '#000',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '20px'
            }}
          >
            Manage Subscription
          </button>
        </div>

        {/* Google Play Compliance Footer */}
        <footer style={{ 
          padding: '20px', 
          borderTop: `1px solid ${colors.tealNeon}`, 
          display: 'flex', 
          justifyContent: 'space-around',
          fontSize: '12px'
        }}>
          <a href="#" style={{ color: colors.tealNeon, textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: colors.tealNeon, textDecoration: 'none' }}>Data Deletion Request</a>
        </footer>

        {/* Simple Guided Tour Overlay */}
        {showTour && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
          }}>
            <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '15px', border: `2px solid ${colors.tealNeon}`, textAlign: 'center' }}>
              <h2>Welcome to StreetSpot!</h2>
              <p>Step 1: Use Teal pins for free spots.</p>
              <button onClick={() => setShowTour(false)} style={{ backgroundColor: colors.tealNeon, border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Got it!</button>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default StreetSpotApp;
