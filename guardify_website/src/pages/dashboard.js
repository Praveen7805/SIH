import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-annotation';

const Dashboard = ({ monitoredUrl }) => {
  const [dataPoints, setDataPoints] = useState([]);
  const [attackDetails, setAttackDetails] = useState([]);
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWebsiteData();
    }, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const fetchWebsiteData = async () => {
    // Mock data for demonstration
    const response = {
      timestamp: new Date().toLocaleTimeString(),
      requestCount: Math.floor(Math.random() * 100),
      status: 'normal',
    };

    setDataPoints((prevDataPoints) => [...prevDataPoints, response]);

    // If attack detected
    if (response.requestCount > 80) {
      const attack = {
        attacker: '0x123456789...',
        timestamp: response.timestamp,
        attackType: 'DDoS',
      };
      setAttackDetails((prevDetails) => [...prevDetails, attack]);
    }
  };

  useEffect(() => {
    // Destroy the previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dataPoints.map((point) => point.timestamp),
        datasets: [
          {
            label: 'Requests per second',
            data: dataPoints.map((point) => point.requestCount),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4, // Smooth curve
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(200, 200, 200, 0.2)',
            },
            title: {
              display: true,
              text: 'Requests per Second',
              color: '#666',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
          x: {
            grid: {
              color: 'rgba(200, 200, 200, 0.2)',
            },
            title: {
              display: true,
              text: 'Time',
              color: '#666',
              font: {
                size: 14,
                weight: 'bold',
              },
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#333',
            },
          },
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0,0,0,0.7)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: '#333',
            borderWidth: 1,
          },
          annotation: {
            annotations: attackDetails.map((attack) => ({
              type: 'line',
              mode: 'vertical',
              scaleID: 'x-axis-0',
              value: attack.timestamp,
              borderColor: 'red',
              borderWidth: 2,
              label: {
                content: 'Attack Detected',
                enabled: true,
                position: 'top',
                backgroundColor: 'red',
                color: '#fff',
                font: {
                  weight: 'bold',
                },
              },
            })),
          },
        },
      },
    });

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [dataPoints, attackDetails]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Monitoring Dashboard</h1>
      <p style={styles.subHeader}>Monitoring: {monitoredUrl}</p>
      <div style={styles.chartContainer}>
        <canvas ref={canvasRef} id="chart"></canvas>
      </div>
      <div style={styles.attackDetails}>
        <h2 style={styles.subHeader}>Attack Details</h2>
        {attackDetails.length > 0 ? (
          <ul style={styles.attackList}>
            {attackDetails.map((attack, index) => (
              <li key={index} style={styles.attackItem}>
                Attacker: {attack.attacker} | Timestamp: {attack.timestamp} | Attack Type: {attack.attackType}
              </li>
            ))}
          </ul>
        ) : (
          <p>No attacks detected yet.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    color: '#333',
  },
  subHeader: {
    textAlign: 'center',
    color: '#666',
  },
  chartContainer: {
    position: 'relative',
    height: '400px',
    width: '100%',
    margin: '0 auto',
    marginBottom: '20px',
  },
  attackDetails: {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#f9f9f9',
  },
  attackList: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  attackItem: {
    padding: '5px 0',
    borderBottom: '1px solid #ddd',
  },
};

export default Dashboard;
