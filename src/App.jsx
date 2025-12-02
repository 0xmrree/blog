import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Projects from './components/Projects'
import Articles from './components/Articles'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="content-grid">
          <Projects />
          <Articles />
        </div>
      </main>
      <footer className="footer">
        <p>© MMXXV</p>
      </footer>
    </div>
  )
}

export default App
