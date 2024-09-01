import React from 'react';

const Features = () => {
  return (
    <div style={{ padding: '205px', textAlign: 'center', backgroundColor:'black' , color:'white'}}>
      <h1>Our Features</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div style={{ maxWidth: '300px' }}>
          <h1>Real-time Monitoring</h1>
          <p>Guardify continuously monitors your website's traffic and instantly detects any suspicious activity.</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h2>Automatic DDoS Mitigation</h2>
          <p>Our solution automatically mitigates DDoS attacks to keep your website up and running.</p>
        </div>
        <div style={{ maxWidth: '300px' }}>
          <h2>Detailed Analytics</h2>
          <p>Get detailed insights into traffic patterns and potential threats with our analytics dashboard.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
