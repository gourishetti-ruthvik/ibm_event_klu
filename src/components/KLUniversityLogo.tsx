import React from 'react';

const KLUniversityLogo: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ 
  className = "", 
  style = {} 
}) => {
  return (
    <div 
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        ...style
      }}
    >
      {/* University Emblem Circle */}
      <div style={{
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        border: '2px solid #333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'relative'
      }}>
        {/* Gear teeth around circle */}
        <div style={{
          position: 'absolute',
          width: '39px',
          height: '39px',
          borderRadius: '50%',
          top: '-4px',
          left: '-4px',
        }}>
          {/* Creating gear teeth using pseudo elements simulation */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '3px',
                height: '8px',
                backgroundColor: '#333',
                top: '-2px',
                left: '50%',
                transformOrigin: '50% 21.5px',
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
        
        {/* Inner emblem - Building/Institution symbol */}
        <div style={{
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
          lineHeight: '1'
        }}>
          🏛️
        </div>
      </div>

      {/* KL Text */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
        <div style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#c41e3a',
          letterSpacing: '2px',
          lineHeight: '1',
          fontFamily: 'Arial, sans-serif'
        }}>
          KL
        </div>
        <div style={{
          fontSize: '7px',
          color: '#333',
          letterSpacing: '0.5px',
          fontWeight: '500',
          marginTop: '2px',
          fontFamily: 'Arial, sans-serif'
        }}>
          (DEEMED TO BE UNIVERSITY)
        </div>
      </div>
    </div>
  );
};

export default KLUniversityLogo;