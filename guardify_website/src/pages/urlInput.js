import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UrlInput = ({ setMonitoredUrl }) => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      setMonitoredUrl(url);
      navigate('/dashboard'); // Redirect to the dashboard page
    } else {
      alert('Please enter a valid URL');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Enter Website URL for Monitoring</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Monitor Website
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  form: {
    display: 'inline-block',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
  },
  button: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
};

export default UrlInput;
