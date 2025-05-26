import React, { useState } from 'react';
import './App.css';
import * as Popover from '@radix-ui/react-popover';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="App" style={{ paddingTop: '100px' }}>
        <header className="navbar">
          <div className="container">
          <div className="logo">
            <a href="/">
              <img src="/images/advanceaim_logo.png" alt="POSE Logo" height="84" />
            </a>
          </div>
          <nav className="navbar-links">
            <a href="/">Home</a>
            <a href="#games">Games Catalog</a>
            <a href="/status">Status</a>
            <a href="#faq">FAQ</a>
            <a href="https://discord.com/invite/K3rqC9EW4v">Contact</a>
          </nav>
            <Popover.Root>
              <Popover.Trigger asChild>
                <button
                  className="modern-login-btn"
                  style={{
                    background: 'rgba(38, 20, 56, 0.38)',
                    border: '1px solid #371955',
                    color: '#fff',
                    borderRadius: '1.1rem',
                    fontFamily: 'Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
                    fontWeight: 500,
                    fontSize: '1.08rem',
                    padding: '0.62rem 2.4rem 0.62rem 1.7rem',
                    minWidth: 240,
                    minHeight: 54,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    letterSpacing: '0.01em',
                    backdropFilter: 'blur(56px)',
                    WebkitBackdropFilter: 'blur(56px)',
                    boxShadow: 'none',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'background 0.18s, border 0.18s, color 0.18s, transform 0.16s, box-shadow 0.18s',
                  }}
                >
                  <span className="modern-login-btn__flex">
                    <span className="modern-login-btn__icon" style={{display: 'flex', alignItems: 'center', transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)'}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H9m0 0l3-3m-3 3l3 3" />
                      </svg>
                    </span>
                    <span className="modern-login-btn__text" style={{transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)'}}>Customer login</span>
                  </span>
                </button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="login-popover-content" sideOffset={4} align="center">
                  {showRegister ? (
                    <form className="login-form">
                      <h3 className="login-title">Register</h3>
                      <input className="login-input" type="text" placeholder="Username" autoFocus />
                      <input className="login-input" type="email" placeholder="Email" />
                      <input className="login-input" type="password" placeholder="Password" />
                      <input className="login-input" type="password" placeholder="Confirm Password" />
                      <button type="submit" className="glass-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', fontWeight: 700, fontSize: '1.08rem', padding: '0.8rem 0' }}>
                        <span className="glass-btn__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                          </svg>
                        </span>
                        Register
                      </button>
                      <div style={{ textAlign: 'center', marginTop: '0.7rem' }}>
                        <span style={{ color: '#a855f7', cursor: 'pointer', fontWeight: 500 }} onClick={() => setShowRegister(false)}>
                          Already have an account? Login
                        </span>
                      </div>
                    </form>
                  ) : (
                    <form className="login-form">
                      <h3 className="login-title">Customer Login</h3>
                      <input className="login-input" type="text" placeholder="Username or Email" autoFocus />
                      <input className="login-input" type="password" placeholder="Password" />
                      <button type="submit" className="glass-btn" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', fontWeight: 700, fontSize: '1.08rem', padding: '0.8rem 0' }}>
                        <span className="glass-btn__icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7" />
                          </svg>
                        </span>
                        Login
                      </button>
                      <div style={{ textAlign: 'center', marginTop: '0.7rem' }}>
                        <span style={{ color: '#a855f7', cursor: 'pointer', fontWeight: 500 }} onClick={() => setShowRegister(true)}>
                          Register
                        </span>
                      </div>
                    </form>
                  )}
                  <Popover.Arrow className="login-popover-arrow" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        </header>

        <section className="hero container">
          <div className="hero-flex">
            <div className="hero-text">
              <h1>
                Become <span>unstoppable</span> in <br />
                every game!
              </h1>
              <p>
                Unlock powerful cheats to easily defeat skilled players and take
                control of every match with confidence.
              </p>
              <div className="hero-buttons">
                <a href="#games" className="glass-btn">
                  <span className="glass-btn__icon">
                    <svg className="btn-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </span>
                  Game Catalog
                </a>
                <a href="https://discord.com/invite/K3rqC9EW4v" className="glass-btn">
                  <span className="glass-btn__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </span>
                  Join Discord
                </a>
              </div>
            </div>
            <div className="hero-reyna">
              <div className="reyna-glass">
                <img className="reyna-glass-img" src="/images/reyna.gif" alt="Reyna Background" />
              </div>
            </div>
          </div>
        </section>

        <div className="scroll-indicator container" style={{ textAlign: 'center', padding: '2rem 0', cursor: 'pointer' }}
          onClick={() => {
            const aboutSection = document.querySelector('.about');
            if (aboutSection) {
              const targetY = aboutSection.getBoundingClientRect().top + window.scrollY;
              const startY = window.scrollY;
              const duration = 1500; // 1.5 saniye
              const startTime = performance.now();
              function easeInOutQuad(t) {
                return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
              }
              function animateScroll(now) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const ease = easeInOutQuad(progress);
                window.scrollTo(0, startY + (targetY - startY) * ease);
                if (progress < 1) {
                  requestAnimationFrame(animateScroll);
                }
              }
              requestAnimationFrame(animateScroll);
            }
          }}
        >
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="5" width="30" height="50" rx="15" stroke="#a855f7" strokeWidth="3" fill="none" />
            <circle className="scroll-wheel" cx="20" cy="20" r="4" fill="#a855f7">
              <animate attributeName="cy" values="20;36;20" dur="1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </svg>
          <p style={{ color: 'white', fontWeight: 500, marginTop: '0.5rem', letterSpacing: '1px' }}>SCROLL</p>
        </div>

        <section className="about container">
          <h2 className="text-center text-4xl font-bold mb-16">About Us</h2>
        </section>

        <section className="features container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', width: '64px', height: '64px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <img src="/images/feature_icon_instant_delivery.png" alt="Instant Delivery" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Delivery</h3>
              <p>Get your order delivered instantly.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', width: '64px', height: '64px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <img src="/images/feature_icon_trusted.png" alt="Trusted" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted</h3>
              <p>We are a reliable and secure platform.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', width: '64px', height: '64px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <img src="/images/feature_icon_support.png" alt="24/7 Support" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p>Our team is available around the clock.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ backgroundColor: 'rgba(147, 51, 234, 0.2)', width: '64px', height: '64px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <img src="/images/feature_icon_quality.png" alt="Quality Assurance" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p>Top-quality service, every time.</p>
            </div>
          </div>
        </section>

        <section id="games" className="games container">
          <h2 className="text-center text-4xl font-bold mb-16">Explore Games</h2>
          <div className="games-grid">
            <div className="game-card">
              <img src="/images/game_card_apex.png" alt="Apex Legends" />
              <div className="overlay">
                <div className="title">Apex Legends</div>
              </div>
            </div>
            
            <div className="game-card">
              <img src="/images/game_card_rust.png" alt="Rust" />
              <div className="overlay">
                <div className="title">Rust</div>
              </div>
            </div>
            
            <div className="game-card">
              <img src="/images/game_card_blackops.png" alt="CoD: Black Ops 6" />
              <div className="overlay">
                <div className="title">CoD: Black Ops 6</div>
              </div>
            </div>
            
            <div className="game-card">
              <img src="/images/game_card_marvel.png" alt="Marvel Rivals" />
              <div className="overlay">
                <div className="title">Marvel Rivals</div>
              </div>
            </div>
            
            <div className="game-card">
              <img src="/images/game_card_dayz.png" alt="DayZ" />
              <div className="overlay">
                <div className="title">DayZ</div>
              </div>
            </div>
            
            <div className="game-card">
              <img src="/images/game_card_tarkov.png" alt="Escape From Tarkov" />
              <div className="overlay">
                <div className="title">Escape From Tarkov</div>
              </div>
            </div>
            
            <div className="game-card">
              <img src="/images/game_card_valorant.png" alt="Valorant" />
              <div className="overlay">
                <div className="title">Valorant</div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq container">
          <h2 className="text-center text-4xl font-bold mb-4">Frequently Questions</h2>
          <p className="text-center mb-16">Find quick answers to common queries about our products and services.</p>
          
          <div className="accordion">
            <div className="accordion-header">
              <h3>What Is POSE</h3>
              <span>-</span>
            </div>
            <div className="accordion-content">
              <p>POSE is a platform that offers software tools like wallhacks, aimbots, spoofers, and other mods to enhance gameplay. We provide these products for different games, allowing users to customize or improve their in-game experiences.</p>
            </div>
          </div>
          
          <div className="accordion">
            <div className="accordion-header">
              <h3>What payment methods do you accept?</h3>
              <span>+</span>
            </div>
          </div>
          
          <div className="accordion">
            <div className="accordion-header">
              <h3>Is there customer support available?</h3>
              <span>+</span>
            </div>
          </div>
          
          <div className="accordion">
            <div className="accordion-header">
              <h3>Do I need to disable my antivirus for the software?</h3>
              <span>+</span>
            </div>
          </div>
          
          <div className="accordion">
            <div className="accordion-header">
              <h3>What should I do if my account gets banned?</h3>
              <span>+</span>
            </div>
          </div>
        </section>

        <section className="discord container">
          <div className="discord-bg-animated">
            <div className="discord-glow glow1"></div>
            <div className="discord-glow glow2"></div>
            <div className="discord-glow glow3"></div>
            <div className="discord-glow glow4"></div>
            <div className="discord-content">
              <div className="discord-text">
                <h2 className="text-4xl font-bold mb-4">Join Our <span style={{ color: 'var(--primary)' }}>Discord</span> Community</h2>
                <p className="mb-8">Connect with fellow users, get support, and stay up-to-date on all the latest news and updates!</p>
                <a href="https://discord.com/invite/K3rqC9EW4v" className="glass-btn">
                  <span className="glass-btn__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                  </span>
                  Join Discord
                </a>
              </div>
              <div className="discord-image-group">
                <div className="discord-image-item">
                  <img src="/images/discord_community_image1.png" alt="Discord Community 1" />
                </div>
                <div className="discord-image-item">
                  <img src="/images/discord_community_image2.png" alt="Discord Community 2" />
                </div>
                <div className="discord-image-item">
                  <img src="/images/discord_community_image3.png" alt="Discord Community 3" />
                </div>
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
                  <li><a href="#games">Games Catalog</a></li>
                  <li><a href="/status">Status</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
              
              <div className="footer-links">
                <h3>Social networks</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" className="glass-btn" style={{ width: '40px', height: '40px', borderRadius: '8px', padding: 0, justifyContent: 'center' }}>
                    <span className="glass-btn__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </span>
                  </a>
                  <a href="#" className="glass-btn" style={{ width: '40px', height: '40px', borderRadius: '8px', padding: 0, justifyContent: 'center' }}>
                    <span className="glass-btn__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </span>
                  </a>
                  <a href="https://discord.com/invite/advanceaim" className="glass-btn" style={{ width: '40px', height: '40px', borderRadius: '8px', padding: 0, justifyContent: 'center' }}>
                    <span className="glass-btn__icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </span>
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
    </>
  );
}

export default App;
