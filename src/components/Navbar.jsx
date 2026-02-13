import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { path: '/biblioteca', label: 'Biblioteca', icon: '📚' },
    { path: '/calendario', label: 'Calendário', icon: '📅' },
    { path: '/alfabeto', label: 'Alfabeto', icon: '🔤' },
    { path: '/avaliacao', label: 'Avaliação', icon: '⭐' },
    { path: '/meta', label: 'Meta', icon: '🎯' }
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6);
          }
        }

        .navbar-modern {
          animation: slideDown 0.5s ease-out;
        }

        .nav-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item:hover {
          transform: translateY(-3px);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #FFD700, #FFA500);
          border-radius: 2px;
          animation: glow 2s infinite;
        }

        .nav-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .nav-item:hover::before {
          opacity: 1;
        }
      `}</style>

      <nav className="navbar-modern" style={{
        background: 'linear-gradient(135deg, #BE123C 0%, #E11D48 50%, #FB7185 100%)',
        padding: '20px 50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 20px rgba(225, 29, 72, 0.4), 0 0 40px rgba(225, 29, 72, 0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Efeito de brilho animado */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          animation: 'shimmer 3s infinite'
        }}></div>

        <style>{`
          @keyframes shimmer {
            0% { left: -100%; }
            100% { left: 100%; }
          }
        `}</style>

        <Link to="/biblioteca" style={{ textDecoration: 'none', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              fontSize: '36px',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              transition: 'transform 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'rotate(-10deg) scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'rotate(0) scale(1)'}
            >
              📚
            </div>
            <div style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              letterSpacing: '1px'
            }}>
              BookShelf
            </div>
          </div>
        </Link>

        <ul style={{
          display: 'flex',
          gap: '35px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          position: 'relative',
          zIndex: 1
        }}>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  position: 'relative',
                  background: location.pathname === item.path 
                    ? 'rgba(255, 255, 255, 0.2)' 
                    : 'transparent',
                  backdropFilter: location.pathname === item.path ? 'blur(10px)' : 'none',
                  border: location.pathname === item.path 
                    ? '1px solid rgba(255, 255, 255, 0.3)' 
                    : '1px solid transparent'
                }}
              >
                <span style={{
                  fontSize: '20px',
                  transition: 'transform 0.3s',
                  transform: hoveredItem === item.path ? 'scale(1.3) rotate(10deg)' : 'scale(1)',
                  display: 'inline-block'
                }}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
