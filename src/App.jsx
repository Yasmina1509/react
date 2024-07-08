import React from 'react';
import './App.css';
import './shortly.css';
import logo from './imgs/logo (2).png';

function App() {
  return (
    <div>
      <header style={styles.header}>
        <img src={logo} alt="Shortly Logo" />
        <nav style={styles.nav}>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>
        </nav>
        <button style={styles.signUpButton}>Sign Up</button>
      </header>
      <main style={styles.main}>
        <section style={styles.heroSection}>
          <h1>More than just shorter links</h1>
          <button style={styles.getStartedButton}>Get Started</button>
        </section>
        <section style={styles.shortenSection}>
          <input type="text" placeholder="Shorten a link here..." style={styles.input} />
          <button style={styles.shortenButton}>Shorten It!</button>
        </section>
        <section style={styles.boostSection}>
          <h2>Boost your links today</h2>
          <button style={styles.getStartedButton}>Get Started</button>
        </section>
      </main>
      <footer style={styles.footer}>
        <div>Shortly</div>
        <nav style={styles.nav}>
          <a href="#features">Features</a>
          <a href="#resources">Resources</a>
        </nav>
        <div style={styles.socialIcons}>
          <a href="#facebook">FB</a>
          <a href="#twitter">TW</a>
          <a href="#instagram">IG</a>
        </div>
      </footer>
    </div>
  );
}

let styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  signUpButton: {
    backgroundColor: '#2acfcf',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  main: {
    textAlign: 'center',
    padding: '50px 20px',
  },
  heroSection: {
    marginBottom: '50px',
  },
  getStartedButton: {
    backgroundColor: '#2acfcf',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '20px',
  },
  shortenSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '50px',
  },
  input: {
    padding: '10px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  shortenButton: {
    backgroundColor: '#2acfcf',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
  },
  boostSection: {
    backgroundColor: '#3b3054',
    color: '#fff',
    padding: '50px 20px',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#000',
    color: '#fff',
  },
  socialIcons: {
    display: 'flex',
    gap: '10px',
  },
};

export default App;