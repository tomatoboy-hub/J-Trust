import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      };
    
      const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontSize: '1.2rem',
      };
      return (
        <header style={headerStyle}>
          <Link to="/" style={linkStyle}>ホーム</Link>
          <Link to="/about" style={linkStyle}>J-Trustについて</Link>
          <Link to="/group" style={linkStyle}>学生団体一覧</Link>
          <Link to="/contact" style={linkStyle}>お問い合わせ</Link>
        </header>
      );
}

export default Header