import { Link } from 'react-router-dom'
import './App.css'
import { images } from './assets/images'

function Home() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <img src={images.profile} alt="Profile" className="profile-pic" />
          <div className="header-text">
            <h1 className="name">MrRee.eth (Joe Patchen)</h1>
            <p className="title">Software Engineer</p>
            <p className="bio">
              Currently working at Amazon on Amazon.com and pursuing web3 side projects
            </p>
            <div className="social-links">
              <a href="https://github.com/0xmrree" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span>|</span>
              <a href="https://app.ens.domains/mrree.eth" target="_blank" rel="noopener noreferrer">mrree.eth</a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/joseph-patchen-82ab9515a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </header>

      {/* Article Card */}
      <Link to="/articles/ethereum-simulator" className="article-card-link">
        <div className="article-card">
          <h2 className="article-title">Ethereum Simulator</h2>
          <p className="article-date">12/02/2025</p>
          <p className="article-desc">
            A visual simulator demonstrating Ethereum proof of stake consensus mechanisms including LMD GHOST, Casper FFG, attestations, and more.
          </p>
        </div>
      </Link>

      {/* Footer */}
      <footer className="footer">Powered by ENS + IPFS</footer>
    </div>
  )
}

export default Home
