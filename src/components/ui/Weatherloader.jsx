import React from 'react';

const WeatherLoader = () => {
  return (
    <>
      <style jsx>{`
        .weather-loader {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
          border-radius: 16px;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          position: relative;
          overflow: hidden;
        }
        
        .weather-scene {
          position: relative;
          width: 120px;
          height: 120px;
          margin-bottom: 30px;
        }
        
        .sun {
          width: 60px;
          height: 60px;
          background: #ffd700;
          border-radius: 50%;
          position: absolute;
          top: 15px;
          left: 30px;
          animation: rotate 8s linear infinite;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.4);
        }
        
        .sun::before {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: #ffd700;
          border-radius: 50%;
          top: -20px;
          left: 26px;
          box-shadow: 
            0 40px 0 #ffd700,
            -28px 12px 0 #ffd700,
            28px 12px 0 #ffd700,
            -20px -20px 0 #ffd700,
            20px -20px 0 #ffd700,
            -20px 40px 0 #ffd700,
            20px 40px 0 #ffd700;
          animation: rotate 8s linear infinite reverse;
        }
        
        .cloud {
          width: 80px;
          height: 40px;
          background: #e8f4fd;
          border-radius: 40px;
          position: absolute;
          top: 35px;
          left: 20px;
          animation: float 3s ease-in-out infinite;
          box-shadow: 0 4px 15px rgba(132, 176, 220, 0.3);
        }
        
        .cloud::before {
          content: '';
          position: absolute;
          width: 30px;
          height: 30px;
          background: #e8f4fd;
          border-radius: 50%;
          top: -15px;
          left: 15px;
        }
        
        .cloud::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 25px;
          background: #e8f4fd;
          border-radius: 50%;
          top: -12px;
          right: 15px;
        }
        
        .loading-text {
          font-size: 18px;
          font-weight: 600;
          color: #1976d2;
          margin-bottom: 10px;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .loading-subtext {
          font-size: 14px;
          color: #64b5f6;
          margin-bottom: 20px;
        }
        
        .progress-bar {
          width: 200px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #42a5f5, #1976d2);
          border-radius: 2px;
          animation: loading 2s ease-in-out infinite;
        }
        
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .floating-icon {
          position: absolute;
          font-size: 20px;
          opacity: 0.3;
          animation: floatingIcon 6s ease-in-out infinite;
        }
        
        .floating-icon:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .floating-icon:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .floating-icon:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
        
        @keyframes floatingIcon {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-15px) rotate(180deg);
            opacity: 0.6;
          }
        }
      `}</style>
      
      <div className="weather-loader">
        <div className="floating-elements">
          <div className="floating-icon">❄️</div>
          <div className="floating-icon">🌪️</div>
          <div className="floating-icon">⚡</div>
        </div>
        
        <div className="weather-scene">
          <div className="sun"></div>
          <div className="cloud"></div>
        </div>
        
        <div className="loading-text">Fetching Weather Data</div>
        <div className="loading-subtext">Getting the latest forecast...</div>
        
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>
    </>
  );
};

export default WeatherLoader;