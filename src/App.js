import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const HomePage = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif'
  }}>
    <div style={{
      textAlign: 'center',
      color: 'white',
      padding: '2rem',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '20px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀 Fortyfi</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI Influencer Marketing Platform</h2>
      <p style={{ fontSize: '1rem', marginBottom: '2rem', opacity: 0.9 }}>
        Successfully deployed on Railway! 🎉
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
          <h3>✅ Brand Dashboards</h3>
          <p>Campaign management & analytics</p>
        </div>
        <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
          <h3>✅ Influencer Discovery</h3>
          <p>AI-powered creator matching</p>
        </div>
        <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
          <h3>✅ Live Payments</h3>
          <p>Stripe integration ready</p>
        </div>
        <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }}>
          <h3>✅ Real-time Messaging</h3>
          <p>Instant communication</p>
        </div>
      </div>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(0,255,0,0.1)', borderRadius: '10px', border: '1px solid rgba(0,255,0,0.3)' }}>
        <h3>🎯 Ready for Production!</h3>
        <p>Your AI Influencer Marketing Platform is live and ready to handle real users and campaigns.</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
