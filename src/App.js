import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import Articles from './components/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Projects />
        <Articles />
      </main>
      <footer className="footer">
        <p>© 2025 Personal Blog. Crafted with passion.</p>
      </footer>
    </div>
  );
}

export default App;
