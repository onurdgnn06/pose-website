import React from 'react';
import './App.css';

function Status() {
  return (
    <div className="App">
      <header className="navbar container">
        <div className="logo">
          <a href="/">
            <img src="/images/advanceaim_logo.png" alt="POSE Logo" height="50" />
          </a>
        </div>
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/#games">Games Catalog</a>
          <a href="/status">Status</a>
          <a href="/#faq">FAQ</a>
          <a href="https://discord.com/invite/advanceaim">Contact</a>
        </nav>
        <button className="btn btn-primary">Customer login</button>
      </header>

      <div className="breadcrumb container" style={{ padding: '1rem 0' }}>
        <a href="/">Home</a> / <span>Status</span>
      </div>

      <section className="status-header container">
        <h1 className="text-4xl font-bold mb-16">Status</h1>
        
        <div className="status-filters" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="#" className="filter-btn active" style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}>All</a>
          <a href="#" className="filter-btn" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}>Apex Legends</a>
          <a href="#" className="filter-btn" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}>Rust</a>
          <a href="#" className="filter-btn" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}>CoD: Black Ops 6</a>
          <a href="#" className="filter-btn" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}>Marvel Rivals</a>
          <a href="#" className="filter-btn" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}>DayZ</a>
          <a href="#" className="filter-btn" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}>Escape From Tarkov</a>
          <a href="#" className="filter-btn" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', color: 'white', padding: '0.5rem 1rem', borderRadius: '1rem' }}>Valorant</a>
        </div>
      </section>

      <section className="status-content container" style={{ marginBottom: '4rem' }}>
        <div className="status-game" style={{ marginBottom: '3rem' }}>
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--primary)' }}>Apex Legends</h2>
          
          <div className="status-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'rgba(24, 24, 27, 0.5)', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <div className="status-name">Apex Legends</div>
            <div className="status-detection" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Last detection:</div>
                <div>Never</div>
              </div>
              <div style={{ backgroundColor: '#22c55e', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', fontWeight: 'bold' }}>UNDETECTED</div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className="status-game" style={{ marginBottom: '3rem' }}>
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--primary)' }}>Rust</h2>
          
          <div className="status-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'rgba(24, 24, 27, 0.5)', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <div className="status-name">Rust</div>
            <div className="status-detection" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Last detection:</div>
                <div>Never</div>
              </div>
              <div style={{ backgroundColor: '#22c55e', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', fontWeight: 'bold' }}>UNDETECTED</div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        
        <div className="status-game" style={{ marginBottom: '3rem' }}>
          <h2 className="text-3xl font-bold mb-8" style={{ color: 'var(--primary)' }}>CoD: Black Ops 6</h2>
          
          <div className="status-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', backgroundColor: 'rgba(24, 24, 27, 0.5)', borderRadius: '0.5rem', marginBottom: '1rem' }}>
            <div className="status-name">Black Ops 6 Lite</div>
            <div className="status-detection" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Last detection:</div>
                <div>3 months ago</div>
              </div>
              <div style={{ backgroundColor: '#22c55e', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.25rem', fontWeight: 'bold' }}>UNDETECTED</div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <img src="/images/footer_logo.png" alt="POSE" className="footer-logo" />
              <p>Unleash your full power to beat skilled players and take control of every game with ease and confidence.</p>
            </div>
            
            <div className="footer-links">
              <h3>Navigation</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#games">Games Catalog</a></li>
                <li><a href="/status">Status</a></li>
                <li><a href="/#faq">FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Social networks</h3>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ backgroundColor: 'var(--primary)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" style={{ backgroundColor: 'var(--primary)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="https://discord.com/invite/advanceaim" style={{ backgroundColor: 'var(--primary)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>Copyright © 2025 POSE. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Status;
